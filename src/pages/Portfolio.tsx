import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Award, 
  Building2,
  Quote,
  Star,
  CheckCircle2,
  Zap
} from "lucide-react";

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
    metrics: [
      { value: "40%", label: "Cost Reduction" },
      { value: "60%", label: "Faster Wait Times" },
      { value: "45%", label: "Staff Satisfaction" },
    ],
    featured: true,
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
    metrics: [
      { value: "3x", label: "Lead Conversion" },
      { value: "$2.4M", label: "Added Revenue" },
      { value: "50%", label: "Faster Sales" },
    ],
    featured: false,
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
    metrics: [
      { value: "99.5%", label: "Accuracy" },
      { value: "$4.8M", label: "Annual Savings" },
      { value: "85%", label: "Less Downtime" },
    ],
    featured: true,
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
    metrics: [
      { value: "156%", label: "More Conversions" },
      { value: "43%", label: "Higher AOV" },
      { value: "2.3x", label: "Retention" },
    ],
    featured: false,
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
    metrics: [
      { value: "95%", label: "Time Saved" },
      { value: "99.2%", label: "Accuracy" },
      { value: "70%", label: "Cost Reduction" },
    ],
    featured: false,
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
    metrics: [
      { value: "28%", label: "Fuel Savings" },
      { value: "94%", label: "On-Time" },
      { value: "35%", label: "More Deliveries" },
    ],
    featured: false,
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Sparkles },
  { value: "$25M+", label: "Client Value Generated", icon: TrendingUp },
  { value: "99%", label: "Client Satisfaction", icon: Users },
  { value: "15+", label: "Industries Served", icon: Building2 },
];

const testimonials = [
  {
    quote: "Spark Soul transformed our operations. The AI scheduling system they built saved us millions and our staff couldn't be happier.",
    author: "Sarah Chen",
    role: "COO, MedCare Solutions",
    rating: 5,
  },
  {
    quote: "The predictive maintenance system paid for itself in the first quarter. Absolutely game-changing for our manufacturing efficiency.",
    author: "Michael Torres",
    role: "VP Engineering, AutoMax",
    rating: 5,
  },
  {
    quote: "Their team understood our challenges immediately. The lead scoring system tripled our conversions - remarkable results.",
    author: "Jennifer Walsh",
    role: "CEO, PropTech Dynamics",
    rating: 5,
  },
];

const clientLogos = [
  "MedCare", "PropTech", "AutoMax", "ShopSmart", "FinServe", "TransPort"
];

const Portfolio = () => {
  const featuredProject = projects.find(p => p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden min-h-[90vh] flex items-center">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="absolute top-20 left-10 w-[800px] h-[800px] bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gradient-radial from-accent/20 to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-primary/50 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          
          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-base font-medium mb-10 animate-fade-up">
                <Award className="w-5 h-5" />
                <span>Award-Winning Portfolio</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-up leading-tight" style={{ animationDelay: "100ms" }}>
                We Turn <span className="gradient-text">Complex Problems</span> Into{" "}
                <span className="relative inline-block">
                  <span className="gradient-text">Success Stories</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 4 150 4 298 10" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                        <stop stopColor="hsl(var(--primary))" />
                        <stop offset="1" stopColor="hsl(var(--accent))" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: "200ms" }}>
                Explore real case studies where our AI-driven solutions have delivered 
                <span className="text-foreground font-semibold"> measurable ROI </span> 
                and transformed businesses across industries.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up" style={{ animationDelay: "300ms" }}>
                <Button variant="gradient" size="xl" asChild className="group">
                  <a href="#projects">
                    View Case Studies
                    <ArrowUpRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative overflow-hidden bg-card/50 border-y border-border">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="group text-center p-8 rounded-3xl glass hover:bg-primary/5 transition-all duration-500 hover:scale-105 animate-fade-up cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold gradient-text mb-3 group-hover:scale-105 transition-transform">{stat.value}</div>
                  <div className="text-lg text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 border-b border-border">
          <div className="container-custom">
            <p className="text-center text-muted-foreground mb-10 text-lg">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {clientLogos.map((logo, index) => (
                <div 
                  key={logo}
                  className="text-2xl font-bold text-muted-foreground/40 hover:text-primary transition-colors duration-300 cursor-default animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Project */}
        {featuredProject && (
          <section className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="container-custom relative z-10">
              <div className="flex items-center gap-3 justify-center mb-12">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <span className="text-lg font-semibold text-yellow-500">Featured Case Study</span>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="relative overflow-hidden rounded-3xl">
                    <img 
                      src={featuredProject.image} 
                      alt={featuredProject.title}
                      className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.tags.map((tag) => (
                          <span key={tag} className="px-4 py-2 rounded-full bg-primary/30 text-primary text-sm font-semibold backdrop-blur-md border border-primary/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-primary text-xl font-semibold mb-4 block">{featuredProject.client}</span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">{featuredProject.title}</h2>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    {featuredProject.metrics.map((metric, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/10 text-center">
                        <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6 mb-10">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">The Challenge</h3>
                        <p className="text-muted-foreground leading-relaxed">{featuredProject.problem}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Our Solution</h3>
                        <p className="text-muted-foreground leading-relaxed">{featuredProject.solution}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">The Impact</h3>
                        <p className="text-muted-foreground leading-relaxed">{featuredProject.result}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {featuredProject.techStack.map((tech) => (
                      <span key={tech} className="px-4 py-2 rounded-xl bg-muted text-base font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Projects Grid */}
        <section id="projects" className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                More <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Each project represents a unique challenge solved with innovative AI solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(p => !p.featured || projects.indexOf(p) !== 0).map((project, index) => (
                <div 
                  key={project.id}
                  className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-md text-sm font-semibold border border-border">
                        {project.client}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-semibold backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:gradient-text transition-all duration-300">{project.title}</h3>
                    
                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-3 rounded-xl bg-muted/50">
                          <div className="text-xl font-bold gradient-text">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-6 line-clamp-2">{project.result}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-muted text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-3 py-1.5 rounded-lg bg-muted text-sm font-medium text-muted-foreground">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it — hear from the leaders we've helped succeed
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed italic">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold text-background">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium mb-8">
                <Sparkles className="w-5 h-5" />
                <span>Ready to Transform Your Business?</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Your <span className="gradient-text">Success Story</span> Starts Here
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                Join the ranks of industry leaders who've transformed their operations with our AI solutions. 
                Let's discuss your unique challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="gradient" size="xl" asChild className="group">
                  <Link to="/contact">
                    Schedule Free Consultation
                    <ArrowUpRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/services">Explore Our Services</Link>
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