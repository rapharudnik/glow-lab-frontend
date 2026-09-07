import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isOpen, onLinkClick }) {
  const linkClassName = ({ isActive }) =>
    isActive ? "navigation__link navigation__link_active" : "navigation__link";

  return (
    <nav className={`navigation ${isOpen ? "navigation_open" : ""}`}>
      <NavLink to="/" end className={linkClassName} onClick={onLinkClick}>
        Início
      </NavLink>
      <NavLink
        to="/inspiracoes"
        className={linkClassName}
        onClick={onLinkClick}
      >
        Inspirações
      </NavLink>
      <NavLink to="/favoritos" className={linkClassName} onClick={onLinkClick}>
        Favoritos
      </NavLink>
      <NavLink
        to="/foto-do-dia"
        className={linkClassName}
        onClick={onLinkClick}
      >
        Foto do dia
      </NavLink>
      <NavLink to="/dicas" className={linkClassName} onClick={onLinkClick}>
        Dicas
      </NavLink>
    </nav>
  );
}

export default Navigation;
