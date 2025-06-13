const questions = [
  {
    question: "1. Nível de consciência",
    options: ["Alerta (0)", "Sonolento, mas despertável com mínima estimulação (1)", "Sonolento, requer estimulação repetida (2)", "Coma (3)"],
    values: [0, 1, 2, 3]
  },
  {
    question: "2. Orientação (pergunta de data e idade)",
    options: ["Responde a ambas corretamente (0)", "Responde a uma corretamente (1)", "Erra ambas (2)"],
    values: [0, 1, 2]
  },
  {
    question: "3. Comandos (abrir olhos, abrir boca)",
    options: ["Obedece corretamente (0)", "Erra uma ou ambas (1)", "Não obedece (2)"],
    values: [0, 1, 2]
  },
  {
    question: "4. Movimento ocular horizontal",
    options: ["Normal (0)", "Parcial (1)", "Desvio forçado (2)"],
    values: [0, 1, 2]
  },
  {
    question: "5. Campos visuais",
    options: ["Sem déficit (0)", "Hemianopsia parcial (1)", "Hemianopsia total (2)", "Amaurose cortical (3)"],
    values: [0, 1, 2, 3]
  },
  {
    question: "6. Paresia facial",
    options: ["Normal (0)", "Leve (1)", "Moderada (2)", "Paralisia total (3)"],
    values: [0, 1, 2, 3]
  },
  {
    question: "7. Força membro superior direito",
    options: ["Normal (0)", "Cai após 10s (1)", "Contra gravidade (2)", "Movimento fraco (3)", "Sem movimento (4)", "Não testável (9)"],
    values: [0, 1, 2, 3, 4, 9]
  },
  {
    question: "8. Força membro superior esquerdo",
    options: ["Normal (0)", "Cai após 10s (1)", "Contra gravidade (2)", "Movimento fraco (3)", "Sem movimento (4)", "Não testável (9)"],
    values: [0, 1, 2, 3, 4, 9]
  },
  {
    question: "9. Força membro inferior direito",
    options: ["Normal (0)", "Cai após 5s (1)", "Contra gravidade (2)", "Movimento fraco (3)", "Sem movimento (4)", "Não testável (9)"],
    values: [0, 1, 2, 3, 4, 9]
  },
  {
    question: "10. Ataxia",
    options: ["Ausente (0)", "Um membro (1)", "Dois membros (2)"],
    values: [0, 1, 2]
  },
  {
    question: "11. Linguagem",
    options: ["Normal (0)", "Leve a moderada (1)", "Grave (2)", "Muda (3)"],
    values: [0, 1, 2, 3]
  }
];

let currentQuestion = 0;
let score = 0;
let answers = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const totalScoreEl = document.getElementById("total-score");
const strokeLevelEl = document.getElementById("stroke-level");

function showQuestion(index) {
  const q = questions[index];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="option" value="${q.values[i]}" /> ${opt}`;
    optionsEl.appendChild(label);
  });
}

function calculateResult() {
  if (score === 0) return "Exame neurológico normal.";
  if (score <= 4) return "AVC menor.";
  if (score <= 15) return "AVC moderado.";
  if (score <= 20) return "AVC moderado a grave.";
  return "AVC grave.";
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector("input[name='option']:checked");
  if (!selected) return alert("Por favor, selecione uma opção.");

  const val = parseInt(selected.value);
  score += val;
  answers.push({ pergunta: questions[currentQuestion].question, resposta: selected.parentElement.textContent });

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    document.getElementById("quiz-container").classList.add("hidden");
    resultContainer.classList.remove("hidden");
    totalScoreEl.textContent = `Pontuação total: ${score}`;
    strokeLevelEl.textContent = calculateResult();
  }
});

function resetTest() {
  score = 0;
  currentQuestion = 0;
  answers = [];
  document.getElementById("quiz-container").classList.remove("hidden");
  resultContainer.classList.add("hidden");
  showQuestion(currentQuestion);
}

function generateReport() {
  let report = "🧠 Escala NIHSS - Relatório de Avaliação de AVC\n\n";

  answers.forEach((ans, i) => {
    report += `${i + 1}. ${ans.pergunta}\nResposta: ${ans.resposta}\n\n`;
  });

  report += `Pontuação Total: ${score}\n`;
  report += `Classificação: ${calculateResult()}`;

  const reportBox = document.getElementById("report-box");
  reportBox.value = report;
}

// Inicializa
showQuestion(currentQuestion);
