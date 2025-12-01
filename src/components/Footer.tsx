
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:jagat.joshi@example.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <span className="font-code text-2xl font-bold text-primary">Jagat</span>
              <span className="text-2xl font-bold">Joshi</span>
            </div>
            <p className="text-muted-foreground">
              Full Stack Developer & Creative Problem Solver
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110 ${link.color}`}
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <div className="text-center md:text-right">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="group hover:border-primary hover:text-primary"
            >
              <ArrowUp className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>
              © {currentYear} Jagat Joshi. All rights reserved.
            </p>
            <p className="mt-2 md:mt-0">
              Built with ❤️ using React & TypeScript
            </p>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground/50 font-code">
            console.log("Thanks for visiting! 🚀");
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
