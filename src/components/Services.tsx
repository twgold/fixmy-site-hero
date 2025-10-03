import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, FileCheck, Database } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Research & Evaluation",
    description: "We conduct comprehensive evaluations of education programs and policies using surveys, focus groups, interviews, and data analysis to support organizational growth and student success.",
  },
  {
    icon: Users,
    title: "Capacity Building",
    description: "Build your organization's internal capacity to collect and use data effectively. We develop program logic models and evaluation plans with the right metrics to measure impact.",
  },
  {
    icon: FileCheck,
    title: "IRB Applications",
    description: "Simplify your IRB application process with tailored assistance. From crafting detailed protocols to ensuring ethical compliance, we expedite your approval process.",
  },
  {
    icon: Database,
    title: "Data Management & Dashboards",
    description: "Create customized dashboards for data visualization and real-time analytics. Make informed decisions with clear insights and actionable information.",
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
