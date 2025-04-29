import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types";
import ProjectForm from "@/components/admin/ProjectForm";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Analytics from "@/components/admin/Analytics";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { 
  Edit, 
  Trash, 
  Plus, 
  ArrowLeftCircle, 
  RefreshCw,
  ImagePlus,
  LogOut,
  LayoutDashboard,
  Settings,
  BarChart
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import * as projectService from "@/lib/projectService";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Admin() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [deleteProject, setDeleteProject] = useState<Project | null>(null);
  const { toast } = useToast();
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("projects");

  // Load projects on mount
  useEffect(() => {
    const loadedProjects = projectService.getProjects();
    setProjects(loadedProjects);
  }, []);

  const handleSave = (project: Project) => {
    if (editingProject) {
      // Update existing project
      const updatedProjects = projectService.updateProject(project);
      setProjects(updatedProjects);
      setEditingProject(null);
      toast({
        title: "Project Updated",
        description: `"${project.title}" has been updated successfully.`,
      });
    } else if (isAdding) {
      // Add new project
      const updatedProjects = projectService.addProject(project);
      setProjects(updatedProjects);
      setIsAdding(false);
      toast({
        title: "Project Added",
        description: `"${project.title}" has been added successfully.`,
      });
    }
  };

  const handleDelete = () => {
    if (deleteProject) {
      const updatedProjects = projectService.deleteProject(deleteProject.id);
      setProjects(updatedProjects);
      toast({
        title: "Project Deleted",
        description: `"${deleteProject.title}" has been deleted.`,
      });
      setDeleteProject(null);
    }
  };

  const handleReset = () => {
    const defaultProjects = projectService.resetToDefaultProjects();
    setProjects(defaultProjects);
    setIsResetDialogOpen(false);
    toast({
      title: "Projects Reset",
      description: "All projects have been reset to their default state.",
    });
  };

  const handleImageUpload = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Image upload functionality will be available in a future update.",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <header className="border-b sticky top-0 z-10 bg-background/80 backdrop-blur-sm shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeftCircle className="h-5 w-5" />
              <span>Back to Site</span>
            </Link>
            <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setIsResetDialogOpen(true)} className="hover:bg-destructive/10 hover:text-destructive transition-colors">
              <RefreshCw className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleLogout} className="hover:bg-primary/10 hover:text-primary transition-colors">
              <LogOut className="h-4 w-4" />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-8">
        {isAdding || editingProject ? (
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {editingProject ? "Edit Project" : "Add New Project"}
              </h2>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleImageUpload} 
                className="flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <ImagePlus className="h-4 w-4" />
                Upload Image
              </Button>
            </div>
            <Card className="border border-border/60 shadow-lg">
              <CardContent className="pt-6">
                <ProjectForm
                  project={editingProject || undefined}
                  onSave={handleSave}
                  onCancel={() => {
                    setEditingProject(null);
                    setIsAdding(false);
                  }}
                />
              </CardContent>
            </Card>
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart className="h-4 w-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="projects" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border border-border/60 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-full bg-primary/10">
                        <LayoutDashboard className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Projects</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Manage your portfolio projects and showcase your work.</p>
                    <Button onClick={() => setIsAdding(true)} className="w-full animate-pulse">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Project
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-border/60 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Settings className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Settings</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Configure your portfolio settings and preferences.</p>
                    <Button variant="outline" className="w-full">
                      Configure
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-border/60 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-full bg-primary/10">
                        <BarChart className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Analytics</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">View insights and statistics about your portfolio.</p>
                    <Button variant="outline" className="w-full" onClick={() => setActiveTab("analytics")}>
                      View Analytics
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="border border-border/60 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>All Projects ({projects.length})</CardTitle>
                      <CardDescription>
                        Manage your portfolio projects. Changes are automatically saved.
                      </CardDescription>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setIsResetDialogOpen(true)}
                      className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Reset All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {projects.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <div className="mb-4">
                        <Plus className="h-12 w-12 mx-auto text-muted-foreground/30" />
                      </div>
                      <p className="text-lg font-medium">No projects found</p>
                      <p className="mt-2">Click "Add Project" to get started.</p>
                      <Button 
                        onClick={() => setIsAdding(true)} 
                        className="mt-4"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Project
                      </Button>
                    </div>
                  ) : (
                    <div className="overflow-x-auto rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50">
                            <TableHead>Title</TableHead>
                            <TableHead>Tags</TableHead>
                            <TableHead>Featured</TableHead>
                            <TableHead className="w-[100px]">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {projects.map((project) => (
                            <TableRow key={project.id} className="hover:bg-muted/40 transition-colors">
                              <TableCell className="font-medium">
                                {project.title}
                              </TableCell>
                              <TableCell>
                                <div className="flex flex-wrap gap-1">
                                  {project.tags.slice(0, 3).map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                  {project.tags.length > 3 && (
                                    <Badge variant="outline" className="text-xs">
                                      +{project.tags.length - 3}
                                    </Badge>
                                  )}
                                </div>
                              </TableCell>
                              <TableCell>
                                {project.featured ? (
                                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Featured</Badge>
                                ) : (
                                  <span className="text-muted-foreground">No</span>
                                )}
                              </TableCell>
                              <TableCell>
                                <div className="flex space-x-2">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setEditingProject(project)}
                                    className="hover:bg-primary/10 hover:text-primary"
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setDeleteProject(project)}
                                    className="hover:bg-destructive/10 hover:text-destructive"
                                  >
                                    <Trash className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics">
              <Analytics />
            </TabsContent>
            
            <TabsContent value="settings">
              <Card className="border border-border/60 shadow-lg">
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Configure your portfolio settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Dark Mode</h3>
                        <p className="text-sm text-muted-foreground">Toggle between light and dark themes</p>
                      </div>
                      <ThemeToggle />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Reset All Data</h3>
                        <p className="text-sm text-muted-foreground">Reset all projects to their default state</p>
                      </div>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsResetDialogOpen(true)}
                        className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Reset All
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </main>

      {/* Delete confirmation dialog */}
      <AlertDialog open={!!deleteProject} onOpenChange={() => setDeleteProject(null)}>
        <AlertDialogContent className="bg-background border border-border/60">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the project "{deleteProject?.title}".
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Reset confirmation dialog */}
      <AlertDialog open={isResetDialogOpen} onOpenChange={setIsResetDialogOpen}>
        <AlertDialogContent className="bg-background border border-border/60">
          <AlertDialogHeader>
            <AlertDialogTitle>Reset All Projects?</AlertDialogTitle>
            <AlertDialogDescription>
              This will reset all projects to their default state. Any changes you've made will be lost.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleReset} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Reset All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
