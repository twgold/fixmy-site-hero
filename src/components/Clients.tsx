import rebelbaseLogo from "@/assets/clients/rebelbase.png";
import nyuLogo from "@/assets/clients/nyu.png";
import eqpdLogo from "@/assets/clients/eqpd.png";
import buildonLogo from "@/assets/clients/buildon.png";
import citiLogo from "@/assets/clients/citi.png";
import jaWorldwideLogo from "@/assets/clients/ja-worldwide.png";
import digitalPromiseLogo from "@/assets/clients/digital-promise.png";
import nycSchoolsLogo from "@/assets/clients/nyc-schools.png";

const clients = [
  { name: "EQPD", logo: eqpdLogo },
  { name: "buildOn", logo: buildonLogo },
  { name: "Digital Promise", logo: digitalPromiseLogo },
  { name: "Citi Program", logo: citiLogo },
  { name: "JA Worldwide", logo: jaWorldwideLogo },
  { name: "NYC Department of Education", logo: nycSchoolsLogo },
  { name: "New York University", logo: nyuLogo },
  { name: "RebelBase", logo: rebelbaseLogo },
];

export const Clients = () => {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-muted-foreground">
            We're proud to partner with some of the most respected organizations in education
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <div className="px-8 py-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all duration-300 group min-w-[200px] h-[100px] flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="max-h-[60px] max-w-[180px] object-contain transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
