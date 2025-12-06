import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "A Developer in Progress, Evolving with Every Line of Code. From Frontend Finesse to Backend Power.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-5 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-pulse">
          <span className="font-code text-primary/30 text-sm">&lt;dev&gt;</span>
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <span className="font-code text-primary/30 text-sm">
            console.log(&quot;Hello World !&quot;);
          </span>
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
          <span className="font-code text-primary/30 text-sm">
            &lt;/dev&gt;
          </span>
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-500">
          <span className="font-code text-primary/30 text-sm">
            &#123; &quot;creativity&quot;: true &#125;
          </span>
        </div>
      </div>

      <div>
        <div className="w-full max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center animate-fade-in">
              {/* Greeting */}
              <div className="mt-12 mb-2">
                <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium mb-4">
                  👋 Hello , I&apos;m
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-6xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">{"<"}Jagat</span>{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Joshi {"/>"}
                </span>
              </h1>

              <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl font-mono">
                <span className="text-terminal-green">{">> "}</span>
                {displayedText}
                {/* <span className="animate-blink">|</span> */}
                <span className="text-primary animate-blink animate-pulse font-bold">
                  |
                </span>
              </div>
            </div>
          </div>
          {/* Terminal window */}
          <div className="flex flex-col mt-14 justify-center items-center">
            <div className="flex-1 flex justify-center lg:justify-end animate-fade-in mb-8">
              <div className="terminal-window w-full max-w-md inline-block ">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="text-xs text-muted-foreground ml-2">
                    jagat@dev:~
                  </span>
                </div>
                <div className="py-3 px-12 space-y-3 font-mono text-sm">
                  <div>
                    <span className="text-terminal-green">jagat@dev</span>
                    <span className="text-muted-foreground">:</span>
                    <span className="text-terminal-cyan">~</span>
                    <span className="text-muted-foreground">
                      $ cat aboutJagat.txt
                    </span>
                  </div>
                  <div className="pl-4 space-y-2 text-foreground">
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-pink">→</span>
                      <span className="text-muted-foreground">
                        Name: Jagat Joshi
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-pink">→</span>
                      <span className="text-muted-foreground">
                        Role: Full Stack Developer
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-pink">→</span>
                      <span className="text-muted-foreground">Stack: MERN</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-pink">→</span>
                      <span className="text-muted-foreground">
                        Location: Nepal
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-terminal-green">jagat@dev</span>
                    <span className="text-muted-foreground">:</span>
                    <span className="text-terminal-cyan">~</span>
                    <span className="text-muted-foreground">$ █</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal-style badge */}

            <div className="inline-block mb-6 terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-xs text-muted-foreground ml-2">
                  status.sh
                </span>
              </div>
              <div className="px-4 py-3">
                <span className="code-text text-terminal-green">
                  $ console.log
                </span>
                {/* <span className="code-text text-foreground ml-2"> */}
                <span className="code-text text-muted-foreground ml-2">
                  ("Available for Opportunities");
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg"
          >
            View My Work
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 text-lg"
          >
            Let&apos;s Connect
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Jagat05"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/jagat-joshi-aa5b85221/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:your.joshijagaths@gmail.com"
            className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Download Resume"
          >
            <Download className="h-6 w-6" />
          </a>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
