document.addEventListener('DOMContentLoaded', () => {
  const perguntas = [
      { texto: "O paciente é fluente?", opcoes: ["SIM", "NÃO"] },
      { texto: "O paciente compreende?", opcoes: ["SIM", "NÃO"] },
      { texto: "O paciente repete?", opcoes: ["SIM", "NÃO"] }
  ];

  const resultados = {
      "SIM-SIM-SIM": "Afasia Anômica",
      "SIM-SIM-NÃO": "Afasia de Condução",
      "SIM-NÃO-SIM": "Afasia Transcortical Sensorial",
      "SIM-NÃO-NÃO": "Afasia de Wernicke",
      "NÃO-SIM-SIM": "Afasia Transcortical Motora",
      "NÃO-SIM-NÃO": "Afasia de Broca",
      "NÃO-NÃO-SIM": "Afasia Transcortical Mista",
      "NÃO-NÃO-NÃO": "Afasia Global"
  };

  let respostas = [];
  let etapa = 0;

  const perguntaEl = document.getElementById("perguntaAfasia");
  const botoesEl = document.getElementById("botoesAfasia");
  const resultadoEl = document.getElementById("resultadoAfasia");

  function mostrarPergunta() {
      const atual = perguntas[etapa];
      perguntaEl.textContent = atual.texto;
      botoesEl.innerHTML = "";

      atual.opcoes.forEach(opcao => {
          const btn = document.createElement("button");
          btn.textContent = opcao;
          btn.onclick = () => {
              respostas.push(opcao);
              etapa++;
              if (etapa < perguntas.length) {
                  mostrarPergunta();
              } else {
                  mostrarResultado();
              }
          };
          botoesEl.appendChild(btn);
      });
  }

  function mostrarResultado() {
      perguntaEl.style.display = "none";
      botoesEl.style.display = "none";

      const chave = respostas.join("-");
      const diagnostico = resultados[chave] || "Diagnóstico não encontrado.";
      resultadoEl.innerHTML = `
        <p>✅ Diagnóstico final: <strong>${diagnostico}</strong></p>
        <p><em>Conclusão automática:</em> O paciente apresenta <strong>${diagnostico}</strong>, 
        de acordo com o fluxo de classificação de afasias baseado em fluência, compreensão e repetição.</p>
      `;
  }

  document.getElementById("afasiaContainer").style.display = "block";
  mostrarPergunta();
});
