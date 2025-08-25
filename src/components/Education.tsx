import { GraduationCap, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
              <GraduationCap className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Education Card */}
          <div className="fade-in-up delay-100">
            <Card className="card-gradient border-0 shadow-portfolio hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <GraduationCap className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-poppins text-foreground">
                  {portfolioData.education.degree}
                </CardTitle>
                <p className="text-lg text-accent font-semibold">
                  {portfolioData.education.institution}
                </p>
                <p className="text-muted-foreground">
                  {portfolioData.education.duration}
                </p>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
                  <Star className="w-5 h-5 text-accent fill-current" />
                  <span className="text-lg font-semibold text-accent">
                    CGPA: {portfolioData.education.cgpa}
                  </span>
                </div>
                
                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-poppins font-bold text-accent mb-2">2022</div>
                    <div className="text-sm text-muted-foreground">Started</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-poppins font-bold text-accent mb-2">2026</div>
                    <div className="text-sm text-muted-foreground">Expected Graduation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-poppins font-bold text-accent mb-2">AI/ML</div>
                    <div className="text-sm text-muted-foreground">Specialization</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Academic Focus */}
          <div className="mt-8 fade-in-up delay-200">
            <Card className="card-gradient border-0 shadow-portfolio">
              <CardContent className="p-6">
                <h3 className="text-lg font-poppins font-semibold mb-4 text-center">Academic Focus Areas</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Artificial Intelligence & Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Data Structures & Algorithms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Database Management Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Natural Language Processing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;