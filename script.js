document.addEventListener('DOMContentLoaded', function() {
 
  setTimeout(function() {
    document.querySelector('.loading-screen').classList.add('hidden');
  }, 1500);

  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 60,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#00e6ff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }

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

  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // --- CÓDIGO DE TRADUÇÃO ---
  const languageSwitcher = document.querySelector('.language-switcher');
  const selectedLanguage = document.querySelector('.selected-language');
  const languageOptions = document.querySelector('.language-options');
  const selectedFlag = document.getElementById('selected-flag');
  const selectedLangText = document.getElementById('selected-lang-text');

  // Função para definir o idioma
  const setLanguage = (lang) => {
      // Verifica se 'translations' está definido
      if (typeof translations === 'undefined') {
        console.error("Objeto 'translations' não encontrado. Verifique se o arquivo translations.js foi carregado.");
        return;
      }

      const elements = document.querySelectorAll('[data-key]');
      elements.forEach(element => {
          const key = element.getAttribute('data-key');
          if (translations[lang] && translations[lang][key]) {
              element.innerHTML = translations[lang][key];
          }
      });

      // Traduzir placeholders
      const placeholderElements = document.querySelectorAll('[data-key-placeholder]');
      placeholderElements.forEach(element => {
          const key = element.getAttribute('data-key-placeholder');
          if (translations[lang] && translations[lang][key]) {
              element.placeholder = translations[lang][key];
          }
      });

      // Atualizar o seletor de idioma
      if (selectedFlag && selectedLangText) {
        const langDisplayNames = {
          'pt-br': 'BR',
          'en': 'English',
          'es': 'Español'
        };

        selectedFlag.src = `./assets/flags/${lang === 'pt-br' ? 'br' : lang === 'en' ? 'gb' : lang.split('-')[0]}.png`;
        selectedLangText.textContent = langDisplayNames[lang] || lang.toUpperCase();
      }

      // Salvar preferência de idioma
      localStorage.setItem('language', lang);
      if (languageOptions) languageOptions.style.display = 'none';
      if (languageSwitcher) languageSwitcher.classList.remove('open');
  };

  // Abrir/fechar o seletor de idiomas
  if (selectedLanguage) {
    selectedLanguage.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = languageSwitcher.classList.toggle('open');
        languageOptions.style.display = isOpen ? 'block' : 'none';
    });
  }

  // Selecionar um idioma
  if (languageOptions) {
    languageOptions.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (li) {
            const lang = li.getAttribute('data-lang');
            if (lang) setLanguage(lang);
        }
    });
  }

  // Fechar ao clicar fora
  document.addEventListener('click', () => {
      if (languageSwitcher && languageOptions) {
        languageSwitcher.classList.remove('open');
        languageOptions.style.display = 'none';
      }
  });

  // Carregar idioma salvo ou padrão
  const savedLang = localStorage.getItem('language') || 'pt-br';
  setLanguage(savedLang);
});
