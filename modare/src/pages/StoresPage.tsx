import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CategoryFilter } from "@/components/home/CategoryFilter";
import { StoreCard } from "@/components/stores/StoreCard";
import { stores, categories } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const StoresPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredStores = useMemo(() => {
    return stores.filter((store) => {
      const matchesSearch = searchQuery === "" || 
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.city.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "" || 
        store.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container-narrow">
            <div className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl font-semibold">
                Todas as Lojas
              </h1>
              <p className="text-muted-foreground mt-2">
                Explore nossa curadoria de lojas parceiras
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar por nome ou cidade..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <CategoryFilter 
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              {filteredStores.length} {filteredStores.length === 1 ? "loja encontrada" : "lojas encontradas"}
            </p>

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

export default StoresPage;
