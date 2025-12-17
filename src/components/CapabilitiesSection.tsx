import { Brain, Cog, Database, Users } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Custom AI models, predictive analytics, and intelligent systems that learn and adapt to your business needs.",
  },
  {
    icon: Cog,
    title: "Intelligent Automation",
    description: "Streamline workflows, eliminate manual tasks, and boost productivity with smart automation solutions.",
  },
  {
    icon: Database,
    title: "Custom Data Platforms",
    description: "Scalable data infrastructure and analytics platforms that transform raw data into actionable insights.",
  },
  {
    icon: Users,
    title: "Enterprise Consulting",
    description: "Strategic guidance and hands-on support for digital transformation and technology adoption.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="section-padding bg-card relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From intelligent automation to enterprise AI—we deliver solutions that drive real business outcomes.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group p-8 rounded-2xl glass hover:bg-muted/30 transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <capability.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{capability.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
