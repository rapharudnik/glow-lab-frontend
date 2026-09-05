# 💛 Glow Lab

Projeto final do bootcamp de desenvolvimento web da TripleTen — uma aplicação front-end que une minha experiência como esteticista com minha atuação como criadora de conteúdo, trazendo inspirações visuais de beleza e autocuidado.

🔗 **Acesse o projeto:** [fabulous-custard-ed0580.netlify.app](https://fabulous-custard-ed0580.netlify.app)

## Sobre o projeto

O Glow Lab nasceu da ideia de criar um espaço de inspiração para quem trabalha com conteúdo sobre beleza e autocuidado, unindo minha bagagem como esteticista com minha vivência como criadora de conteúdo no Instagram. O projeto consome a [API da Unsplash](https://unsplash.com/developers) para trazer fotos reais de inspiração, e conta com funcionalidades interativas construídas em React.

## Funcionalidades

- **Início**: página de apresentação em formato de chat interativo, onde a Glow Lab "conversa" com a pessoa visitante através de balões de mensagem e respostas rápidas
- **Inspirações**: galeria de fotos vinda da API da Unsplash, com busca personalizada por palavra-chave e categorias fixas de atalho (skincare, maquiagem, rotina matinal, autocuidado), além de paginação ("mostrar mais")
- **Favoritos**: permite favoritar fotos da galeria (ícone de coração), salvas no `localStorage` do navegador para persistirem entre sessões
- **Foto do dia**: exibe uma foto aleatória por dia, usando o endpoint `/photos/random` da Unsplash, com opção de gerar uma nova inspiração manualmente
- **Dicas de autocuidado**: conteúdo próprio com dicas de skincare e bem-estar baseadas na minha experiência como esteticista

## Tecnologias utilizadas

- React + Vite
- React Router (`react-router-dom`)
- CSS (metodologia BEM, variáveis CSS customizadas, `@font-face` com fonte Poppins auto-hospedada)
- Fetch API para consumo da API da Unsplash
- `localStorage` para persistência de dados no navegador
- Deploy contínuo via Netlify (integrado ao GitHub)

## Rodando o projeto localmente

```bash
git clone https://github.com/rapharudnik/glow-lab-frontend.git
cd glow-lab-frontend
npm install
```

Crie um arquivo `.env` na raiz do projeto com sua própria chave da API da Unsplash:

VITE_UNSPLASH_ACCESS_KEY=sua_chave_aqui

Depois, rode:

```bash
npm run dev
```

## Próximos passos

- Adicionar autenticação de usuários
- Criar um backend próprio para salvar favoritos por conta de usuário
- Expandir as categorias de busca

## Autora

Feito por **Rapha Rudnik** — esteticista em transição de carreira para desenvolvimento web 💛

- [Instagram](https://www.instagram.com/raphaarudnik?igsi=cHBpNjEwYTlla2lh&utm_source=qr)
- [GitHub](https://github.com/rapharudnik)
- [LinkedIn](https://www.linkedin.com/in/raphaela-rudnik-564082194/)
