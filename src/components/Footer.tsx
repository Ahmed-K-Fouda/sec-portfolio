import { Link } from "react-router-dom";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold">
              <span className="text-accent">A</span>hmed.
            </Link>
            <p className="mt-2 text-sm text-foreground/70">
              Front-End Developer | React Specialist
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Ahmed-K-Fouda/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-khaled-fouda/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-foreground/60">
          <p>© {year} Ahmed Khaled Fouda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
