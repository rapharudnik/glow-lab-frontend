import About from "../About/About";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <section className="main__intro">
        <h1 className="main__title">Glow Lab</h1>
        <p className="main__description">
          O Glow Lab é um banco de fotos para pessoas, assim como eu, que criam
          conteúdo para a internet e precisam de um lugar para se inspirar 🩷.
        </p>
      </section>
      <About />
    </main>
  );
}

export default Main;
