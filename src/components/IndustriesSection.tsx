import { Building2, HeartPulse, Home, Car, Factory } from "lucide-react";

const industries = [
  { icon: Building2, name: "SaaS", description: "Scalable AI features for software platforms" },
  { icon: HeartPulse, name: "Healthcare", description: "Intelligent diagnostics and patient care" },
  { icon: Home, name: "Real Estate", description: "Smart property and market analytics" },
  { icon: Car, name: "Automotive", description: "Connected vehicle and fleet solutions" },
  { icon: Factory, name: "Manufacturing", description: "Predictive maintenance and optimization" },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding bg-card relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Delivering tailored AI solutions across diverse sectors with deep domain expertise.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group p-6 rounded-2xl glass text-center hover:bg-muted/30 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <industry.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{industry.name}</h3>
              <p className="text-sm text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
