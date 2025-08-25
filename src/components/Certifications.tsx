import { Award, ExternalLink, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Professional certifications and courses that validate my expertise in various technologies
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {portfolioData.certifications.map((cert, index) => (
              <div key={index} className={`fade-in-up delay-${(index + 1) * 100}`}>
                <Card className="h-full card-gradient border-0 shadow-portfolio hover-lift group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Award className="w-6 h-6 text-accent" />
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Certified
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-poppins mt-4 group-hover:text-accent transition-colors">
                      {cert.name}
                    </CardTitle>
                    <p className="text-sm text-accent font-semibold">
                      {cert.issuer}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full hover-glow group/btn"
                      onClick={() => window.open(cert.url, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      View Certificate
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Certification Stats */}
          <div className="mt-12 fade-in-up delay-400">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="card-gradient border-0 shadow-portfolio text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-poppins font-bold text-accent mb-2">
                    {portfolioData.certifications.length}+
                  </div>
                  <div className="text-sm text-muted-foreground">Certifications Earned</div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient border-0 shadow-portfolio text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-poppins font-bold text-accent mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Major Platforms</div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient border-0 shadow-portfolio text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-poppins font-bold text-accent mb-2">AI/ML</div>
                  <div className="text-sm text-muted-foreground">Focus Area</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Continue Learning */}
          <div className="text-center mt-12 fade-in-up delay-500">
            <Card className="inline-block card-gradient border-0 shadow-portfolio">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-accent">Continuously expanding</span> my knowledge through courses and hands-on learning
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;