import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <div className="flex gap-1 items-end">
              <div className="w-2 h-6 rounded bg-primary" />
              <div className="w-2 h-8 rounded bg-primary" />
              <div className="w-2 h-10 rounded bg-primary" />
            </div>
            <span className="text-lg font-bold text-primary">Assessment Solutions LLC</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 text-balance">
            Building Impact Through<br />
            <span className="gradient-text">Insights and Evidence</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-balance">
            We help schools, nonprofits, and other mission-driven organizations use evidence to drive meaningful improvement. Through rigorous research, strategic advising, and effective storytelling, we turn data into insight, and insight into impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold transition-all duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Services
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-1">7+</div>
              <div className="text-sm text-muted-foreground">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-1">30+</div>
              <div className="text-sm text-muted-foreground">Partner Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-1">1M+</div>
              <div className="text-sm text-muted-foreground">Learners Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
