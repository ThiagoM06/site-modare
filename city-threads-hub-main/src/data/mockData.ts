export interface Store {
  id: string;
  name: string;
  image: string;
  coverImage: string;
  category: string;
  city: string;
  rating: number;
  description: string;
  phone: string;
  address: string;
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
}

export const stores: Store[] = [
  {
    id: "1",
    name: "Atelier Urbano",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    category: "Moda Feminina",
    city: "São Paulo",
    rating: 4.8,
    description: "Roupas exclusivas com design contemporâneo. Peças únicas para mulheres que valorizam estilo e qualidade.",
    phone: "+5511999999999",
    address: "Rua Oscar Freire, 123 - Jardins",
    products: [
      { id: "p1", name: "Vestido Midi Linho", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80", price: 289.90, category: "Vestidos" },
      { id: "p2", name: "Blazer Oversized", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80", price: 459.90, category: "Casacos" },
      { id: "p3", name: "Calça Wide Leg", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80", price: 229.90, category: "Calças" },
      { id: "p4", name: "Blusa Cropped", image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80", price: 149.90, category: "Blusas" },
      { id: "p5", name: "Saia Plissada", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj96f?w=400&q=80", price: 189.90, category: "Saias" },
      { id: "p6", name: "Conjunto Alfaiataria", image: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=400&q=80", price: 549.90, category: "Conjuntos" },
    ]
  },
  {
    id: "2",
    name: "Street Culture",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&q=80",
    category: "Streetwear",
    city: "São Paulo",
    rating: 4.6,
    description: "O melhor do streetwear nacional e internacional. Tênis, bonés e peças exclusivas para quem vive a cultura urbana.",
    phone: "+5511988888888",
    address: "Rua Augusta, 456 - Consolação",
    products: [
      { id: "p7", name: "Camiseta Oversized", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80", price: 129.90, category: "Camisetas" },
      { id: "p8", name: "Moletom Hoodie", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80", price: 249.90, category: "Moletons" },
      { id: "p9", name: "Calça Cargo", image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400&q=80", price: 199.90, category: "Calças" },
      { id: "p10", name: "Jaqueta Corta-Vento", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80", price: 349.90, category: "Jaquetas" },
    ]
  },
  {
    id: "3",
    name: "Elegance Store",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
    category: "Moda Festa",
    city: "Rio de Janeiro",
    rating: 4.9,
    description: "Vestidos e trajes para ocasiões especiais. Casamentos, formaturas e eventos sociais.",
    phone: "+5521999999999",
    address: "Av. Ataulfo de Paiva, 789 - Leblon",
    products: [
      { id: "p11", name: "Vestido Longo Cetim", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&q=80", price: 899.90, category: "Vestidos" },
      { id: "p12", name: "Vestido Midi Renda", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80", price: 649.90, category: "Vestidos" },
      { id: "p13", name: "Conjunto Social", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80", price: 759.90, category: "Conjuntos" },
    ]
  },
  {
    id: "4",
    name: "Casual & Co",
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
    category: "Casual",
    city: "Belo Horizonte",
    rating: 4.5,
    description: "Moda casual e confortável para o dia a dia. Básicos de qualidade com preços acessíveis.",
    phone: "+5531999999999",
    address: "Rua da Bahia, 321 - Centro",
    products: [
      { id: "p14", name: "T-Shirt Básica", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80", price: 79.90, category: "Camisetas" },
      { id: "p15", name: "Jeans Slim", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80", price: 179.90, category: "Calças" },
      { id: "p16", name: "Cardigan Tricot", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80", price: 199.90, category: "Casacos" },
    ]
  },
  {
    id: "5",
    name: "Kids Fashion",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=1200&q=80",
    category: "Moda Infantil",
    city: "Curitiba",
    rating: 4.7,
    description: "Roupas divertidas e confortáveis para crianças. Do básico ao festivo, tudo para os pequenos.",
    phone: "+5541999999999",
    address: "Rua XV de Novembro, 555 - Centro",
    products: [
      { id: "p17", name: "Conjunto Moletom", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&q=80", price: 149.90, category: "Conjuntos" },
      { id: "p18", name: "Vestido Floral", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&q=80", price: 119.90, category: "Vestidos" },
    ]
  },
  {
    id: "6",
    name: "Vintage Soul",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80",
    category: "Vintage",
    city: "São Paulo",
    rating: 4.4,
    description: "Peças vintage garimpadas com curadoria especial. Moda sustentável com história.",
    phone: "+5511977777777",
    address: "Rua Aspicuelta, 99 - Vila Madalena",
    products: [
      { id: "p19", name: "Jaqueta Jeans Vintage", image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=400&q=80", price: 189.90, category: "Jaquetas" },
      { id: "p20", name: "Camisa Retrô", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80", price: 129.90, category: "Camisas" },
    ]
  }
];

export const categories = [
  "Moda Feminina",
  "Streetwear",
  "Moda Festa",
  "Casual",
  "Moda Infantil",
  "Vintage"
];

export const dashboardMetrics = {
  views: 2847,
  viewsChange: { value: 12, type: "increase" as const },
  whatsappClicks: 156,
  whatsappChange: { value: 23, type: "increase" as const },
  favorites: 89,
  favoritesChange: { value: 5, type: "decrease" as const },
  conversionRate: 5.5,
};
