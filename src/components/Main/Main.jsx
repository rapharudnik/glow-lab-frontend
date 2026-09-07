import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import profilePhoto from "../../images/profile-photo.jpeg";
import "./Main.css";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/raphaarudnik?igsi=cHBpNjEwYTlla2lh&utm_source=qr",
  },
  { name: "GitHub", url: "https://github.com/rapharudnik" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/raphaela-rudnik-564082194/",
  },
];

const REPLIES = [
  "Oiii, quero saber mais! 💛",
  "Amei, conta mais!",
  "Bora ver a galeria!",
];

function Main() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleCount, isTyping]);

  function handleReply() {
    setIsTyping(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
      setIsTyping(false);
    }, 900);
  }

  return (
    <main className="main">
      <div className="main__chat-header">
        <img
          className="main__chat-avatar"
          src={profilePhoto}
          alt="Foto de Rapha, criadora do Glow Lab"
        />
        <div className="main__chat-header-info">
          <h1 className="main__chat-name">Glow Lab</h1>
          <span className="main__chat-status">
            <span className="main__chat-status-dot"></span>
            online agora
          </span>
        </div>
      </div>

      <div className="main__chat">
        <div className="main__message">
          <img className="main__avatar" src={profilePhoto} alt="" />
          <div className="main__bubble">
            <p className="main__description">
              Oiii! Bem vindo ao Glow Lab 💛 esse espaço foi criado pra trazer
              inspiração pra quem cria conteúdo sobre beleza e autocuidado.
            </p>
          </div>
        </div>

        {visibleCount >= 2 && (
          <>
            <div className="main__message main__message_user">
              <div className="main__bubble main__bubble_user">
                <p>{REPLIES[0]}</p>
              </div>
            </div>
            <div className="main__message">
              <img className="main__avatar" src={profilePhoto} alt="" />
              <div className="main__bubble">
                <About />
              </div>
            </div>
          </>
        )}

        {visibleCount >= 3 && (
          <>
            <div className="main__message main__message_user">
              <div className="main__bubble main__bubble_user">
                <p>{REPLIES[1]}</p>
              </div>
            </div>
            <div className="main__message">
              <img className="main__avatar" src={profilePhoto} alt="" />
              <div className="main__bubble">
                <h2 className="main__section-title">
                  O que você vai encontrar aqui
                </h2>
                <ul className="main__features-list">
                  <li className="main__features-item">
                    ✨ Inspiração visual pra rotina de beleza
                  </li>
                  <li className="main__features-item">
                    🧴 Dicas de autocuidado
                  </li>
                  <li className="main__features-item">
                    📸 Ideias pra criar conteúdo
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}

        {visibleCount >= 4 && (
          <>
            <div className="main__message main__message_user">
              <div className="main__bubble main__bubble_user">
                <p>{REPLIES[2]}</p>
              </div>
            </div>
            <div className="main__message">
              <img className="main__avatar" src={profilePhoto} alt="" />
              <div className="main__bubble">
                <h2 className="main__section-title">Vamos nos conectar</h2>
                <div className="main__connect-links">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      className="main__cta"
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <Link className="main__cta" to="/inspiracoes">
                  Ver inspirações
                </Link>
              </div>
            </div>
          </>
        )}

        {isTyping && (
          <div className="main__message">
            <img className="main__avatar" src={profilePhoto} alt="" />
            <div className="main__bubble main__bubble_typing">
              <span className="main__typing-dot"></span>
              <span className="main__typing-dot"></span>
              <span className="main__typing-dot"></span>
            </div>
          </div>
        )}

        {!isTyping && visibleCount < 4 && (
          <button
            type="button"
            className="main__reply-btn"
            onClick={handleReply}
          >
            {REPLIES[visibleCount - 1]}
          </button>
        )}

        <div ref={chatEndRef}></div>
      </div>
    </main>
  );
}

export default Main;
