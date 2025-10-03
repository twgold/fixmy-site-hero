import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
