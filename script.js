document.addEventListener('DOMContentLoaded', function() {
  
  // ==========================================
  // 1. ANIMAÇÕES E EFEITOS VISUAIS (MANTIDO)
  // ==========================================

  // Loading Screen
  setTimeout(function() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) loadingScreen.classList.add('hidden');
  }, 1500);

  // AOS (Animação ao rolar)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }

  // Particles.js
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 } },
        "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
        "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
        "line_linked": { "enable": true, "distance": 150, "color": "#00e6ff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
        "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } }
      },
      "retina_detect": true
    });
  }

  // Efeito de Digitação (TypeWriter)
  const professions = [
    "Full Stack Developer", 
    "Systems Analyst", 
    "Web Designer", 
    "Tech Enthusiast"
  ];
  let professionIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const professionElement = document.querySelector('.profession');
  
  function typeWriter() {
    if (!professionElement) return;
    
    const currentProfession = professions[professionIndex];
    
    if (isDeleting) {
      professionElement.textContent = currentProfession.substring(0, charIndex - 1);
      charIndex--;
    } else {
      professionElement.textContent = currentProfession.substring(0, charIndex + 1);
      charIndex++;
    }
    
    if (!isDeleting && charIndex === currentProfession.length) {
      isDeleting = true;
      setTimeout(typeWriter, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      professionIndex = (professionIndex + 1) % professions.length;
      setTimeout(typeWriter, 500);
    } else {
      const typingSpeed = isDeleting ? 100 : 150;
      setTimeout(typeWriter, typingSpeed);
    }
  }
  
  setTimeout(typeWriter, 1500);

  // Smooth Scroll (Links do Menu)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });

  // Botão Voltar ao Topo
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    });
  }

  // ==========================================
  // 2. SISTEMA DE TRADUÇÃO (ATUALIZADO E CORRIGIDO)
  // ==========================================

  const langOptions = document.querySelectorAll('.language-options li');
  const currentLangImg = document.getElementById('selected-flag');
  const currentLangText = document.getElementById('selected-lang-text');
  const langList = document.querySelector('.language-options');
  const langSelector = document.querySelector('.selected-language');

  // Mapas para simplificar a lógica de imagens e textos
  const flagMap = {
    'pt-br': './assets/flags/br.png',
    'en': './assets/flags/gb.png',
    'es': './assets/flags/es.png'
  };
  const textMap = {
    'pt-br': 'BR',
    'en': 'English',
    'es': 'Español'
  };

  // Função Principal de Mudança de Idioma
  function changeLanguage(lang) {
    // Segurança: Verifica se translations.js carregou
    if (typeof translations === 'undefined' || !translations[lang]) {
        console.error("Tradução não encontrada para:", lang);
        return;
    }

    // A. Atualiza textos (HTML)
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // B. Atualiza placeholders (Formulários)
    document.querySelectorAll('[data-key-placeholder]').forEach(element => {
        const key = element.getAttribute('data-key-placeholder');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // C. Atualiza Tooltips (CORREÇÃO ADICIONADA AQUI)
    document.querySelectorAll('[data-key-tooltip]').forEach(element => {
        const key = element.getAttribute('data-key-tooltip');
        if (translations[lang][key]) {
            element.setAttribute('data-tooltip', translations[lang][key]);
        }
    });

    // D. Atualiza o visual do seletor (Bandeira e Texto)
    if(currentLangImg) currentLangImg.src = flagMap[lang];
    if(currentLangText) currentLangText.innerText = textMap[lang];

    // E. Atualiza o Ano (necessário pois a tradução sobrescreve o footer)
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.innerText = new Date().getFullYear();
    }

    // F. Salva e Fecha
    localStorage.setItem('preferredLang', lang);
    if(langList) langList.classList.remove('active');
  }

  // Lógica de Abrir/Fechar o Menu
  if (langSelector && langList) {
    langSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        langList.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        langList.classList.remove('active');
    });
  }

  // Eventos de Clique nas Opções
  langOptions.forEach((option) => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        changeLanguage(lang);
    });
  });

  // Inicializa com o idioma salvo ou padrão
  const savedLang = localStorage.getItem('preferredLang') || 'pt-br';
  changeLanguage(savedLang);

});
