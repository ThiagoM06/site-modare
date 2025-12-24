import { Header } from "@/components/layout/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { dashboardMetrics, stores } from "@/data/mockData";
import { Eye, MessageCircle, Heart, TrendingUp, Package, Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Using first store as example for the dashboard
  const myStore = stores[0];

  return (
    <div className="min-h-screen bg-secondary/30">
      <Header />
      
      <main className="container-narrow py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-heading text-3xl font-semibold">Painel da Loja</h1>
            <p className="text-muted-foreground mt-1">
              Bem-vindo de volta, {myStore.name}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="minimal">
              <Settings className="h-4 w-4" />
              Configurações
            </Button>
            <Button variant="hero">
              <Plus className="h-4 w-4" />
              Adicionar Produto
            </Button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          <div className="animate-slide-up" style={{ animationDelay: "0s" }}>
            <MetricCard
              title="Visualizações"
              value={dashboardMetrics.views.toLocaleString('pt-BR')}
              change={dashboardMetrics.viewsChange}
              icon={Eye}
              description="Total este mês"
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <MetricCard
              title="Cliques no WhatsApp"
              value={dashboardMetrics.whatsappClicks}
              change={dashboardMetrics.whatsappChange}
              icon={MessageCircle}
              description="Mensagens enviadas"
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <MetricCard
              title="Favoritos"
              value={dashboardMetrics.favorites}
              change={dashboardMetrics.favoritesChange}
              icon={Heart}
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <MetricCard
              title="Taxa de Conversão"
              value={`${dashboardMetrics.conversionRate}%`}
              icon={TrendingUp}
              description="Visualização → WhatsApp"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Products */}
          <div className="bg-card rounded-lg p-6 shadow-soft border border-border animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-lg font-semibold">Produtos Recentes</h2>
              <Link to={`/loja/${myStore.id}`} className="text-sm text-accent hover:underline">
                Ver todos
              </Link>
            </div>
            <div className="space-y-3">
              {myStore.products.slice(0, 4).map((product) => (
                <div key={product.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                  </div>
                  <p className="font-heading font-semibold text-sm">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(product.price)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Store Profile */}
          <div className="bg-card rounded-lg p-6 shadow-soft border border-border animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-lg font-semibold">Perfil da Loja</h2>
              <Button variant="ghost" size="sm">
                Editar
              </Button>
            </div>
            <div className="flex items-start gap-4">
              <img
                src={myStore.image}
                alt={myStore.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold">{myStore.name}</h3>
                <p className="text-sm text-accent">{myStore.category}</p>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {myStore.description}
                </p>
                <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Package className="h-4 w-4" />
                    <span>{myStore.products.length} produtos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-accent/10 rounded-lg p-6 border border-accent/20 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <h3 className="font-heading text-lg font-semibold text-accent">
            Dica para aumentar suas vendas
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Adicione fotos de alta qualidade aos seus produtos. Lojas com fotos profissionais 
            recebem em média 3x mais cliques no WhatsApp.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
