import { ArrowUp, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
            {/* About Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-poppins font-bold mb-4">
                {portfolioData.personal.name}
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                {portfolioData.personal.tagline}
              </p>
              <Button
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open(portfolioData.personal.resumeUrl, "_blank")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-poppins font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: "About", href: "#about" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projects", href: "#projects" },
                  { name: "Experience", href: "#experience" },
                  { name: "Contact", href: "#contact" }
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-poppins font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {portfolioData.personal.email}
                </a>
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <span className="w-4 h-4 text-center">📞</span>
                  {portfolioData.personal.phone}
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/60 text-sm">
                © {currentYear} {portfolioData.personal.name}. All rights reserved.
              </p>
              
              <div className="flex items-center gap-4">
                <p className="text-primary-foreground/60 text-sm">
                  Built with ❤️ using React & Tailwind CSS
                </p>
                
                {/* Back to Top Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollToTop}
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 p-2"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;