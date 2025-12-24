import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/stores/ProductCard";
import { stores } from "@/data/mockData";
import { MapPin, Star, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const StorePage = () => {
  const { id } = useParams<{ id: string }>();
  const store = stores.find((s) => s.id === id);

  if (!store) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-2xl font-semibold">Loja não encontrada</h1>
            <p className="text-muted-foreground mt-2">
              A loja que você está procurando não existe.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Encontrei a loja ${store.name} no modare e gostaria de mais informações.`
    );
    window.open(`https://wa.me/${store.phone.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Cover Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={store.coverImage}
            alt={store.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        {/* Store Info */}
        <section className="container-narrow relative -mt-20">
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-border animate-slide-up">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="shrink-0">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover shadow-soft"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <span className="text-sm font-medium text-accent">{store.category}</span>
                    <h1 className="font-heading text-3xl md:text-4xl font-semibold mt-1">
                      {store.name}
                    </h1>
                    <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{store.city}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="font-medium text-foreground">{store.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="gold" size="lg" onClick={handleWhatsApp}>
                    <MessageCircle className="h-5 w-5" />
                    Falar com a Loja
                  </Button>
                </div>
                <p className="mt-4 text-muted-foreground">{store.description}</p>
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{store.address}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="container-narrow py-12 md:py-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            Produtos ({store.products.length})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {store.products.map((product, index) => (
              <div 
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  storeName={store.name}
                  storePhone={store.phone}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StorePage;
