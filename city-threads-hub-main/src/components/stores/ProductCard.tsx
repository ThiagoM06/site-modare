import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  storeName: string;
  storePhone: string;
}

export function ProductCard({ id, name, image, price, storeName, storePhone }: ProductCardProps) {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Vi o produto "${name}" por ${formatPrice(price)} na loja ${storeName} pelo modare e gostaria de mais informações.`
    );
    window.open(`https://wa.me/${storePhone.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-card transition-all duration-300">
      <div className="aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-sm line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>
        <p className="font-heading text-lg font-semibold mt-2">
          {formatPrice(price)}
        </p>
        <Button 
          variant="gold" 
          size="sm" 
          className="w-full mt-3"
          onClick={handleWhatsApp}
        >
          <MessageCircle className="h-4 w-4" />
          Pedir via WhatsApp
        </Button>
      </div>
    </div>
  );
}
