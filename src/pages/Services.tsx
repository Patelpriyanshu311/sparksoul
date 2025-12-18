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
  Clock,
  Megaphone,
  PenTool,
} from "lucide-react";

const services = [
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development",
    shortDesc:
      "Custom web applications built for performance, scalability, and exceptional user experience.",
    description:
      "We create powerful web applications using cutting-edge technologies. From complex enterprise platforms to elegant marketing sites, our solutions are built to scale with your business.",
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
    shortDesc:
      "Native and cross-platform mobile applications that users love and businesses rely on.",
    description:
      "Build engaging mobile experiences that work seamlessly across iOS and Android.",
    features: [
      "iOS & Android Native Apps",
      "Cross-platform Development",
      "Mobile-first Design",
      "Offline-first Architecture",
      "Push Notifications",
      "App Store Optimization",
    ],
    benefits: [
      { icon: Users, text: "Increased engagement" },
      { icon: Clock, text: "Faster time to market" },
      { icon: TrendingUp, text: "Higher conversions" },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "ai-automation",
    icon: Brain,
    title: "AI & Automation",
    shortDesc:
      "Intelligent systems that automate processes and unlock business insights.",
    description:
      "Harness AI to automate workflows, analyze data, and make smarter decisions.",
    features: [
      "Machine Learning Models",
      "NLP & Chatbots",
      "Computer Vision",
      "Predictive Analytics",
      "Process Automation",
    ],
    benefits: [
      { icon: Zap, text: "80% faster processing" },
      { icon: TrendingUp, text: "Cost reduction" },
      { icon: Shield, text: "High accuracy" },
    ],
    technologies: ["Python", "TensorFlow", "OpenAI", "LangChain"],
    gradient: "from-primary to-accent",
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    shortDesc:
      "Human-centered design that drives usability, engagement, and conversions.",
    description:
      "We design interfaces that are beautiful, intuitive, and business-focused.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "Interaction Design",
      "Usability Testing",
    ],
    benefits: [
      { icon: Users, text: "Better user satisfaction" },
      { icon: TrendingUp, text: "Higher conversions" },
      { icon: Clock, text: "Reduced dev time" },
    ],
    technologies: ["Figma", "Adobe XD", "Framer", "Tailwind"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    shortDesc:
      "Scalable infrastructure and automated pipelines for modern applications.",
    description:
      "We design secure, scalable cloud architectures with CI/CD pipelines.",
    features: [
      "Cloud Architecture",
      "CI/CD Pipelines",
      "Docker & Kubernetes",
      "Monitoring & Security",
    ],
    benefits: [
      { icon: Zap, text: "High availability" },
      { icon: TrendingUp, text: "Lower infrastructure cost" },
      { icon: Shield, text: "Enterprise security" },
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "workflow-automation",
    icon: Workflow,
    title: "Workflow Automation",
    shortDesc:
      "Eliminate manual work with intelligent automation solutions.",
    description:
      "Automate repetitive tasks and integrate systems end-to-end.",
    features: [
      "Business Process Automation",
      "System Integration",
      "Reporting & Analytics",
    ],
    benefits: [
      { icon: Clock, text: "Time savings" },
      { icon: Shield, text: "Error reduction" },
      { icon: TrendingUp, text: "Productivity boost" },
    ],
    technologies: ["Zapier", "n8n", "Node.js", "REST APIs"],
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    shortDesc:
      "Growth-focused digital marketing strategies that deliver results.",
    description:
      "We grow your online presence through SEO, ads, content, and analytics.",
    features: [
      "SEO & SEM",
      "Google & Meta Ads",
      "Social Media Marketing",
      "Email Campaigns",
      "Analytics Tracking",
    ],
    benefits: [
      { icon: TrendingUp, text: "Higher visibility" },
      { icon: Users, text: "Targeted audience" },
      { icon: Zap, text: "Lead generation" },
    ],
    technologies: ["Google Ads", "Meta Ads", "SEMrush", "HubSpot"],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: "graphic-design",
    icon: PenTool,
    title: "Graphic Design",
    shortDesc:
      "Creative visual designs that elevate your brand identity.",
    description:
      "We design stunning visuals for branding, marketing, and digital platforms.",
    features: [
      "Logo & Branding",
      "Social Media Creatives",
      "Print Design",
      "Marketing Collaterals",
    ],
    benefits: [
      { icon: Users, text: "Brand recognition" },
      { icon: TrendingUp, text: "Higher engagement" },
      { icon: Zap, text: "Professional appeal" },
    ],
    technologies: ["Photoshop", "Illustrator", "Figma", "Canva"],
    gradient: "from-pink-500 to-rose-500",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Overview */}
        <section className="section-padding">
          <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="p-8 rounded-3xl glass hover:scale-[1.02] transition"
              >
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.shortDesc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Details */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${index % 2 === 0 ? "bg-muted/20" : ""}`}
          >
            <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  {service.description}
                </p>
                <Button variant="gradient" size="xl" asChild>
                  <Link to="/contact">
                    Discuss Your Project
                    <ArrowUpRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
              </div>

              <div className="p-10 rounded-3xl glass">
                <ul className="space-y-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <CheckCircle className="text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Services;
