import "./Tips.css";

const TIPS = [
  {
    title: "Consistência acima de tudo",
    text: "Uma rotina de skincare simples, mas feita todos os dias, traz resultados muito mais consistentes do que uma rotina elaborada, com vários produtos, seguida apenas de vez em quando. A constância é o que realmente transforma a pele a longo prazo.",
  },
  {
    title: "Pele oleosa também precisa de hidratante",
    text: "Oleosidade e hidratação são processos distintos: a primeira está relacionada à produção de sebo, enquanto a segunda diz respeito aos níveis de água na pele. Um bom hidratante repõe essa água e ajuda a manter o equilíbrio da barreira cutânea, mesmo em peles mais oleosas.",
  },
  {
    title: "Protetor solar é indispensável todos os dias",
    text: "O uso diário de protetor solar é essencial, inclusive no inverno e em dias nublados. Os raios UV atravessam as nuvens e continuam agindo sobre a pele mesmo sem exposição direta ao sol, contribuindo para o surgimento de manchas e o envelhecimento precoce.",
  },
  {
    title: "Hidratação é essencial",
    text: "A ingestão adequada de água impacta diretamente a saúde da pele, dos cabelos e das unhas, além de auxiliar no processo de desinchaço do corpo. Quanto mais hidratado o organismo está, menor a tendência de reter líquidos.",
  },
  {
    title: "Fracione suas refeições",
    text: "Fazer diversas pequenas refeições ao longo do dia ajuda a manter o metabolismo ativo, já que o corpo recebe um fluxo constante de energia e não precisa recorrer às reservas de forma tão intensa.",
  },
  {
    title: "Emagrecimento é sobre balanço calórico",
    text: "O processo de emagrecimento está diretamente relacionado ao equilíbrio calórico: consumir menos calorias do que se gasta ao longo do dia. Nesse processo, vale priorizar alimentos de baixa densidade calórica que promovam saciedade, como verduras, legumes, saladas e frutas — sem deixar de lado carboidratos e proteínas, essenciais para o funcionamento do corpo.",
  },
];

function Tips() {
  return (
    <section className="tips">
      <h1 className="tips__title">Dicas de autocuidado</h1>
      <p className="tips__subtitle">
        Um pouquinho do que aprendi como esteticista, pra te ajudar no dia a dia
        💛
      </p>

      <ol className="tips__list">
        {TIPS.map((tip, index) => (
          <li className="tips__item" key={tip.title}>
            <span className="tips__number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="tips__content">
              <h2 className="tips__item-title">{tip.title}</h2>
              <p className="tips__item-text">{tip.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Tips;
