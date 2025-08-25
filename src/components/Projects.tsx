import { Folder, Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
              <Folder className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of projects that showcase my skills in data analysis, AI/ML, and software development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div key={project.id} className={`fade-in-up delay-${(index + 1) * 100}`}>
                <Card className="h-full card-gradient border-0 shadow-portfolio hover-lift group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Folder className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 hover:bg-accent/10"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                        {project.featured && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 hover:bg-accent/10"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-poppins mt-4 group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-accent/20 text-accent hover:bg-accent hover:text-white transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full hover-glow group/btn"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      View Code
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12 fade-in-up delay-400">
            <Button
              variant="outline"
              size="lg"
              className="hover-glow"
              onClick={() => window.open(portfolioData.personal.github, "_blank")}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;