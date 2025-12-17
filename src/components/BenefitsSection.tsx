import { TrendingUp, Shield, Zap, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    stat: "10x",
    label: "Faster Processes",
    description: "Automation that empowers teams to focus on high-value work.",
  },
  {
    icon: BarChart3,
    stat: "360°",
    label: "Data Insights",
    description: "Comprehensive analytics that reveal hidden opportunities.",
  },
  {
    icon: TrendingUp,
    stat: "∞",
    label: "Scalable Solutions",
    description: "Platforms built to grow with your business needs.",
  },
  {
    icon: Shield,
    stat: "99.9%",
    label: "Reliability",
    description: "Enterprise-grade security and uptime you can trust.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-secondary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Spark Soul</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don't just build software—we engineer intelligent systems that deliver measurable impact. 
              Our solutions are designed to transform operations, unlock insights, and future-proof your business.
            </p>
            <ul className="space-y-4">
              {["Data-driven decision making", "Seamless integration with existing systems", "Dedicated support and continuous optimization"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.label}
                className="p-6 rounded-2xl glass text-center hover:bg-muted/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">{benefit.stat}</div>
                <div className="font-semibold text-foreground mb-2">{benefit.label}</div>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
