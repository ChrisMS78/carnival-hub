import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const demoEvents = [
  {
    id: "1",
    title: "Karnevalseröffnung 2025",
    description: "Der offizielle Start in die neue Karnevalssession mit Musik, Tanz und guter Laune!",
    date: "11. November 2025",
    time: "19:11 Uhr",
    location: "Gemeindesaal Bösensell",
  },
  {
    id: "2",
    title: "Kinderkarneval",
    description: "Ein bunter Nachmittag für unsere kleinen Jecken mit Spielen, Verkleidung und vielen Überraschungen.",
    date: "23. Februar 2025",
    time: "14:00 Uhr",
    location: "Turnhalle Bösensell",
  },
  {
    id: "3",
    title: "Große Karnevalssitzung",
    description: "Der Höhepunkt der Session mit Büttenreden, Tanzgruppen und kölschem Humor!",
    date: "1. März 2025",
    time: "19:11 Uhr",
    location: "Schützenhalle Bösensell",
  },
];

export function EventsPreview() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
            Kommende Events
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Unsere nächsten Termine
          </h2>
          <p className="text-lg text-muted-foreground">
            Sei dabei und feiere mit uns die schönsten Karnevalsmomente!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {demoEvents.map((event, index) => (
            <div
              key={event.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              {/* Colored header */}
              <div className="h-3 carnival-gradient" />
              
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium text-foreground">{event.date}</span>
                      <span className="text-muted-foreground"> · {event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-muted-foreground">{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/termine">
            <Button variant="outline" size="lg">
              Alle Termine ansehen
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
