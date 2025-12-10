import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 carnival-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-carnival-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Mitmachen? Wir freuen uns auf Dich!
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Du möchtest Teil unserer Karnevalsgemeinschaft werden? 
            Kontaktiere uns und werde Teil der K.E.B Familie!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/kontakt">
              <Button variant="hero" size="lg">
                <Mail className="mr-2" />
                Kontaktformular
              </Button>
            </Link>
            <a href="tel:+49123456789">
              <Button variant="heroOutline" size="lg">
                <Phone className="mr-2" />
                Anrufen
              </Button>
            </a>
          </div>
          
          <p className="text-primary-foreground/70 text-lg font-display italic">
            "Helau Bösensell!" 🎭
          </p>
        </div>
      </div>
    </section>
  );
}
