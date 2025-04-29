import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = [
    "build exceptional web experiences.",
    "craft responsive designs.",
    "create dynamic applications.",
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = useRef(100);
  const deletingSpeed = useRef(50);
  const pauseTime = useRef(1000);

  useEffect(() => {
    const animation = setTimeout(
      () => {
        const currentPhrase = phrases[phraseIndex];

        if (!isDeleting) {
          setText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          if (charIndex >= currentPhrase.length) {
            setIsDeleting(true);
            clearTimeout(animation);
            setTimeout(() => {}, pauseTime.current);
          }
        } else {
          setText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);

          if (charIndex <= 0) {
            setIsDeleting(false);
            setPhraseIndex((phraseIndex + 1) % phrases.length);
          }
        }
      },
      isDeleting ? deletingSpeed.current : typingSpeed.current
    );

    return () => clearTimeout(animation);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-20 pt-36 px-4"
    >
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          <div className="max-w-2xl space-y-6 animate-fade-in text-center md:text-left">
            <p className="text-accent font-mono text-sm md:text-base">
              Hi, my name is
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Ahmed Khaled Fouda
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-foreground/70">
              <span>I </span>
              <span className="text-accent">{text}</span>
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl">
              I'm a front-end developer specializing in React.js and modern
              JavaScript frameworks. I craft high-performance, responsive, and
              visually stunning web applications.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <Button size="lg" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          {/* Profile Image - hidden on small screens */}
          <div className="relative hidden md:block w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-xl animate-fade-in">
            <img
              src="/assets/images/ME.jpeg"
              alt="Ahmed Khaled Fouda"
              className="w-full h-full object-cover animate-slow-spin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
