import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container-narrow py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block">
              <span className="font-heading text-xl font-semibold tracking-tight">
                modare
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Descubra as melhores lojas de roupas da sua cidade. 
              Moda local, entrega rápida.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Explorar
                </Link>
              </li>
              <li>
                <Link to="/lojas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Todas as Lojas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3">Para Lojistas</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/cadastro-loja" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cadastrar Loja
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Painel
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} modare. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
