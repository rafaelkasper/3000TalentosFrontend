// Identifica o elemento de mensagens
const statusDisplay = document.querySelector(".game--status");
// Define o jogo como ativo
let gameActive = true;
// Define o x como jogador inicial
let currentPlayer = "X";
// Cria o array com as posições
let gameState = ["", "", "", "", "", "", "", "", ""];

// Define a mensagem de vencedor
const winningMessage = () => `Jogador ${currentPlayer} venceu!`;
// Cria uma mensagem para empate
const drawMessage = () => `Jogo terminou empatado!`;
// Cria a mensagem para a vez do jogador
const currentPlayerTurn = () => `É a vez do ${currentPlayer}'`;

// Insere em tela o atual jogador
statusDisplay.innerHTML = currentPlayerTurn();

// Array com as condições para a vitória
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Função para inserir a jogada da rodada
function handleCellPlayed(clickedCell, clickedCellIndex) {
  // Definir o valor de gameState de índice clickedCellIndex com o valor de currentPlayer
  gameState[clickedCellIndex] = currentPlayer;
  // No innerHtml de clikedCell com o valor de currentPlayer
  clickedCell.innerHTML = currentPlayer;
}

// Função para trocar o jogador a cada rodada
function handlePlayerChange() {
  // Colocar um operador ternário definindo currentPlayer para ser o X ou O
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  // Usar innerHTML para exibir a mensagem de status de acordo com a função currentPlayerTurn
  statusDisplay.innerHTML = currentPlayerTurn();
}

// Função para verificar o resultado
function handleResultValidation() {
  //Cria uma variável interna para retornar se o jogo acabou ou não
  let roundWon = false;
  // Cria um laço para percorrer os elementos do array de condições de vitória
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];

    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  // Caso haja a vitória, exibe a mensagem de vitória e seta o jogo como false
  if (roundWon) {
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }

  // Caso seja um empate exibe a mensagem e seta o status do jogo como false
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }

  handlePlayerChange();
}

// Função que verifica o clique
function handleCellClick(e) {
  console.log(e);
  // Criar uma variável clickedCell para atribuir o target do evento
  let clickedCell = e.target;
  // Criar uma variável index que recebe o parseInt do valor do atributo data-cell-index da variável clickedCell
  let index = parseInt(clickedCell.getAttribute("data-cell-index"));
  // Criar uma condicional verificando se o gameState na posição index é diferente de "" ou gameActive for falso
  if (gameState[index] !== "" || !gameActive) {
    // Dentro da condicional colocar return
    return;
  }
  // Chamar a função handleCellPlayed com os argumentos clickedCell e index
  handleCellPlayed(clickedCell, index);
  // Chamar a função handleResultValidation
  handleResultValidation();
}

// Função para reiniciar o jogo
function handleRestartGame() {
  //Definir o gameActive como true
  gameActive = true;
  // Definir o currentPlayer como X
  currentPlayer = "X";
  // Voltar o gameState para o estado inicial
  gameState = ["", "", "", "", "", "", "", "", ""];
  // Definir o statusDisplay.innerHTML com o valor da função currentPlayerTurn
  statusDisplay.innerHTML = currentPlayerTurn();
  /* 
  Usar querySelectorAll e .cell como atributo e colocar um laço forEach 
  e como argumento utilizar innerHtml como ""
  */
  document.querySelectorAll(".cell").forEach((grid) => {
    grid.innerHTML = "";
  });
}

/*
 Usar querySelectorAll e .cell como atributo e colocar um laço forEach 
 para adicionar o listener de click chamando a função handleCellClick
 */
document.querySelectorAll(".cell").forEach((grid) => {
  grid.addEventListener("click", handleCellClick);
});

/*
 Usar querySelector e .game--restart como atributo e adicionar o listener
 com click chamando a função handleRestartGame
 */

document
  .querySelector(".game--restart")
  .addEventListener("click", handleRestartGame);
