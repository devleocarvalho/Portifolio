document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const endScreen = document.getElementById('end-screen');

    const startGameBtn = document.getElementById('start-game-btn');
    const restartGameBtn = document.getElementById('restart-game-btn');

    const mainFactText = document.getElementById('main-fact-text');
    const mainFactIndicator = document.getElementById('main-fact-indicator'); 
    const infoCardsContainer = document.getElementById('info-cards');
    const feedbackMessage = document.getElementById('feedback-message');

    const revealCardBtn = document.getElementById('reveal-card-btn');

    const cardQuestionText = document.getElementById('card-question-text');
    const cardGuessButtons = document.getElementById('card-guess-buttons');
    const cardGuessTruthBtn = document.getElementById('card-guess-truth-btn');
    const cardGuessFalseBtn = document.getElementById('card-guess-false-btn');

    const groupGuessSection = document.querySelector('.group-guess'); 
    const finalGuessTruthBtn = document.getElementById('final-guess-truth-btn');
    const finalGuessLieBtn = document.getElementById('final-guess-lie-btn');

    const nextRoundBtn = document.getElementById('next-round-btn');

    const timerDisplay = document.getElementById('timer');
    let currentFactIndex = 0;
    let currentCardIndex = 0;
    let timerInterval;
    const TIME_LIMIT_PER_CARD = 60

    
    let narratorIntentionIsTruth = false; 

    

    function showScreen(screen) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
    }

    function startGame() {
        showScreen(gameScreen);
        currentFactIndex = 0;
        // Opcional: Embaralhar a ordem dos fatos principais para cada jogo.
        // facts.sort(() => Math.random() - 0.5); // Descomente para embaralhar os fatos principais
        loadRound();
    }

    function loadRound() {
        if (currentFactIndex >= facts.length) {
            endGame();
            return;
        }

        const fact = facts[currentFactIndex];
        mainFactText.textContent = fact.mainFact;
        // Indicador do Fato Principal sempre visível para o narrador
        mainFactIndicator.textContent = fact.mainFactTruth ? 'V' : 'F';
        mainFactIndicator.className = `indicator ${fact.mainFactTruth ? 'true' : 'false'}`;

        infoCardsContainer.innerHTML = ''; // Limpa as cartas da rodada anterior
        currentCardIndex = 0; // Reseta o índice do cartão para o início de cada fato

        feedbackMessage.textContent = '';
        feedbackMessage.classList.remove('success', 'error');
        nextRoundBtn.classList.add('hidden'); // Esconde o botão de próxima rodada

        // Esconde a área de votação por cartão e a de palpite final
        cardGuessButtons.classList.add('hidden');
        cardQuestionText.classList.add('hidden');
        groupGuessSection.classList.add('hidden');

        // Mostra o botão para revelar a primeira informação
        revealCardBtn.classList.remove('hidden');

        // O narrador decide sua intenção de blefe para o FATO PRINCIPAL no início da rodada.
        // Para a demo, vamos simular que ele SEMPRE TENTA BLEFAR (dizer o oposto da verdade do FATO PRINCIPAL).
        // Em um jogo real, o narrador faria essa escolha secreta ou clicaria em um botão "Vou Blefar" / "Vou Contar a Verdade"
        narratorIntentionIsTruth = !fact.mainFactTruth;

        startTimerForCard(); // Inicia o timer para a rodada
    }

    function startTimerForCard() {
        let timeLeft = TIME_LIMIT_PER_CARD;
        updateTimerDisplay(timeLeft);

        if (timerInterval) clearInterval(timerInterval);

        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                handleTimeUpForCard();
            }
        }, 1000);
    }

    function updateTimerDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    function handleTimeUpForCard() {
        clearInterval(timerInterval); // Garante que o timer pare
        feedbackMessage.textContent = 'Tempo esgotado! Passe para o próximo cartão.';
        feedbackMessage.className = 'message error';
        disableCardGuessButtons(); // Desabilita os botões de voto do cartão atual
        setTimeout(handleNextAction, 2000); // Apenas avança após um pequeno atraso.
    }

    function disableCardGuessButtons() {
        cardGuessTruthBtn.disabled = true;
        cardGuessFalseBtn.disabled = true;
        cardQuestionText.classList.add('hidden');
        cardGuessButtons.classList.add('hidden');
    }

    function enableCardGuessButtons() {
        cardGuessTruthBtn.disabled = false;
        cardGuessFalseBtn.disabled = false;
        cardQuestionText.classList.remove('hidden');
        cardGuessButtons.classList.remove('hidden');
    }

    // --- Revelar Próxima Informação ---
    revealCardBtn.addEventListener('click', () => {
        const fact = facts[currentFactIndex];
        if (currentCardIndex < fact.info.length) {
            revealNextCard();
            startTimerForCard(); // Reinicia o timer para o novo cartão
            feedbackMessage.textContent = 'O grupo deve votar se esta informação é Verdadeira ou Falsa.';
            feedbackMessage.classList.remove('success', 'error');
            enableCardGuessButtons(); // Habilita os botões de votação para o cartão atual
        } else {
            // Se todas as informações já foram reveladas, passa para o palpite final
            revealCardBtn.classList.add('hidden');
            handleFinalGroupGuess();
        }
    });

    function revealNextCard() {
        const fact = facts[currentFactIndex];
        // Se você quer que a ordem dos cartões auxiliares seja aleatória para cada rodada, descomente a linha abaixo.
        // Se o narrador deve controlar a ordem, mantenha comentada.
        // fact.info.sort(() => Math.random() - 0.5);

        const info = fact.info[currentCardIndex]; // Pega a informação na ordem atual (seja ela fixa ou embaralhada)

        const cardElement = document.createElement('div');
        cardElement.classList.add('info-card');
        cardElement.setAttribute('data-card-index', currentCardIndex); // Para identificar o card

        // Indicador da VERDADE da informação (sempre visível para o narrador)
        const truthIndicatorText = info.truth ? 'V' : 'F';
        const truthIndicatorClass = info.truth ? 'true' : 'false';

        cardElement.innerHTML = `
            <p>${info.text}</p>
            <div class="card-indicators-wrapper">
                <div class="card-truth-indicator ${truthIndicatorClass}">${truthIndicatorText}</div>
                <div class="card-guess-indicator"></div> </div>
        `;
        infoCardsContainer.appendChild(cardElement);

        // Força o reflow para a transição CSS funcionar
        void cardElement.offsetWidth;
        cardElement.classList.add('revealed');

        currentCardIndex++; // Incrementa para o próximo cartão

        // Se este foi o último cartão, esconde o botão de revelar mais
        if (currentCardIndex >= fact.info.length) {
            revealCardBtn.classList.add('hidden');
        }
    }

    // --- Lógica de Votação do Cartão Individual ---
    cardGuessTruthBtn.addEventListener('click', () => handleCardGuess(true));
    cardGuessFalseBtn.addEventListener('click', () => handleCardGuess(false));

    function handleCardGuess(groupGuessForCard) {
        clearInterval(timerInterval); // Para o timer do cartão
        const fact = facts[currentFactIndex];
        // O cartão que acabou de ser votado é o anterior ao currentCardIndex
        const info = fact.info[currentCardIndex - 1];

        const currentCardElement = document.querySelector(`.info-card[data-card-index="${currentCardIndex - 1}"]`);
        if (currentCardElement) {
            const guessIndicator = currentCardElement.querySelector('.card-guess-indicator');
            if (guessIndicator) {
                // Preenche o indicador de palpite com o V/F do grupo
                guessIndicator.textContent = groupGuessForCard ? 'V' : 'F';
                // Adiciona a classe de cor baseada no ACERTO ou ERRO do palpite do grupo
                guessIndicator.classList.add(groupGuessForCard === info.truth ? 'correct-guess' : 'incorrect-guess');
                guessIndicator.classList.add('revealed-guess'); // Torna o indicador de palpite visível
            }
        }

        // Feedback textual baseado no acerto/erro da informação do cartão
        if (groupGuessForCard === info.truth) {
            feedbackMessage.textContent = 'Acerto! O grupo adivinhou corretamente sobre esta informação.';
            feedbackMessage.className = 'message success';
        } else {
            feedbackMessage.textContent = 'Erro! O grupo adivinhou incorretamente sobre esta informação.';
            feedbackMessage.className = 'message error';
        }

        disableCardGuessButtons(); // Desabilita os botões de voto do cartão atual

        // Após a votação, o jogo avança para a próxima ação
        setTimeout(handleNextAction, 2000); // Espera 2 segundos para o feedback antes de avançar
    }

    function handleNextAction() {
        const fact = facts[currentFactIndex];
        if (currentCardIndex < fact.info.length) {
            
            revealCardBtn.classList.remove('hidden'); 
            feedbackMessage.textContent = 'Clique para revelar a próxima informação.';
            feedbackMessage.classList.remove('success', 'error');
           
        } else {
            
            handleFinalGroupGuess();
        }
    }

    function handleFinalGroupGuess() {
        clearInterval(timerInterval); // Garante que o timer esteja parado
        feedbackMessage.textContent = 'Todas as informações foram reveladas. Agora, o grupo deve adivinhar se o FATO PRINCIPAL é Verdadeiro ou Falso!';
        feedbackMessage.className = 'message';

        // Esconde os botões de ação dos cartões e mostra a seção de palpite final
        revealCardBtn.classList.add('hidden');
        cardGuessButtons.classList.add('hidden');
        cardQuestionText.classList.add('hidden');
        groupGuessSection.classList.remove('hidden');

        // Habilita os botões de palpite final
        finalGuessTruthBtn.disabled = false;
        finalGuessLieBtn.disabled = false;

        startTimerForCard();
    }

    finalGuessTruthBtn.addEventListener('click', () => finalizeRoundGuess(true));
    finalGuessLieBtn.addEventListener('click', () => finalizeRoundGuess(false));

    function finalizeRoundGuess(groupFinalGuess) {
        clearInterval(timerInterval); // Para o timer final
        const fact = facts[currentFactIndex];
        let prendaText = '';

        let whatNarratorActuallyStatedIsTrue;
        if (narratorIntentionIsTruth) {
            // Narrador tentou dizer a VERDADE sobre o Fato Principal
            whatNarratorActuallyStatedIsTrue = fact.mainFactTruth;
        } else {
            whatNarratorActuallyStatedIsTrue = !fact.mainFactTruth;
        }


        if (groupFinalGuess === whatNarratorActuallyStatedIsTrue) {
           
            feedbackMessage.textContent = `Grupo ACERTOU a intenção do narrador! O narrador (você) paga a prenda.`;
            feedbackMessage.className = 'message error'; // Cor de erro para o narrador (ele perdeu o blefe)
            prendaText = `Prenda do Narrador: ${fact.prendaNarrador}`;
        } else {
          
            feedbackMessage.textContent = `Grupo ERROU a intenção do narrador! O grupo paga a prenda.`;
            feedbackMessage.className = 'message success'; // Cor de sucesso para o narrador (o blefe funcionou)
            prendaText = `Prenda do Grupo: ${fact.prendaGrupo}`;
        }

        revealFullStory(prendaText);
        nextRoundBtn.classList.remove('hidden');
        groupGuessSection.classList.add('hidden'); // Esconde os botões de palpite final
    }

    function revealFullStory(prendaText) {
        const fact = facts[currentFactIndex];
        const finalStoryDisplay = document.createElement('div');
        finalStoryDisplay.innerHTML = `
            <p><strong>A História Real:</strong></p>
            <p>${fact.realStory}</p>
            <p><strong>${prendaText}</strong></p>
        `;
        finalStoryDisplay.classList.add('message');
        infoCardsContainer.appendChild(finalStoryDisplay); 
        finalStoryDisplay.classList.add('revealed'); 
    }

    function nextRound() {
        currentFactIndex++;
        if (currentFactIndex < facts.length) {
            loadRound(); 
        } else {
            endGame(); 
        }
    }

    function endGame() {
        clearInterval(timerInterval); // Garante que o timer pare no final
        showScreen(endScreen);
        document.getElementById('final-story-text').textContent = 'Você chegou ao fim dos fatos! Esperamos que tenha se divertido e descoberto verdades incríveis.';
    }

    // --- Event Listeners Iniciais ---
    startGameBtn.addEventListener('click', startGame);
    nextRoundBtn.addEventListener('click', nextRound);
    restartGameBtn.addEventListener('click', () => {
        currentFactIndex = 0;
        startGame();
    });

    // Início: Mostra a tela de introdução ao carregar
    showScreen(startScreen);


});

const senhaCorreta = "leo";  
const conteudoDiv = document.getElementById('conteudo');
const gameDiv = document.getElementById('game');

const senhaVerificada = sessionStorage.getItem('senhaVerificada') === 'true';

if (!senhaVerificada) {
    const senha = prompt("Digite a senha para acessar:");
    if (senha === senhaCorreta) {
        sessionStorage.setItem('senhaVerificada', 'true');
        conteudoDiv.style.display = "block";
    } else {
        alert("Senha incorreta!");
        document.body.innerHTML = "<h1>Acesso negado</h1>";
    }
} else {
    conteudoDiv.style.display = "block";
}

if (gameDiv.style.display === "block") {
    updateFloatingLetter();
}
