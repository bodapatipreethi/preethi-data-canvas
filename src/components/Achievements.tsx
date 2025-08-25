import { Trophy, Users, Target, Medal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

const Achievements = () => {
  const achievementIcons = [Trophy, Users, Target, Medal];

  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-background rounded-full mb-6 shadow-portfolio">
              <Trophy className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Achievements & Involvement</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Recognition and active participation in various academic and technical activities
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.achievements.map((achievement, index) => {
              const IconComponent = achievementIcons[index % achievementIcons.length];
              
              return (
                <div key={index} className={`fade-in-up delay-${(index + 1) * 100}`}>
                  <Card className="card-gradient border-0 shadow-portfolio hover-lift h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent/10 rounded-lg">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <CardTitle className="text-lg font-poppins flex-1">
                          {achievement}
                        </CardTitle>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Highlighted Achievement */}
          <div className="mt-12 fade-in-up delay-500">
            <Card className="card-gradient border-0 shadow-portfolio hover-lift">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Medal className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-poppins font-bold mb-4">Hack-B 2025 Finalist</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Reached the final round of Hack-B 2025, demonstrating strong problem-solving skills 
                  and innovative thinking in competitive programming and hackathon environment.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Leadership & Community */}
          <div className="mt-8 fade-in-up delay-600">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-gradient border-0 shadow-portfolio">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="font-poppins font-semibold mb-2">Leadership</h4>
                  <p className="text-sm text-muted-foreground">
                    Outreach Ambassador for Creative Club (AIML)
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-gradient border-0 shadow-portfolio">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="font-poppins font-semibold mb-2">Community</h4>
                  <p className="text-sm text-muted-foreground">
                    Active member of College Coding Club
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;