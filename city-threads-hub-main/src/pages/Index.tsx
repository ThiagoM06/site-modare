import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CitySearch } from "@/components/home/CitySearch";
import { CategoryFilter } from "@/components/home/CategoryFilter";
import { StoreCard } from "@/components/stores/StoreCard";
import { stores, categories } from "@/data/mockData";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [searchCity, setSearchCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredStores = useMemo(() => {
    return stores.filter((store) => {
      const matchesCity = searchCity === "" || 
        store.city.toLowerCase().includes(searchCity.toLowerCase());
      const matchesCategory = selectedCategory === "" || 
        store.category === selectedCategory;
      return matchesCity && matchesCategory;
    });
  }, [searchCity, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          <div className="container-narrow relative">
            <div className="max-w-2xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                Descubra a moda local
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
                Encontre as melhores lojas da sua cidade
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto">
                Explore lojas locais, veja as coleções e peça suas roupas favoritas diretamente pelo WhatsApp.
              </p>
            </div>

            <div className="mt-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CitySearch onSearch={setSearchCity} />
            </div>
          </div>
        </section>

        {/* Stores Section */}
        <section className="py-12 md:py-16">
          <div className="container-narrow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="font-heading text-2xl font-semibold">
                  {searchCity ? `Lojas em ${searchCity}` : "Todas as Lojas"}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {filteredStores.length} {filteredStores.length === 1 ? "loja encontrada" : "lojas encontradas"}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <CategoryFilter 
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>

            {filteredStores.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStores.map((store, index) => (
                  <div 
                    key={store.id} 
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <StoreCard
                      id={store.id}
                      name={store.name}
                      image={store.image}
                      category={store.category}
                      city={store.city}
                      rating={store.rating}
                      productsCount={store.products.length}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  Nenhuma loja encontrada para os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
