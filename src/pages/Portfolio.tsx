import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight, Code2, Smartphone, Brain, Cloud, Database, Shield } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
    client: "MedCare Solutions",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    problem: "Manual patient scheduling and resource allocation causing 40% operational inefficiency and staff burnout.",
    solution: "Implemented AI-driven scheduling system with predictive analytics for resource optimization and automated patient flow management.",
    result: "40% reduction in operational costs, 60% decrease in patient wait times, and improved staff satisfaction scores by 45%.",
    techStack: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
    tags: ["AI/ML", "Healthcare", "Automation"],
  },
  {
    id: 2,
    title: "Real Estate Lead Conversion Engine",
    client: "PropTech Dynamics",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    problem: "Low lead conversion rates (8%) and inability to identify high-value prospects from thousands of inquiries.",
    solution: "Built intelligent lead scoring system with ML models analyzing 50+ behavioral signals and automated personalized follow-up sequences.",
    result: "3x increase in lead conversion (24%), 50% reduction in sales cycle, and $2.4M additional revenue in first year.",
    techStack: ["Node.js", "Python", "MongoDB", "React", "GCP"],
    tags: ["Machine Learning", "Real Estate", "CRM"],
  },
  {
    id: 3,
    title: "Predictive Maintenance System",
    client: "AutoMax Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop",
    problem: "Unplanned equipment downtime causing $500K monthly losses and production delays.",
    solution: "Deployed IoT sensor network with ML-powered predictive maintenance algorithms detecting failures 72 hours in advance.",
    result: "99.5% prediction accuracy, 85% reduction in unplanned downtime, and $4.8M annual savings.",
    techStack: ["Python", "TensorFlow", "IoT", "Azure", "TimescaleDB"],
    tags: ["Predictive Analytics", "Manufacturing", "IoT"],
  },
  {
    id: 4,
    title: "E-Commerce Personalization Engine",
    client: "ShopSmart Retail",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    problem: "Generic product recommendations resulting in low engagement and 2.1% conversion rate.",
    solution: "Created real-time personalization engine using collaborative filtering and deep learning for product recommendations.",
    result: "156% increase in conversion rate (5.4%), 43% higher average order value, and 2.3x customer retention improvement.",
    techStack: ["Python", "PyTorch", "Redis", "Next.js", "AWS"],
    tags: ["AI/ML", "E-Commerce", "Personalization"],
  },
  {
    id: 5,
    title: "Financial Document Processor",
    client: "FinServe Global",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
    problem: "Manual document processing taking 15 minutes per document with 12% error rate.",
    solution: "Built intelligent document extraction system using OCR and NLP for automated data validation and processing.",
    result: "95% reduction in processing time (45 seconds), 99.2% accuracy, and 70% cost reduction in operations.",
    techStack: ["Python", "OpenCV", "spaCy", "FastAPI", "GCP"],
    tags: ["NLP", "Finance", "Document AI"],
  },
  {
    id: 6,
    title: "Smart Logistics Optimizer",
    client: "TransPort Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    problem: "Inefficient route planning causing 30% excess fuel costs and missed delivery windows.",
    solution: "Developed AI-powered route optimization with real-time traffic integration and dynamic scheduling algorithms.",
    result: "28% fuel cost reduction, 94% on-time delivery rate, and 35% increase in daily deliveries.",
    techStack: ["Python", "OR-Tools", "React Native", "PostgreSQL", "AWS"],
    tags: ["Optimization", "Logistics", "Mobile"],
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "$25M+", label: "Client Value Generated" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "15+", label: "Industries Served" },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-radial from-primary/15 to-transparent rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="inline-block px-6 py-3 rounded-full bg-primary/10 text-primary text-base font-medium mb-8 animate-fade-up">
                Our Portfolio
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
                Transforming Ideas Into{" "}
                <span className="gradient-text">Proven Results</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "200ms" }}>
                Explore our portfolio of successful projects where AI-driven solutions 
                have delivered measurable business impact across industries.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center p-8 rounded-2xl glass animate-fade-up"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">{stat.value}</div>
                  <div className="text-lg text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-muted/20">
          <div className="container-custom">
            <div className="grid gap-16">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative group overflow-hidden rounded-3xl">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="text-primary text-lg font-medium mb-4 block">{project.client}</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">{project.title}</h2>
                    
                    <div className="space-y-8 mb-10">
                      <div className="p-6 rounded-2xl bg-destructive/10 border border-destructive/20">
                        <h3 className="text-xl font-semibold text-destructive mb-3">🔴 The Problem</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{project.problem}</p>
                      </div>
                      
                      <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                        <h3 className="text-xl font-semibold text-primary mb-3">💡 Our Solution</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
                      </div>
                      
                      <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
                        <h3 className="text-xl font-semibold text-green-500 mb-3">🎯 The Result</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{project.result}</p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-muted-foreground">Tech Stack</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="px-4 py-2 rounded-xl bg-muted text-base font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Ready to Build Your <span className="gradient-text">Success Story</span>?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Let's discuss how our AI solutions can transform your business 
                and deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="gradient" size="xl" asChild>
                  <Link to="/contact">
                    Start Your Project
                    <ArrowUpRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;