document.addEventListener('DOMContentLoaded', function() {

  setTimeout(function() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
    }
  }, 1500);

  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }

  if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 } },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#00e6ff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
      },
      "interactivity": {
        "detect_on": "canvas", 
        "events": { 
            "onhover": { "enable": true, "mode": "grab" }, 
            "onclick": { "enable": true, "mode": "push" },
            "resize": true 
        },
        "modes": { 
            "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, 
            "push": { "particles_nb": 4 } 
        }
      },
      "retina_detect": true
    });
  }

  const professions = ["Full Stack Developer", "Systems Analyst", "Web Designer", "Tech Enthusiast"];
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
      setTimeout(typeWriter, isDeleting ? 100 : 150);
    }
  }
  setTimeout(typeWriter, 1500);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });

  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    });
  }

  const languageOptions = document.querySelector('.language-options');
  const selectedLanguage = document.querySelector('.selected-language');
  const selectedFlag = document.getElementById('selected-flag');
  const selectedLangText = document.getElementById('selected-lang-text');

  const flags = { 'pt-br': 'br.png', 'en': 'gb.png', 'es': 'es.png' };
  const displayNames = { 'pt-br': 'BR', 'en': 'English', 'es': 'Español' };

  const setLanguage = (lang) => {
    if (typeof translations === 'undefined' || !translations[lang]) return;

    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });

    document.querySelectorAll('[data-key-placeholder]').forEach(el => {
      const key = el.getAttribute('data-key-placeholder');
      if (translations[lang][key]) el.placeholder = translations[lang][key];
    });

    document.querySelectorAll('[data-key-tooltip]').forEach(el => {
      const key = el.getAttribute('data-key-tooltip');
      if (translations[lang][key]) el.setAttribute('data-tooltip', translations[lang][key]);
    });

    if (selectedFlag) selectedFlag.src = `./assets/flags/${flags[lang]}`;
    if (selectedLangText) selectedLangText.textContent = displayNames[lang];
    if (languageOptions) languageOptions.classList.remove('active');

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    localStorage.setItem('language', lang);
  };

  if (selectedLanguage && languageOptions) {
    selectedLanguage.addEventListener('click', (e) => {
      e.stopPropagation();
      languageOptions.classList.toggle('active');
    });
  }

  if (languageOptions) {
    languageOptions.addEventListener('click', (e) => {
      const li = e.target.closest('li');
      if (li) {
        const lang = li.getAttribute('data-lang');
        setLanguage(lang);
      }
    });
  }

  document.addEventListener('click', () => {
    if (languageOptions) languageOptions.classList.remove('active');
  });

  const savedLang = localStorage.getItem('language') || 'pt-br';
  setLanguage(savedLang);
});
