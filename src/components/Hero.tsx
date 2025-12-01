
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }} 
        />
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-pulse">
          <span className="font-code text-primary/30 text-sm">&lt;dev&gt;</span>
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <span className="font-code text-primary/30 text-sm">console.log(&quot;Hello World&quot;);</span>
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
          <span className="font-code text-primary/30 text-sm">&lt;/dev&gt;</span>
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-500">
          <span className="font-code text-primary/30 text-sm">&#123; &quot;creativity&quot;: true &#125;</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium mb-4">
              👋 Hello, I&apos;m
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Jagat</span>{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Joshi
            </span>
          </h1>

          {/* Subtitle with Typewriter Effect */}
          <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-16 flex items-center justify-center">
            <span className="font-code">
              Full Stack Developer <span className="text-primary animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            A curious mind who believes learning never stops! Specializing in{' '}
            <span className="text-primary font-semibold">MERN Stack</span> development,{' '}
            <span className="text-primary font-semibold">WordPress</span>, and creating{' '}
            <span className="text-primary font-semibold">impactful digital experiences</span>.
          </p>

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
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
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
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
