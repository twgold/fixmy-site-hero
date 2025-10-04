const clients = [
  "EQPD",
  "buildOn",
  "Acceleration Group",
  "Anti-Defamation League",
  "Bellwether",
  "Capgemini",
  "Digital Promise",
  "FreshDirect",
  "Citi Program",
  "Junior Achievement",
  "NFTE",
  "NYC Department of Education",
  "New York University",
  "RebelBase",
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
                  <div className="px-8 py-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all duration-300 group min-w-[200px]">
                    <span className="text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                      {client}
                    </span>
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
