import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Thomas Gold, Ph.D.",
    bio: "Globally recognized leader in education research, evaluation policy and entrepreneurship. Over 20+ years of experience impacting millions of youth and communities in the United States and abroad.",
    linkedin: "http://linkedin.com/in/tomwgold",
  },
  {
    name: "Tuba Erbil, MSc",
    bio: "Data strategist with extensive experience harnessing data for effective decision-making. Masters degrees in information systems and management of technology from Baruch and NYU.",
    linkedin: "http://linkedin.com/in/tubaerbil",
  },
  {
    name: "Xixia Ni, M.A.",
    bio: "Education researcher specializing in research design, statistical modeling, and data visualization. Dual degree from NYU in Education Studies and Education & Social Policy.",
    linkedin: "",
  },
  {
    name: "Leonardo Bullaro, MPA",
    bio: "Seasoned executive with 20+ years of leadership experience across nonprofit, government, and private sectors. Specializes in policy development and workforce initiatives.",
    linkedin: "https://www.linkedin.com/in/leonardo-bullaro/",
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Experienced professionals dedicated to advancing education through research and evaluation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {member.name}
                  </h3>
                  {member.linkedin && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-primary hover:text-primary-hover hover:bg-primary/10"
                      asChild
                    >
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Visit ${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
