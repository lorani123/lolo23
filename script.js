// Estrutura da história
const story = {
    start: {
      text: "Você acorda no meio de uma floresta. O que você faz?",
      choices: [
        { text: "Explorar o local", next: "explore" },
        { text: "Seguir o som do rio", next: "river" },
      ],
    },
    explore: {
      text: "Você encontra uma mochila com suprimentos básicos. O que fazer agora?",
      choices: [
        { text: "Abrir a mochila", next: "bag" },
        { text: "Continuar andando", next: "lost" },
      ],
    },
    river: {
      text: "Você encontra um curso d'água. Parece seguro. O que você faz?",
      choices: [
        { text: "Seguir o rio", next: "camp" },
        { text: "Procurar por comida", next: "berries" },
      ],
    },
    bag: {
      text: "A mochila contém comida, água e um mapa. Você pode se orientar agora!",
      choices: [{ text: "Seguir o mapa", next: "safe" }],
    },
    lost: {
      text: "Você se perdeu ainda mais na floresta. Sem rumo, a noite cai. Fim da história.",
      choices: [],
    },
    camp: {
      text: "Você segue o rio e encontra um pequeno acampamento abandonado. Está salvo!",
      choices: [],
    },
    berries: {
      text: "Você encontra frutas, mas elas eram venenosas. Fim da história.",
      choices: [],
    },
    safe: {
      text: "Com o mapa, você encontra uma trilha que leva à saída da floresta. Parabéns, você conseguiu!",
      choices: [],
    },
  };
  
  // Gerenciamento da história
  const app = document.getElementById("app");
  const storyText = document.getElementById("story-text");
  const choicesDiv = document.getElementById("choices");
  
  function renderScene(sceneKey) {
    const scene = story[sceneKey];
    storyText.textContent = scene.text;
    choicesDiv.innerHTML = "";
  
    scene.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.onclick = () => renderScene(choice.next);
      choicesDiv.appendChild(button);
    });
  }
  
  // Iniciar a história
  renderScene("start");
  