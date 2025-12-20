import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@sparksoul.in",
    description: "We'll respond within 24 hours",
  },
 {
  icon: Phone,
  title: "Call Us",
  value: [
    "+91 95588 22532",
    "+91 97230 75359",
  ],
  description: "Mon–Fri, 9am–6pm",
},
{
  icon: MapPin,
  title: "Visit Us",
  value: [
    "Bengaluru, Karnataka, India",
    "Ahmedabad, Gujarat, India",
  ],
  description: "By appointment only",
},
  
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_bifn65q",
      "template_xjdzu5a",
      {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
      },
      "yLZYCEJiHmUEe7pD5"
    );

    toast({
      title: "Message sent successfully!",
      description: "We’ll contact you shortly.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
  } catch (err) {
    toast({
      title: "Failed to send",
      description: "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

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
                Let's <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up animation-delay-200">
                Ready to transform your business with AI? We'd love to hear about your challenges 
                and explore how we can help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="p-8 rounded-2xl glass">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Send a Message</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-muted border-border"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-muted border-border"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company (Optional)
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-muted border-border"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        How can we help?
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project, challenges, or questions..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-muted border-border resize-none"
                      />
                    </div>
                    
                    <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">
                  Start a <span className="gradient-text">Conversation</span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  we're here to help. Reach out through any of these channels or fill out the form.
                </p>
                
                <div className="space-y-6 mb-10">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="flex items-start gap-4 p-4 rounded-xl glass"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>

                        <div className="text-primary space-y-1">
                          {Array.isArray(info.value) ? (
                            info.value.map((val, index) => (
                              <p key={index} className="leading-snug">
                                {val}
                              </p>
                            ))
                          ) : (
                            <p className="leading-snug">{info.value}</p>
                          )}
                        </div>

                        <p className="text-sm text-muted-foreground mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
