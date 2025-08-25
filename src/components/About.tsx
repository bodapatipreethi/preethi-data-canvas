import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
              <User className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="fade-in-up delay-100">
              <Card className="card-gradient border-0 shadow-portfolio hover-lift">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    {portfolioData.about}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="font-semibold">Education:</span>
                      <span className="text-muted-foreground">{portfolioData.education.degree}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="font-semibold">CGPA:</span>
                      <span className="text-muted-foreground">{portfolioData.education.cgpa}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="font-semibold">Location:</span>
                      <span className="text-muted-foreground">Ballari, Karnataka</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="fade-in-up delay-200">
              <div className="grid grid-cols-2 gap-6">
                <Card className="card-gradient border-0 shadow-portfolio hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-poppins font-bold text-accent mb-2">3+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                
                <Card className="card-gradient border-0 shadow-portfolio hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-poppins font-bold text-accent mb-2">8.71</div>
                    <div className="text-sm text-muted-foreground">CGPA / 10</div>
                  </CardContent>
                </Card>
                
                <Card className="card-gradient border-0 shadow-portfolio hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-poppins font-bold text-accent mb-2">3+</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </CardContent>
                </Card>
                
                <Card className="card-gradient border-0 shadow-portfolio hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-poppins font-bold text-accent mb-2">2+</div>
                    <div className="text-sm text-muted-foreground">Years Learning</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;