import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, PartyPopper } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Gemeinschaft",
    description: "Zusammen feiern, zusammen lachen - das ist unser Motto!",
  },
  {
    icon: Heart,
    title: "Tradition",
    description: "Wir pflegen die Karnevalstradition seit vielen Jahren.",
  },
  {
    icon: PartyPopper,
    title: "Feste feiern",
    description: "Von jung bis alt - bei uns ist jeder willkommen!",
  },
];

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-secondary confetti-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 animate-fade-up">
            Helau Bösensell
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
            Wer sind wir?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
            Wir vom K.E.B e.V. möchten die Tradition des Karnevals aufrechterhalten, 
            so dass jung und alt zusammen die fünfte Jahreszeit vor Ort in Bösensell feiern können. 
            Wenn Du mitmachen möchtest, würden wir uns freuen wenn Du bei der aktiven Mitgestaltung helfen möchtest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-up delay-500">
          <Link to="/ueber-uns">
            <Button variant="default" size="lg">
              Mehr über uns
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
