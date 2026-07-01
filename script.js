import { translations } from './translations.js';

document.addEventListener('DOMContentLoaded', function () {
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
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observerOptions = {
    rootMargin: '-80px 0px -50% 0px', // Adjusts the "trigger area"
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(currentId)) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // Throttle function to limit how often a function can run
  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  };

  // Back to top visibility on scroll
  const handleScroll = () => {
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
      if (window.pageYOffset > 500) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    }
  };

  window.addEventListener('scroll', throttle(handleScroll, 100));

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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
    if (typeof translations === 'undefined' || !translations[lang]) {
      console.error(`Translations for language "${lang}" not found.`);
      return;
    }

    // Set active language text and flag
    const langNames = { 'pt-br': 'BR', 'en': 'EN', 'es': 'ES' };
    const flags = {
      'pt-br': 'https://flagcdn.com/w40/br.png',
      'en': 'https://flagcdn.com/w40/us.png',
      'es': 'https://flagcdn.com/w40/es.png'
    };

    if (selectedFlag) selectedFlag.src = flags[lang];
    if (selectedLangText) selectedLangText.textContent = langNames[lang];

    const currentTranslations = translations[lang];

    // Translate elements with data-key (for innerHTML) and data-key-placeholder (for placeholders)
    document.querySelectorAll('[data-key-placeholder]').forEach(el => {
      const key = el.getAttribute('data-key-placeholder');
      el.placeholder = currentTranslations[key] || el.placeholder;
    });

    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      // Use innerHTML to correctly render tags like <span> in the footer
      el.innerHTML = currentTranslations[key] || el.innerHTML;
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

  // Mobile Menu
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinksContainer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
      });
    });
  }

  // Skills Tabs
  const skillTabs = document.querySelectorAll('.skill-tab');
  const filterBtns = document.querySelectorAll('.filter-btn');
  // Selecionar apenas os cards dentro da seção de habilidades, ignorando as certificações
  const stackContainer = document.querySelector('.skills-grid');
  const skillCards = stackContainer ? stackContainer.querySelectorAll('.skill-card') : [];

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-tab');
      skillCards.forEach(card => {
        if (card.getAttribute('data-category') === category || category === 'all') {
          card.classList.remove('hidden-card');
        } else {
          card.classList.add('hidden-card');
        }
      });
    });
  });

  const activeSkillTab = document.querySelector('.skill-tab.active');
  if (activeSkillTab) activeSkillTab.click();

  // Dynamic Projects
  const projectsData = [
    { key: 1, category: "sistema", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800", link: "https://cafeteria-nine-mu.vercel.app/" },
    { key: 2, category: "institucional", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", link: "https://ampla-phi.vercel.app/" },
    { key: 3, category: "sistema", image: "https://plus.unsplash.com/premium_photo-1699387204388-120141c76d51?q=80&w=1978&auto=format&fit=crop", link: "https://steptodischarge.vercel.app/" },
    { key: 4, category: "sistema", image: "https://media.istockphoto.com/id/1813070414/pt/foto/family-playing-guessing-game-at-home.jpg?s=1024x1024&w=is&k=20&c=G3YIMWgJEFbP8mYVaKh3Yd6IhtlzfXj7pQgxEEn3kuw=", link: "https://makeamove-murex.vercel.app/" },
    { key: 5, category: "sistema", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800", link: "https://me-conteai.vercel.app/" },
    { key: 6, category: "ecommerce", image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800", link: "https://anapaulabordados.vercel.app/" },
    { key: 7, category: "ecommerce", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800", link: "https://lojavitor-psi.vercel.app/" },
    { key: 8, category: "institucional", image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800", link: "https://rcc-vert.vercel.app/" },
    { key: 9, category: "ecommerce", image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80", link: "https://mercadolivreby-unijorge.vercel.app/" },
    { key: 10, category: "sistema", image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80", link: "https://hgysmhc4hnktm5svteurqg.streamlit.app/" },
    { key: 11, category: "sistema", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800", link: "https://cash-ou-milhas.vercel.app/" },
    { key: 12, category: "sistema", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", link: "https://cadastroleads.vercel.app/" },
    { key: 13, category: "sistema", image: "https://images.unsplash.com/photo-1763736809873-79ff9eb96f8a?auto=format&fit=crop&q=80&w=800", link: "https://suacompracomtroco.vercel.app/" },
    { key: 14, category: "institucional", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", link: "https://espaco-terapeutico.vercel.app/" },
    { key: 15, category: "institucional", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800", link: "https://podcast-teatro.vercel.app/" },
    { key: 16, category: "ecommerce", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800", link: "https://lojavitor2.vercel.app/" },
    { key: 17, category: "institucional", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", link: "https://barbearia-mu-sandy.vercel.app/" },
    { key: 18, category: "institucional", image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=800", link: "https://biomedlucelia.com.br/" },
    { key: 19, category: "sistema", image: "https://images.unsplash.com/photo-1607538563957-27ae51a73c5f?auto=format&fit=crop&q=80&w=800", link: "https://crowd8.vercel.app/" },
    { key: 20, category: "sistema", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800", link: "https://eletropostow.vercel.app/" },
    { key: 21, category: "ecommerce", image: "https://images.unsplash.com/photo-1630398777649-cdfc7c5e8a24?auto=format&fit=crop&q=80&w=800", link: "https://hibonita.vercel.app/" },
    { key: 22, category: "sistema", image: "https://images.unsplash.com/photo-1672264416172-7fc1886d1b8c?auto=format&fit=crop&q=80&w=800", link: "https://fastsheet.vercel.app/" },
    { key: 23, category: "institucional", image: "https://images.unsplash.com/photo-1475319122043-5ca9eeceefaf?auto=format&fit=crop&q=80&w=800", link: "https://frutosdosenhor-a0070.web.app/" },
    { key: 24, category: "ecommerce", image: "https://images.unsplash.com/photo-1737748612418-e39bcd6503a2?auto=format&fit=crop&q=80&w=800", link: "https://oguiimports-2f94d.web.app/" },
    { key: 25, category: "sistema", image: "https://plus.unsplash.com/premium_photo-1718674394245-9f270c5fd2b3?auto=format&fit=crop&q=80&w=800", link: "https://eventoseencontros.web.app" }
  ];

  const projectsContainer = document.getElementById('projects-container');
  const renderProjects = (filter) => {
    if (!projectsContainer) return;
    projectsContainer.innerHTML = '';

    let delay = 0;
    projectsData.forEach((proj) => {
      if (filter === 'all' || proj.category === filter) {
        const div = document.createElement('div');
        div.className = 'project-card';
        div.setAttribute('data-aos', 'fade-up');
        if (delay > 0) div.setAttribute('data-aos-delay', delay.toString());
        delay += 100;
        if (delay > 200) delay = 0;

        div.innerHTML = `
          <div class="project-image">
            <img src="${proj.image}" alt="Projeto ${proj.key}" loading="lazy">
          </div>
          <div class="project-body">
            <h3 data-key="proj${proj.key}Title"></h3>
            <p data-key="proj${proj.key}Desc"></p>
            <div class="project-footer">
              <a href="${proj.link}" class="btn btn-primary" data-key="viewProject" target="_blank" rel="noopener noreferrer"></a>
            </div>
          </div>
        `;
        // Fade in new projects smoothly with GSAP if available
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(div,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, delay: (delay / 100) * 0.1, ease: "power2.out" }
          );
        }
        projectsContainer.appendChild(div);
      }
    });

    const currentLang = localStorage.getItem('language') || 'pt-br';
    setLanguage(currentLang);
  };

  if (projectsContainer) {
    renderProjects('all');
  }

  const projectFilterBtns = document.querySelectorAll('.filter-btn');
  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  // Footer Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact Form AJAX
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      const formData = new FormData(this);

      fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
            this.reset();
          } else {
            alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Ocorreu um erro ao enviar. Verifique sua conexão e tente novamente.');
        })
        .finally(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }

  // --- LUSION STYLE PREMIUM EFFECTS ---

  // 1. Vanilla Tilt for Skills Cards (3D Effect)
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".skill-card"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      perspective: 1000,
      scale: 1.05
    });
  }

});
