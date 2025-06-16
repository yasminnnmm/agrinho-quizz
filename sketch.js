as = [
  {
    pergunta: "Qual desses alimentos vem do campo?",
    opcoes: ["Bolacha", "Tomate", "Refrigerante", "Bala"],
    correta: 1
  },
  {
    pergunta: "O que é necessário para plantar?",
    opcoes: ["Sol, água e terra", "Só chuva", "Só vento", "Só adubo"],
    correta: 0
  },
  {
    pergunta: "Qual animal ajuda na produção de leite?",
    opcoes: ["Cavalo", "Vaca", "Porco", "Gato"],
    correta: 1
  },
  {
    pergunta: "Por que devemos cuidar do meio ambiente?",
    opcoes: ["Para poluir", "Para destruir", "Para garantir vida", "Para gastar água"],
    correta: 2
  },
  {
    pergunta: "Qual é o grão mais produzido no Brasil?",
    opcoes: ["Soja", "Café", "Milho", "Trigo"],
    correta: 0
  },
  {
    pergunta: "O que as abelhas fazem na natureza?",
    opcoes: ["Nada", "Polinização", "Atrapalham", "Sujam flores"],
    correta: 1
  },
  {
    pergunta: "Como ajudamos a natureza?",
    opcoes: ["Jogando lixo no chão", "Desperdiçando água", "Plantando árvores", "Queimando lixo"],
    correta: 2
  },
  {
    pergunta: "De onde vem o leite?",
    opcoes: ["Do mercado", "Da vaca", "Da árvore", "Da pedra"],
    correta: 1
  }
];

let perguntaAtual = 0;
let tela = "menu";
let resultado = "";
let pontos = 0;

function setup() {
  createCanvas(900, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  desenharCenario();

  if (tela === "menu") {
    fill(255, 220);
    rect(width / 2 - 150, height / 2 - 50, 300, 100, 20);
    fill(0);
    textSize(32);
    text("Iniciar Jogo", width / 2, height / 2);
  } else if (tela === "jogo") {
    mostrarPergunta();
  } else if (tela === "fim") {
    fill(255, 230);
    rect(width / 2 - 250, height / 2 - 150, 500, 300, 20);
    fill(0);
    textSize(36);
    text("Fim de Jogo!", width / 2, height / 2 - 60);
    textSize(28);
    text("Você acertou " + pontos + " de " + perguntas.length + " perguntas!", width / 2, height / 2);
    textSize(24);
    text("Clique para jogar novamente", width / 2, height / 2 + 60);
  }
}

function mousePressed() {
  if (tela === "menu") {
    tela = "jogo";
  } else if (tela === "jogo") {
    let yInicio = 300;
    for (let i = 0; i < 4; i++) {
      if (mouseX > 200 && mouseX < 700 && mouseY > yInicio + i * 60 && mouseY < yInicio + 50 + i * 60) {
        verificarResposta(i);
      }
    }
  } else if (tela === "fim") {
    perguntaAtual = 0;
    pontos = 0;
    tela = "menu";
  }
}

function mostrarPergunta() {
  fill(255, 240);
  rect(100, 150, 700, 100, 20);
  fill(0);
  textSize(24);
  text(perguntas[perguntaAtual].pergunta, width / 2, 200);

  let yInicio = 300;
  for (let i = 0; i < 4; i++) {
    fill(200, 255, 200);
    rect(200, yInicio + i * 60, 500, 50, 10);
    fill(0);
    text(perguntas[perguntaAtual].opcoes[i], width / 2, yInicio + 25 + i * 60);
  }
}

function verificarResposta(escolha) {
  if (escolha === perguntas[perguntaAtual].correta) {
    pontos++;
  }

  perguntaAtual++;
  if (perguntaAtual >= perguntas.length) {
    tela = "fim";
  }
}

function desenharCenario() {
  // Céu
  background(135, 206, 235);

  // Sol
  fill(255, 255, 0);
  ellipse(100, 100, 100, 100);

  // Grama
  fill(34, 139, 34);
  rect(0, height - 150, width, 150);

  // Árvore
  fill(139, 69, 19);
  rect(700, 300, 30, 150);
  fill(34, 139, 34);
  ellipse(715, 250, 150, 150);
  ellipse(750, 280, 100, 100);
  ellipse(680, 280, 100, 100);

  // Vaquinha
  fill(255);
  rect(200, 400, 100, 60, 20);
  fill(0);
  ellipse(220, 430, 20, 20); // mancha
  ellipse(270, 420, 15, 15); // mancha
  fill(255);
  ellipse(250, 380, 40, 40); // cabeça
  fill(0);
  ellipse(240, 375, 5, 5); // olho
  ellipse(260, 375, 5, 5); // olho
  fill(255, 192, 203);
  ellipse(250, 390, 20, 10); // focinho

  // Nuvens
  desenharNuvem(400, 100);
  desenharNuvem(600, 80);
}

function desenharNuvem(x, y) {
  fill(255);
  ellipse(x, y, 60, 60);
  ellipse(x + 30, y + 10, 60, 60);
  ellipse(x - 30, y + 10, 60, 60);
}