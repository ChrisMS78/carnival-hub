import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  { id: "1", title: "Karnevalseröffnung 2025", description: "Der offizielle Start in die neue Karnevalssession!", date: "11. November 2025", time: "19:11 Uhr", location: "Gemeindesaal Bösensell" },
  { id: "2", title: "Kinderkarneval", description: "Bunter Nachmittag für unsere kleinen Jecken.", date: "23. Februar 2025", time: "14:00 Uhr", location: "Turnhalle Bösensell" },
  { id: "3", title: "Große Karnevalssitzung", description: "Der Höhepunkt mit Büttenreden und Tanzgruppen!", date: "1. März 2025", time: "19:11 Uhr", location: "Schützenhalle Bösensell" },
  { id: "4", title: "Rosenmontagsumzug", description: "Der große Umzug durch Bösensell!", date: "3. März 2025", time: "14:00 Uhr", location: "Ortskern Bösensell" },
];

export default function Termine() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 carnival-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4">Termine</h1>
            <p className="text-xl text-primary-foreground/80">Unsere kommenden Veranstaltungen</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {events.map((event) => (
                <div key={event.id} className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="h-2 carnival-gradient rounded-full mb-4" />
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /><span>{event.date}</span></div>
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /><span>{event.time}</span></div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /><span>{event.location}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
