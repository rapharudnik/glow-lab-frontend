import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__spinner" />
      <p className="preloader__text">Carregando...</p>
    </div>
  );
}

export default Preloader;
