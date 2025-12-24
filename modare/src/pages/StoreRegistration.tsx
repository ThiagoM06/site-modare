import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Store, CheckCircle, ArrowRight } from "lucide-react";

const StoreRegistration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Cadastro enviado!",
      description: "Entraremos em contato em breve.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center py-12">
          <div className="container-narrow">
            <div className="max-w-md mx-auto text-center animate-scale-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="font-heading text-2xl font-semibold">
                Cadastro Enviado!
              </h1>
              <p className="text-muted-foreground mt-3">
                Recebemos sua solicitação. Nossa equipe entrará em contato em até 
                48 horas para concluir o cadastro da sua loja.
              </p>
              <Button variant="hero" className="mt-6" asChild>
                <a href="/">
                  Voltar para Home
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-12 md:py-16">
        <div className="container-narrow">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10 animate-fade-in">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                <Store className="h-7 w-7 text-accent" />
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-semibold">
                Cadastre sua Loja
              </h1>
              <p className="text-muted-foreground mt-3 max-w-md mx-auto">
                Faça parte do maior marketplace de moda local. Alcance novos clientes 
                e aumente suas vendas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
              <div className="bg-card rounded-lg p-6 md:p-8 shadow-soft border border-border space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="storeName">Nome da Loja *</Label>
                    <Input
                      id="storeName"
                      name="storeName"
                      placeholder="Ex: Atelier Urbano"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria *</Label>
                    <Input
                      id="category"
                      name="category"
                      placeholder="Ex: Moda Feminina"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Nome do Responsável *</Label>
                    <Input
                      id="ownerName"
                      name="ownerName"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="contato@sualoja.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade *</Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="Ex: São Paulo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Endereço</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="Rua, número - Bairro"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição da Loja</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Conte um pouco sobre sua loja, estilo das roupas, diferenciais..."
                    rows={4}
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Cadastro
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Ao enviar, você concorda com nossos termos de uso e política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StoreRegistration;
