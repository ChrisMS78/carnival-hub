import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const albums = [
  { id: "1", title: "Karneval 2024", images: [gallery1, gallery2, gallery3], date: "Februar 2024" },
  { id: "2", title: "Kinderkarneval 2024", images: [gallery3, gallery1, gallery2], date: "Februar 2024" },
];

export default function Galerie() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 carnival-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4">Galerie</h1>
            <p className="text-xl text-primary-foreground/80">Impressionen aus unseren Veranstaltungen</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            {albums.map((album) => (
              <div key={album.id} className="mb-16">
                <h2 className="text-3xl font-display font-bold text-foreground mb-2">{album.title}</h2>
                <p className="text-muted-foreground mb-6">{album.date}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {album.images.map((img, i) => (
                    <div key={i} className="aspect-square rounded-xl overflow-hidden group">
                      <img src={img} alt={`${album.title} ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
