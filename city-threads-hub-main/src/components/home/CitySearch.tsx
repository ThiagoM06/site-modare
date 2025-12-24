import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CitySearchProps {
  onSearch: (city: string) => void;
}

export function CitySearch({ onSearch }: CitySearchProps) {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(city);
  };

  const popularCities = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba"];

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Digite sua cidade..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="h-14 pl-12 pr-28 text-base rounded-full border-2 border-border focus:border-accent bg-card shadow-soft"
          />
          <Button 
            type="submit" 
            variant="gold"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
          >
            <Search className="h-4 w-4 mr-2" />
            Buscar
          </Button>
        </div>
      </form>

      <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
        <span className="text-sm text-muted-foreground">Popular:</span>
        {popularCities.map((cityName) => (
          <button
            key={cityName}
            onClick={() => {
              setCity(cityName);
              onSearch(cityName);
            }}
            className="text-sm text-foreground hover:text-accent transition-colors underline underline-offset-2"
          >
            {cityName}
          </button>
        ))}
      </div>
    </div>
  );
}
