import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Rocket, Users, Award, Clock, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technology to deliver solutions that set you apart.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "Your success is our success. We work as an extension of your team, not just a vendor.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in every line of code and every interaction.",
  },
  {
    icon: Clock,
    title: "Agility",
    description: "We move fast without breaking things, adapting quickly to your evolving needs.",
  },
];

const services = [
  {
    title: "AI & Machine Learning Solutions",
    description: "Custom AI models, natural language processing, computer vision, and predictive analytics tailored to your business challenges.",
    features: ["Custom Model Development", "NLP & Chatbots", "Computer Vision", "Predictive Analytics"],
  },
  {
    title: "Intelligent Automation",
    description: "End-to-end workflow automation that eliminates manual tasks, reduces errors, and frees your team to focus on strategic work.",
    features: ["Process Automation", "RPA Integration", "Smart Workflows", "Task Orchestration"],
  },
  {
    title: "Custom Software & Data Platforms",
    description: "Scalable, secure platforms built from the ground up to handle your unique data and operational requirements.",
    features: ["Data Pipelines", "Analytics Dashboards", "API Development", "Cloud Architecture"],
  },
  {
    title: "Enterprise Consulting",
    description: "Strategic guidance for digital transformation, technology roadmaps, and AI adoption that aligns with your business goals.",
    features: ["Digital Strategy", "Tech Roadmaps", "AI Readiness", "Change Management"],
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
                Building the <span className="gradient-text">Future</span> of Business
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up animation-delay-200">
                We're a team of engineers, data scientists, and strategists passionate about 
                harnessing AI to solve complex challenges and drive meaningful growth.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-card">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl glass">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <Rocket className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize AI technology by making intelligent solutions accessible, 
                  practical, and impactful for businesses of all sizes. We believe every 
                  organization deserves the power of AI-driven insights and automation.
                </p>
              </div>
              <div className="p-8 rounded-2xl glass">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where businesses leverage AI not just for efficiency, but for 
                  innovation—where intelligent systems augment human creativity and 
                  decision-making to build a better, more connected future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                The principles that guide everything we do.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="p-6 rounded-2xl glass text-center hover:bg-muted/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section-padding bg-card">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Capabilities</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Comprehensive AI and technology services designed to transform your business.
              </p>
            </div>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={service.title} className="p-8 rounded-2xl glass hover:bg-muted/30 transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span key={feature} className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Discuss Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
