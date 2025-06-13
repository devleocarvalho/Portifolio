const questions = [
  {
    text: "Existe HSA (hemorragia subaracnóidea)?",
    options: ["Não", "Sim"],
  },
  {
    text: "A HSA é fina ou espessa?",
    options: ["Fina (<1mm)", "Espessa (≥1mm)"],
  },
  {
    text: "Existe hemorragia intraventricular ?",
    options: ["Não", "Sim"],
  }
];

let currentQuestion = 0;
let answers = [];

function showQuestion() {
  const container = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const options = document.getElementById("options");

  questionText.textContent = questions[currentQuestion].text;
  options.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => selectOption(index);
    options.appendChild(button);
  });
}

function selectOption(index) {
  answers[currentQuestion] = index;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const container = document.getElementById("question-container");
  const result = document.getElementById("result");
  const reportBox = document.getElementById("report");

  container.style.display = "none";
  result.style.display = "block";

  let grau = 0;
  let descricao = "";
  let incidencia = "";
  let espessuraTexto = "";

  if (answers[1] === 0) {
    espessuraTexto = "Espessura do sangue: fina (<1mm)";
  } else if (answers[1] === 1) {
    espessuraTexto = "Espessura do sangue: espessa (≥1mm)";
  }

  if (answers[0] === 0 && answers[2] === 0) {
    grau = 0;
    descricao = "Sem HSA e sem hemorragia intraventricular.";
    incidencia = "0%";
  } else {
    const hsaEspessa = answers[1] === 1;
    const hivPresente = answers[2] === 1;

    if (!hsaEspessa && !hivPresente) {
      grau = 1;
      descricao = "HSA fina (focal ou difusa), sem HIV.";
      incidencia = "24%";
    } else if (!hsaEspessa && hivPresente) {
      grau = 2;
      descricao = "HSA fina (focal ou difusa), com HIV.";
      incidencia = "33%";
    } else if (hsaEspessa && !hivPresente) {
      grau = 3;
      descricao = "HSA espessa, sem HIV.";
      incidencia = "33%";
    } else if (hsaEspessa && hivPresente) {
      grau = 4;
      descricao = "HSA espessa, com HIV.";
      incidencia = "40%";
    }
  }

  const textoRelatorio = 
`Escala de Fisher Modificada

Grau: ${grau}
Descrição: ${descricao}
${espessuraTexto}
Incidência de Vasoespasmo Sintomático: ${incidencia}`;

  result.innerHTML = `
    <h3>Resultado</h3>
    <p><strong>Grau:</strong> ${grau}</p>
    <p><strong>Descrição:</strong> ${descricao}</p>
    <p><strong>${espessuraTexto}</strong></p>
    <p><strong>Incidência de Vasoespasmo Sintomático:</strong> ${incidencia}</p>
  `;

  reportBox.style.display = "block";
  reportBox.value = textoRelatorio;

  document.getElementById("restartBtn").style.display = "inline-block";
}

function restart() {
  currentQuestion = 0;
  answers = [];
  document.getElementById("question-container").style.display = "block";
  document.getElementById("result").style.display = "none";
  document.getElementById("report").style.display = "none";
  document.getElementById("report").value = "";
  document.getElementById("restartBtn").style.display = "none";
  showQuestion();
}

window.onload = () => {
  showQuestion();
};
