import { Code, Database, Brain, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: portfolioData.skills.programming,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      skills: portfolioData.skills.tools,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Core Concepts",
      icon: Brain,
      skills: portfolioData.skills.concepts,
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: portfolioData.skills.softSkills,
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-background rounded-full mb-6 shadow-portfolio">
              <Code className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Technical skills and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={category.title} className={`fade-in-up delay-${(index + 1) * 100}`}>
                  <Card className="h-full card-gradient border-0 shadow-portfolio hover-lift">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent/10 rounded-lg">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <CardTitle className="text-xl font-poppins">
                          {category.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="px-3 py-1 text-sm font-medium bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-300 cursor-default"
                            style={{
                              animationDelay: `${skillIndex * 100}ms`
                            }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12 fade-in-up delay-500">
            <Card className="inline-block card-gradient border-0 shadow-portfolio">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-accent">Always learning</span> new technologies and staying updated with industry trends
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;