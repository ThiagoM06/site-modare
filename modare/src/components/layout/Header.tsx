import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Store, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-narrow">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-semibold tracking-tight">
              modare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Explorar
            </Link>
            <Link 
              to="/lojas" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Lojas
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {isDashboard ? (
              <Link to="/">
                <Button variant="minimal" size="sm">
                  <MapPin className="h-4 w-4" />
                  Explorar
                </Button>
              </Link>
            ) : (
              <Link to="/cadastro-loja">
                <Button variant="minimal" size="sm">
                  <Store className="h-4 w-4" />
                  Cadastrar Loja
                </Button>
              </Link>
            )}
            <Link to="/dashboard">
              <Button variant="hero" size="sm">
                Painel da Loja
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-3">
              <Link 
                to="/" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Explorar
              </Link>
              <Link 
                to="/lojas" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Lojas
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Link to="/cadastro-loja" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="minimal" size="sm" className="w-full justify-start">
                    <Store className="h-4 w-4" />
                    Cadastrar Loja
                  </Button>
                </Link>
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" size="sm" className="w-full">
                    Painel da Loja
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
