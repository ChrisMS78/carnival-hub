import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, Download, Users, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const aboutSections = [
  {
    title: "Unsere Geschichte",
    content: "Der K.E.B e.V. wurde gegründet, um die Karnevalstradition in Bösensell zu bewahren und weiterzuführen. Seit vielen Jahren organisieren wir Veranstaltungen für jung und alt.",
  },
  {
    title: "Unsere Mission",
    content: "Wir möchten die Tradition des Karnevals aufrechterhalten, so dass jung und alt zusammen die fünfte Jahreszeit vor Ort in Bösensell feiern können.",
  },
];

const documents = [
  { name: "Satzung K.E.B e.V.", type: "PDF" },
  { name: "Mitgliedsantrag", type: "PDF" },
  { name: "Beitragsordnung", type: "PDF" },
];

const stats = [
  { icon: Users, value: "150+", label: "Mitglieder" },
  { icon: Award, value: "10+", label: "Jahre Tradition" },
  { icon: Heart, value: "20+", label: "Events pro Jahr" },
];

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 carnival-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4">
              Über Uns
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Helau Bösensell - Lernen Sie uns kennen!
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-display font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-12">
              {aboutSections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">{section.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">Downloads</h2>
            <div className="max-w-2xl mx-auto grid gap-4">
              {documents.map((doc) => (
                <div key={doc.name} className="flex items-center justify-between bg-card rounded-xl p-4 shadow-sm border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{doc.name}</div>
                      <div className="text-sm text-muted-foreground">{doc.type}</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
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
