import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "navigation__link navigation__link_active"
            : "navigation__link"
        }
      >
        Início
      </NavLink>
      <NavLink
        to="/inspiracoes"
        className={({ isActive }) =>
          isActive
            ? "navigation__link navigation__link_active"
            : "navigation__link"
        }
      >
        Inspirações
      </NavLink>
      <NavLink
        to="/favoritos"
        className={({ isActive }) =>
          isActive
            ? "navigation__link navigation__link_active"
            : "navigation__link"
        }
      >
        Favoritos
      </NavLink>

      <NavLink
        to="/foto-do-dia"
        className={({ isActive }) =>
          isActive
            ? "navigation__link navigation__link_active"
            : "navigation__link"
        }
      >
        Foto do dia
      </NavLink>

      <NavLink
        to="/dicas"
        className={({ isActive }) =>
          isActive
            ? "navigation__link navigation__link_active"
            : "navigation__link"
        }
      >
        Dicas
      </NavLink>
    </nav>
  );
}

export default Navigation;
