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
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-muted-foreground">
            We're proud to partner with some of the most respected organizations in education
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
