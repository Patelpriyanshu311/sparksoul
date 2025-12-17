import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Code2, 
  Smartphone, 
  Brain, 
  Palette, 
  Cloud, 
  Workflow,
  CheckCircle,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Clock
} from "lucide-react";

const services = [
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development",
    shortDesc: "Custom web applications built for performance, scalability, and exceptional user experience.",
    description: "We create powerful web applications using cutting-edge technologies. From complex enterprise platforms to elegant marketing sites, our solutions are built to scale with your business.",
    features: [
      "Custom React/Next.js Applications",
      "Progressive Web Apps (PWA)",
      "E-commerce Platforms",
      "SaaS Product Development",
      "API Development & Integration",
      "Performance Optimization",
    ],
    benefits: [
      { icon: Zap, text: "Lightning-fast load times" },
      { icon: Shield, text: "Enterprise-grade security" },
      { icon: TrendingUp, text: "SEO-optimized architecture" },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Apps",
    shortDesc: "Native and cross-platform mobile applications that users love and businesses rely on.",
    description: "Build engaging mobile experiences that work seamlessly across iOS and Android. We focus on performance, usability, and features that drive user retention.",
    features: [
      "iOS & Android Native Apps",
      "Cross-platform Development",
      "Mobile-first Design",
      "Offline-first Architecture",
      "Push Notifications & Engagement",
      "App Store Optimization",
    ],
    benefits: [
      { icon: Users, text: "Increased user engagement" },
      { icon: Clock, text: "Faster time to market" },
      { icon: TrendingUp, text: "Higher conversion rates" },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "ai-automation",
    icon: Brain,
    title: "AI & Automation",
    shortDesc: "Intelligent systems that automate processes, predict outcomes, and unlock new capabilities.",
    description: "Harness the power of artificial intelligence to transform your operations. From machine learning models to intelligent automation workflows, we build AI solutions that deliver real business value.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "Intelligent Process Automation",
      "AI-powered Chatbots",
    ],
    benefits: [
      { icon: Zap, text: "80% faster processing" },
      { icon: TrendingUp, text: "40% cost reduction" },
      { icon: Shield, text: "99%+ accuracy rates" },
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "Azure AI"],
    gradient: "from-primary to-accent",
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    shortDesc: "Human-centered design that creates intuitive, beautiful, and conversion-optimized experiences.",
    description: "Design isn't just how it looks—it's how it works. Our design process combines user research, prototyping, and testing to create interfaces that delight users and drive business results.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Interaction Design",
      "Usability Testing",
      "Design System Development",
    ],
    benefits: [
      { icon: Users, text: "Higher user satisfaction" },
      { icon: TrendingUp, text: "Increased conversions" },
      { icon: Clock, text: "Reduced development time" },
    ],
    technologies: ["Figma", "Adobe XD", "Principle", "Framer", "Storybook", "Tailwind"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    shortDesc: "Scalable infrastructure and automated pipelines that keep your systems running smoothly.",
    description: "Build on a foundation that scales. We design and implement cloud architectures that optimize performance, reduce costs, and ensure your systems are always available when you need them.",
    features: [
      "Cloud Architecture Design",
      "Infrastructure as Code",
      "CI/CD Pipeline Setup",
      "Container Orchestration",
      "Monitoring & Observability",
      "Security & Compliance",
    ],
    benefits: [
      { icon: Zap, text: "99.9% uptime guarantee" },
      { icon: TrendingUp, text: "50% infrastructure savings" },
      { icon: Shield, text: "Enterprise security" },
    ],
    technologies: ["AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "workflow-automation",
    icon: Workflow,
    title: "Workflow Automation",
    shortDesc: "Streamline operations with intelligent automation that eliminates manual work.",
    description: "Transform your business processes with automation that saves time, reduces errors, and frees your team to focus on high-value work. We integrate systems and automate workflows end-to-end.",
    features: [
      "Business Process Automation",
      "System Integration",
      "Document Processing",
      "Email & Communication Automation",
      "Reporting & Analytics",
      "Custom Workflow Development",
    ],
    benefits: [
      { icon: Clock, text: "70% time savings" },
      { icon: Shield, text: "Zero human errors" },
      { icon: TrendingUp, text: "10x productivity" },
    ],
    technologies: ["Zapier", "n8n", "Make", "Python", "Node.js", "REST APIs"],
    gradient: "from-indigo-500 to-violet-500",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-radial from-accent/15 to-transparent rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="inline-block px-6 py-3 rounded-full bg-primary/10 text-primary text-base font-medium mb-8 animate-fade-up">
                Our Services
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
                Full-Stack Solutions for{" "}
                <span className="gradient-text">Digital Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "200ms" }}>
                From concept to deployment, we provide end-to-end technology services 
                that drive innovation and accelerate your business growth.
              </p>
            </div>

            {/* Quick Overview Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <a 
                  key={service.id}
                  href={`#${service.id}`}
                  className="group p-8 rounded-3xl glass hover:bg-muted/30 transition-all duration-300 hover:scale-[1.02] animate-fade-up"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{service.shortDesc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Service Sections */}
        {services.map((service, index) => (
          <section 
            key={service.id}
            id={service.id}
            className={`section-padding ${index % 2 === 0 ? "bg-muted/20" : ""}`}
          >
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h2>
                  <p className="text-xl text-muted-foreground mb-10 leading-relaxed">{service.description}</p>
                  
                  {/* Benefits */}
                  <div className="grid sm:grid-cols-3 gap-6 mb-10">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <benefit.icon className="w-6 h-6 text-primary flex-shrink-0" />
                        <span className="text-base font-medium">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="gradient" size="xl" asChild>
                    <Link to="/contact">
                      Discuss Your Project
                      <ArrowUpRight className="ml-2 h-6 w-6" />
                    </Link>
                  </Button>
                </div>

                {/* Features Card */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="p-10 rounded-3xl glass">
                    <h3 className="text-2xl font-bold mb-8">What's Included</h3>
                    <ul className="space-y-5 mb-10">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-lg text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Technologies</h4>
                      <div className="flex flex-wrap gap-3">
                        {service.technologies.map((tech) => (
                          <span key={tech} className="px-4 py-2 rounded-xl bg-muted text-base font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Let's Build Something{" "}
                <span className="gradient-text">Extraordinary</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Ready to transform your ideas into reality? Our team is here to help 
                you choose the right solutions for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="gradient" size="xl" asChild>
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowUpRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/portfolio">View Our Work</Link>
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

export default Services;