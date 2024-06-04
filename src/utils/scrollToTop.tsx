import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Função para verificar se existe um fragmento (#) se nao possuir fica no topo da pagina
export function ScrollToTopOnMount() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
