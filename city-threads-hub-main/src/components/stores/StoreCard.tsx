import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";

interface StoreCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  city: string;
  rating: number;
  productsCount: number;
}

export function StoreCard({ id, name, image, category, city, rating, productsCount }: StoreCardProps) {
  return (
    <Link 
      to={`/loja/${id}`}
      className="group block bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-heading text-lg font-medium truncate group-hover:text-accent transition-colors">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">{category}</p>
          </div>
          <div className="flex items-center gap-1 text-sm shrink-0">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>{city}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            {productsCount} produtos
          </span>
        </div>
      </div>
    </Link>
  );
}
