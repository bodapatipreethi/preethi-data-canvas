import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { portfolioData } from "@/data/portfolio";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("idle");

    const formData = new FormData(e.currentTarget);
    
    // Add the Web3Forms access key
    formData.append("access_key", "7514478f-cb9e-4bfb-bb63-77400de82f05");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus("success");
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      setFormStatus("error");
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-background rounded-full mb-6 shadow-portfolio">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ready to discuss opportunities, collaborations, or just have a chat about data and technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in-up delay-100">
              <div className="space-y-6">
                <Card className="card-gradient border-0 shadow-portfolio hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold mb-1">Email</h3>
                        <a
                          href={`mailto:${portfolioData.personal.email}`}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {portfolioData.personal.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-gradient border-0 shadow-portfolio hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold mb-1">Phone</h3>
                        <a
                          href={`tel:${portfolioData.personal.phone}`}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {portfolioData.personal.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-gradient border-0 shadow-portfolio hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold mb-1">Location</h3>
                        <p className="text-muted-foreground">Ballari, Karnataka, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="font-poppins font-semibold text-lg">Social Links</h3>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="hover-glow flex-1"
                      onClick={() => window.open(portfolioData.personal.linkedin, "_blank")}
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="hover-glow flex-1"
                      onClick={() => window.open(portfolioData.personal.github, "_blank")}
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </Button>
                  </div>
                  
                  <Button
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-white hover-glow"
                    onClick={() => window.open(portfolioData.personal.resumeUrl, "_blank")}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-up delay-200">
              <Card className="card-gradient border-0 shadow-portfolio">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Honeypot field for spam protection */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        required
                        className="h-12"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="h-12"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your message..."
                        required
                        className="min-h-32 resize-none"
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-white hover-glow group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {/* Form Status */}
                    {formStatus === "success" && (
                      <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm">Message sent successfully!</span>
                      </div>
                    )}
                    
                    {formStatus === "error" && (
                      <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                        <AlertCircle className="w-5 h-5" />
                        <span className="text-sm">Failed to send message. Please try again.</span>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;