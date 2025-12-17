import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "40% Cost Reduction",
    subtitle: "Healthcare Provider",
    description: "Implemented AI-driven scheduling and resource optimization, reducing operational costs while improving patient care.",
    tags: ["AI Automation", "Healthcare"],
  },
  {
    title: "3x Lead Conversion",
    subtitle: "Real Estate Platform",
    description: "Built intelligent lead scoring and automated follow-up system that tripled qualified lead conversions.",
    tags: ["Machine Learning", "Real Estate"],
  },
  {
    title: "99.5% Prediction Accuracy",
    subtitle: "Manufacturing Company",
    description: "Deployed predictive maintenance system that virtually eliminated unplanned downtime.",
    tags: ["Predictive Analytics", "Manufacturing"],
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real outcomes from real partnerships. See how we've helped businesses transform.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="group p-8 rounded-2xl glass hover:bg-muted/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm text-primary font-medium">{study.subtitle}</span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">{study.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{study.description}</p>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
