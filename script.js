document.addEventListener('DOMContentLoaded', function() {
  // Loading Screen
  const loadingScreen = document.querySelector('.loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 1000);
  }

  // AOS Initialization
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });
  }

  // Particles Background
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#6366f1" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#6366f1", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }
      },
      "retina_detect": true
    });
  }

  // Typing Effect
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
      const typingSpeed = isDeleting ? 70 : 120;
      setTimeout(typeWriter, typingSpeed);
    }
  }
  
  setTimeout(typeWriter, 1500);

  // Active Link Highlighting on Scroll
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link && current && link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });

    // Back to top visibility
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
      if (window.pageYOffset > 500) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    }
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offset = 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Translation System
  const languageSwitcher = document.querySelector('.language-switcher');
  const selectedLanguage = document.querySelector('.selected-language');
  const languageDropdown = document.getElementById('language-dropdown');
  const selectedFlag = document.getElementById('selected-flag');
  const selectedLangText = document.getElementById('selected-lang-text');

  const setLanguage = (lang) => {
    if (typeof translations === 'undefined') return;

    // Set active language text and flag
    const langNames = { 'pt-br': 'BR', 'en': 'EN', 'es': 'ES' };
    const flags = { 
      'pt-br': 'https://flagcdn.com/w40/br.png', 
      'en': 'https://flagcdn.com/w40/us.png', 
      'es': 'https://flagcdn.com/w40/es.png' 
    };
    
    if (selectedFlag) selectedFlag.src = flags[lang];
    if (selectedLangText) selectedLangText.textContent = langNames[lang];

    // Main translations
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Placeholders
    document.querySelectorAll('[data-key-placeholder]').forEach(el => {
      const key = el.getAttribute('data-key-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    localStorage.setItem('language', lang);
  };

  if (selectedLanguage && languageDropdown) {
    selectedLanguage.addEventListener('click', (e) => {
      e.stopPropagation();
      languageDropdown.classList.toggle('show');
    });
  }

  if (languageDropdown) {
    languageDropdown.querySelectorAll('.language-option').forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        setLanguage(lang);
        languageDropdown.classList.remove('show');
      });
    });
  }

  document.addEventListener('click', (e) => {
    if (languageDropdown && languageSwitcher && !languageSwitcher.contains(e.target)) {
      languageDropdown.classList.remove('show');
    }
  });

  // Initial language load
  const savedLang = localStorage.getItem('language') || 'pt-br';
  setLanguage(savedLang);

  // Footer Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

