import { Briefcase, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-background rounded-full mb-6 shadow-portfolio">
              <Briefcase className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Professional experience and notable projects that shaped my journey
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className={`fade-in-up delay-${(index + 1) * 100}`}>
                <Card className="card-gradient border-0 shadow-portfolio hover-lift">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        {exp.type === "Internship" ? (
                          <Briefcase className="w-6 h-6 text-accent" />
                        ) : (
                          <Award className="w-6 h-6 text-accent" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <CardTitle className="text-xl font-poppins text-foreground">
                              {exp.position}
                            </CardTitle>
                            <p className="text-accent font-semibold">{exp.company}</p>
                          </div>
                          <Badge 
                            variant={exp.type === "Internship" ? "default" : "secondary"}
                            className="bg-accent/10 text-accent"
                          >
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 fade-in-up delay-300">
            <Card className="inline-block card-gradient border-0 shadow-portfolio">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-accent">Looking for opportunities</span> to apply my skills in data analysis and AI/ML development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;