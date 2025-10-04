import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Lightbulb, FileCheck, MessageSquare } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Research & Evaluation",
    description: "We design and conduct rigorous evaluations of education programs and policies. Using surveys, focus groups, interviews, and advanced data analysis, we generate actionable insights that drive organizational learning and student success.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Advising & Capacity Building",
    description: "We strengthen your organization's ability to collect, interpret, and act on data. Our team develops logic models, evaluation frameworks, and performance metrics that help you measure impact and guide strategic decisions.",
  },
  {
    icon: FileCheck,
    title: "Proposal & Submission Support",
    description: "We streamline the development of grant proposals and IRB submissions. From articulating research questions to refining protocols, we help you craft persuasive, compliant applications that accelerate approval and funding.",
  },
  {
    icon: MessageSquare,
    title: "Communications & Storytelling",
    description: "We help you transform your organization's results into compelling stories that engage stakeholders and inspire the broader community. Through clear messaging and data-driven narratives, we make your impact visible and memorable.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive consulting solutions tailored to your organization's unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 bg-card"
            >
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold shadow-md transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};
