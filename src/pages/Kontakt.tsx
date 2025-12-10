import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Kontakt() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "Nachricht gesendet!", description: "Wir melden uns bald bei Ihnen." });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 carnival-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4">Kontakt</h1>
            <p className="text-xl text-primary-foreground/80">Wir freuen uns auf Ihre Nachricht!</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">Kontaktdaten</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Adresse</h3>
                      <p className="text-muted-foreground">Musterstraße 123<br />48329 Bösensell</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">E-Mail</h3>
                      <a href="mailto:info@keb-ev.de" className="text-primary hover:underline">info@keb-ev.de</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Telefon</h3>
                      <p className="text-muted-foreground">+49 123 456789</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Nachricht senden</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><Label htmlFor="name">Name *</Label><Input id="name" name="name" required className="mt-2" /></div>
                    <div><Label htmlFor="email">E-Mail *</Label><Input id="email" name="email" type="email" required className="mt-2" /></div>
                  </div>
                  <div><Label htmlFor="subject">Betreff</Label><Input id="subject" name="subject" className="mt-2" /></div>
                  <div><Label htmlFor="message">Nachricht *</Label><Textarea id="message" name="message" rows={5} required className="mt-2" /></div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Wird gesendet..." : "Absenden"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
