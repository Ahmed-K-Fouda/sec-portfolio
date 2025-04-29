import { Card } from "@/components/ui/card";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "HTML5 & CSS3",
  "Redux",
  "React Query",
  "Framer Motion",
  "Git & GitHub",
  "Responsive Design",
  "RESTful APIs",
];

export default function About() {
  return (
    <section id="about" className="section bg-muted/50">
      <div className="container-tight">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">About Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg">
              Hello! I'm Ahmed, a passionate Front-End Developer with expertise
              in React.js and modern JavaScript frameworks. I enjoy creating
              intuitive and engaging user interfaces that deliver exceptional
              user experiences.
            </p>
            <p className="text-lg">
              My approach combines clean code principles, performance
              optimization, and creative problem-solving to build scalable and
              maintainable applications. I'm constantly learning and exploring
              new technologies to stay at the forefront of web development.
            </p>
            <p className="text-lg">
              When I'm not coding, you might find me exploring design trends,
              contributing to open-source projects, or sharing my knowledge
              through technical articles and tutorials.
            </p>
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Card
                  key={skill}
                  className="px-4 py-2 bg-background border border-border hover:border-accent transition-colors duration-300"
                >
                  {skill}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
