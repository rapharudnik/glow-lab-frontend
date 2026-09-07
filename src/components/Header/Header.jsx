import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen((prev) => !prev);
  }

  function handleLinkClick() {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <p className="header__logo">Glow Lab</p>
      <button
        type="button"
        className={`header__menu-button ${isMenuOpen ? "header__menu-button_active" : ""}`}
        onClick={handleMenuToggle}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
      >
        <span className="header__menu-icon"></span>
      </button>
      <Navigation isOpen={isMenuOpen} onLinkClick={handleLinkClick} />
    </header>
  );
}

export default Header;
