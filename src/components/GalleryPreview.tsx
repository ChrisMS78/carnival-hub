import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Images } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const demoImages = [
  { id: "1", src: gallery1, alt: "Karneval Feier 1" },
  { id: "2", src: gallery2, alt: "Karneval Feier 2" },
  { id: "3", src: gallery3, alt: "Karneval Feier 3" },
];

export function GalleryPreview() {
  return (
    <section className="py-20 md:py-28 bg-carnival-dark text-carnival-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-carnival-gold/20 text-carnival-gold rounded-full text-sm font-semibold mb-4">
            <Images className="w-4 h-4 inline mr-2" />
            Impressionen
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Galerie
          </h2>
          <p className="text-lg text-carnival-cream/70">
            Eindrücke aus unseren Veranstaltungen und Feiern
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {demoImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carnival-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/galerie">
            <Button variant="gold" size="lg">
              Alle Bilder ansehen
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
