//Dados iniciais
let currentQuestion = 0;
let correctAnswers = 0;
showQuestion();

//Evento Reset
document
  .querySelector(".scoreArea button")
  .addEventListener("click", resetEvent);

//Funções
function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];

    // Criar variável para a barra de progresso baseado na divisão entre número questão atual e quantidade de questões vezes 100. Use a função Math.floor para arredondar.
    // Defina a largura da .progress--bar com o valor obtido
    // Esconda a .scoreArea
    // Exiba a .questionArea
    // Insira em .question o valor da questão
    // Defina .options como ""
    // Crie uma let optionsHtml para o texto das opções
    // Faça um laço em q.options e defina o valor da optionHtml com `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`
    // Insira optionsHtml em .options

    document.querySelectorAll(".options .option").forEach((item) => {
      item.addEventListener("click", optionClickEvent);
    });
  } else {
    // Chame a função finishQuiz
  }
}

function optionClickEvent(e) {
  // Verifique qual questão foi clicada recuperando o atributo data-op. Use parseInt para formatar o atributo. Atribua o valor a uma variável.s
  // Se a resposta clicada foi a correta, incremente a variável correctAnswers
  // Incremente a variável currentQuestion
  // Chame a função showQuestion
}

function finishQuiz() {
  // Criar variável de pontos baseado na divisão entre respostas corretas e quantidade de questões. Use a função Math.floor para arredondar.
  // Implementar condicionais para inserir mensagem e cor do placar de acordo com a pontuação.
  // Usar condicional if e condicionais <, <=, >, >=
  // Inserir a pontuação em .scorePct e o texto em .scoreText2
  // Ocultar a .questionArea e exibir a .scoreArea
  // Deixar a .progress--bar em 100%
}

function resetEvent() {
  // Redefina os valores de correctAnswers e currentQuestion para 0
  // Chame a função showQuestion
}
