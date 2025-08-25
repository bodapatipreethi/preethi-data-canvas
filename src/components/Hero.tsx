import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-secondary/10 rounded-full blur-3xl animate-pulse-glow delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Content */}
          <div className="fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 leading-tight">
              {portfolioData.personal.name}
            </h1>
          </div>
          
          <div className="fade-in-up delay-100">
            <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-teal-light">
              {portfolioData.personal.tagline}
            </p>
          </div>
          
          <div className="fade-in-up delay-200">
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
              {portfolioData.about}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-up delay-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg hover-glow group"
                onClick={() => window.open(portfolioData.personal.resumeUrl, "_blank")}
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
                onClick={() => scrollToAbout()}
              >
                View My Work
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="fade-in-up delay-300">
            <div className="flex justify-center items-center gap-6 mb-16">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 hover-glow"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 hover-glow"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 hover-glow"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:scale-110 transition-transform"
          >
            <ArrowDown className="w-8 h-8 mx-auto opacity-70" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;