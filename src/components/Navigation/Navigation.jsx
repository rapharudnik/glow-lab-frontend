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
    </nav>
  );
}

export default Navigation;
