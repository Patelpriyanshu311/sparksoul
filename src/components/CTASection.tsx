import { Link } from "react-router-dom";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
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
            Join the ranks of industry leaders who've transformed their operations
            with our AI solutions. Let's discuss your unique challenges.
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
  );
};

export default CTASection;
