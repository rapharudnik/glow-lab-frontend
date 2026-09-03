import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__text">Página não encontrada</p>
      <Link className="not-found__link" to="/">
        Voltar para o início
      </Link>
    </div>
  );
}

export default NotFound;
