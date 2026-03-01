/* =============================================
   MAIN.JS — Abdul Kholid Iswan Portfolio
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ===== RENDER DARI CONFIG =====
  function renderFromConfig() {
    // --- Page title ---
    document.title = `${CONFIG.name}, ${CONFIG.degree} \u2014 ${CONFIG.title}`;

    // --- Navbar brand ---
    const navBrand = document.querySelector('a[href="#home"] span.text-white');
    if (navBrand) navBrand.textContent = CONFIG.shortName;
    const footerShort = document.getElementById('footerShortName');
    if (footerShort) footerShort.textContent = CONFIG.shortName;

    // --- Hero ---
    const heroHeading = document.getElementById('heroHeading');
    if (heroHeading) {
      const parts = CONFIG.name.split(' ');
      const last = parts.pop();
      const first = parts.join(' ');
      heroHeading.innerHTML = `${first}<br/><span class="gradient-text">${last}</span>`;
    }
    const heroDeg = document.getElementById('heroDegree');
    if (heroDeg) heroDeg.textContent = CONFIG.degree;
    const heroDesc = document.getElementById('heroDesc');
    if (heroDesc) heroDesc.textContent = CONFIG.description;
    const photo = document.getElementById('profilePhoto');
    if (photo) { photo.src = CONFIG.photo; photo.alt = CONFIG.name; }

    // --- Hero social links ---
    document.querySelectorAll('a[href*="github.com"]').forEach(a => a.href = CONFIG.github);
    document.querySelectorAll('a[href*="linkedin.com"]').forEach(a => a.href = CONFIG.linkedin);
    document.querySelectorAll('a[href^="mailto:"]').forEach(a => a.href = `mailto:${CONFIG.email}`);

    // --- About code card ---
    const setId = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    setId('aboutCodeName',     CONFIG.name);
    setId('aboutCodeDegree',   CONFIG.degree);
    setId('aboutCodeRole',     CONFIG.title);
    setId('aboutCodeLocation', CONFIG.location);
    const avail = document.getElementById('aboutCodeAvailable');
    if (avail) avail.textContent = CONFIG.available ? 'true' : 'false';

    // --- Stats ---
    setId('statExperience', CONFIG.experienceYears);
    setId('statProjects',   CONFIG.projectsDone);

    // --- Footer ---
    setId('footerName', CONFIG.name);

    // --- Contact info text ---
    document.querySelectorAll('p.text-white.font-medium').forEach(p => {
      if (p.textContent.trim() === 'isoft.sby@gmail.com' || p.textContent.includes('@gmail') || p.textContent.includes('@email')) p.textContent = CONFIG.email;
      if (p.textContent.trim().startsWith('@') && p.textContent.length < 30) p.textContent = CONFIG.githubUsername;
      if (p.textContent.trim() === 'Abdul Kholid Iswan' && p.closest('a[href*="linkedin"]')) p.textContent = CONFIG.linkedinName;
    });

    // --- Experience list ---
    const expList = document.getElementById('experienceList');
    if (expList) {
      expList.innerHTML = `
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block"></div>
        ${CONFIG.experiences.map(exp => `
          <div class="reveal relative flex gap-8 mb-12">
            <div class="hidden md:flex flex-col items-center">
              <div class="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10 flex-shrink-0">
                <i class="fas ${exp.icon} text-primary text-xl"></i>
              </div>
            </div>
            <div class="flex-1 bg-dark-700 border border-dark-500 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 md:ml-4 group">
              <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 class="text-xl font-semibold text-white group-hover:text-primary transition-colors">${exp.role}</h3>
                  <p class="text-primary font-medium mt-1">${exp.company}</p>
                </div>
                <span class="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-mono whitespace-nowrap">${exp.period}</span>
              </div>
              <ul class="space-y-2 text-gray-400 text-sm">
                ${exp.tasks.map(t => `<li class="flex gap-2"><i class="fas fa-chevron-right text-primary mt-0.5 flex-shrink-0"></i> ${t}</li>`).join('')}
              </ul>
              <div class="flex flex-wrap gap-2 mt-4">
                ${exp.techs.map(t => `<span class="tech-badge-sm">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      `;
    }

    // --- Project grid ---
    const projectGrid = document.getElementById('projectGrid');
    if (projectGrid) {
      const statusBadge = (s) => s
        ? `<div class="absolute top-3 right-3"><span class="px-2 py-0.5 bg-${s.color}-500/20 border border-${s.color}-500/40 rounded-full text-${s.color}-400 text-xs">${s.label}</span></div>`
        : '';
      const demoLink = (url) => url
        ? `<a href="${url}" class="flex items-center gap-2 text-sm text-gray-400 hover:text-secondary transition-colors"> <i class="fas fa-external-link-alt"></i> Demo </a>`
        : '';
      const cards = CONFIG.projects.map(p => `
        <div class="reveal project-card bg-dark-700 border border-dark-500 rounded-2xl overflow-hidden ${p.hoverBorder} transition-all duration-300 group">
          <div class="h-48 bg-gradient-to-br ${p.gradient} relative flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 bg-dark-800/40"></div>
            <i class="fas ${p.icon} text-6xl ${p.iconColor} relative z-10 group-hover:scale-110 transition-transform duration-300"></i>
            ${statusBadge(p.status)}
          </div>
          <div class="p-6">
            <h3 class="font-semibold text-white text-lg mb-2 ${p.hoverTitle} transition-colors">${p.title}</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">${p.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              ${p.techs.map(t => `<span class="tech-badge-sm">${t}</span>`).join('')}
            </div>
            <div class="flex gap-3">
              <a href="${p.github}" target="_blank" class="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"> <i class="fab fa-github"></i> Code </a>
              ${demoLink(p.demo)}
            </div>
          </div>
        </div>
      `).join('');

      const moreCard = `
        <div class="reveal project-card bg-dark-700 border border-dashed border-dark-500 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group flex items-center justify-center min-h-[350px]">
          <div class="text-center p-6">
            <div class="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
              <i class="fab fa-github text-primary text-2xl"></i>
            </div>
            <h3 class="font-semibold text-white mb-2">Lihat Semua Proyek</h3>
            <p class="text-gray-400 text-sm mb-4">Temukan lebih banyak proyek di GitHub saya</p>
            <a href="${CONFIG.github}" target="_blank" class="px-5 py-2 bg-primary/20 hover:bg-primary border border-primary/40 rounded-full text-primary hover:text-white text-sm transition-all duration-300">
              Kunjungi GitHub <i class="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        </div>
      `;
      projectGrid.innerHTML = cards + moreCard;
    }

    // --- Education ---
    const eduCard = document.getElementById('educationCard');
    if (eduCard) {
      const edu = CONFIG.education;
      eduCard.innerHTML = `
        <div class="bg-dark-700 border border-dark-500 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-all duration-300"></div>
          <div class="flex flex-col md:flex-row gap-6 items-start">
            <div class="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
              <i class="fas fa-university text-primary text-3xl"></i>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 class="text-xl font-bold text-white">${edu.university}</h3>
                  <p class="text-primary font-medium mt-1">${edu.major}</p>
                </div>
                <span class="px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-mono">${edu.badge}</span>
              </div>
              <p class="text-gray-400 leading-relaxed mb-4">${edu.description}</p>
              <div class="flex flex-wrap gap-3">
                <div class="flex items-center gap-2 text-sm text-gray-400"><i class="fas fa-map-marker-alt text-primary"></i><span>${edu.location}</span></div>
                <div class="flex items-center gap-2 text-sm text-gray-400"><i class="fas fa-book text-secondary"></i><span>${edu.major.replace('S1 ', '')}</span></div>
                <div class="flex items-center gap-2 text-sm text-gray-400"><i class="fas fa-award text-accent"></i><span>Gelar ${edu.badge.replace('Lulus ', '')}</span></div>
              </div>
              <div class="flex flex-wrap gap-2 mt-4">
                ${edu.skills.map(s => `<span class="tech-badge-sm">${s}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Re-observe newly rendered reveal elements
    document.querySelectorAll('.reveal:not(.revealed)').forEach(el => revealObserver.observe(el));
    document.querySelectorAll('.skill-bar').forEach(bar => skillObserver.observe(bar));
  }

  // ===== LOADER =====
  const loader = document.createElement('div');
  loader.id = 'loader';
  loader.innerHTML = '<div class="loader-ring"></div>';
  document.body.prepend(loader);

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hide');
      setTimeout(() => loader.remove(), 500);
    }, 600);
  });

  // ===== CURSOR GLOW =====
  const cursorGlow = document.createElement('div');
  cursorGlow.classList.add('cursor-glow');
  document.body.appendChild(cursorGlow);

  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });

  // ===== BACK TO TOP BUTTON =====
  const backToTop = document.createElement('button');
  backToTop.id = 'backToTop';
  backToTop.innerHTML = '<i class="fas fa-chevron-up text-white text-sm"></i>';
  backToTop.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTop);

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ===== NAVBAR SCROLL =====
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar style on scroll
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top visibility
    if (scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }

    // Active nav link
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ===== MOBILE MENU =====
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = menuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      const icon = menuBtn.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
    });
  });

  // ===== TYPED ROLE EFFECT =====
  const roles = CONFIG.roles;
  const typedEl = document.getElementById('typedRole');
  if (typedEl) {
    // Add cursor element
    const cursor = document.createElement('span');
    cursor.classList.add('typed-cursor');
    typedEl.parentElement.appendChild(cursor);

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseTime = 1800;

    function type() {
      const current = roles[roleIndex];
      if (isDeleting) {
        typedEl.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(type, 400);
          return;
        }
        setTimeout(type, deleteSpeed);
      } else {
        typedEl.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          setTimeout(type, pauseTime);
          return;
        }
        setTimeout(type, typeSpeed);
      }
    }
    setTimeout(type, 800);
  }

  // ===== INTERSECTION OBSERVER (Reveal + Skill Bars) =====
  const revealElements = document.querySelectorAll('.reveal, .section-header');
  const skillBars = document.querySelectorAll('.skill-bar');

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on sibling index
        const siblings = entry.target.parentElement
          ? Array.from(entry.target.parentElement.children).filter(el => el.classList.contains('reveal'))
          : [];
        const index = siblings.indexOf(entry.target);
        const delay = index >= 0 ? index * 120 : 0;

        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);

        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // Skill bars observer
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.dataset.width + '%';
        setTimeout(() => {
          bar.style.width = targetWidth;
        }, 300);
        skillObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  skillBars.forEach(bar => skillObserver.observe(bar));

  // ===== RENDER KONTEN DARI CONFIG =====
  renderFromConfig();

  // ===== SMOOTH SCROLL for all anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ===== CONTACT FORM SUBMIT — WhatsApp Redirect =====
  const WA_NUMBER = CONFIG.whatsapp;
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      const nama  = contactForm.querySelector('input[type="text"]').value.trim();
      const email = contactForm.querySelector('input[type="email"]').value.trim();
      const pesan = contactForm.querySelector('textarea').value.trim();

      if (!nama || !email || !pesan) return;

      btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Membuka WhatsApp...';
      btn.disabled = true;

      const text = `Halo Abdul Kholid! 👋\n\n*Nama:* ${nama}\n*Email:* ${email}\n\n*Pesan:*\n${pesan}`;
      const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

      setTimeout(() => {
        window.open(waUrl, '_blank');

        btn.innerHTML = '<i class="fab fa-whatsapp"></i> Diarahkan ke WhatsApp!';
        btn.classList.remove('bg-primary', 'hover:bg-violet-700');
        btn.classList.add('bg-green-600');

        contactForm.reset();

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
          btn.classList.add('bg-primary', 'hover:bg-violet-700');
          btn.classList.remove('bg-green-600');
        }, 3000);
      }, 600);
    });
  }

  // ===== PARTICLE BACKGROUND (subtle dots) =====
  const canvas = document.createElement('canvas');
  canvas.id = 'particles';
  canvas.style.cssText = `
    position: fixed; top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.25;
  `;
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 60;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '124, 58, 237' : '6, 182, 212';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // Connect nearby particles with lines
  function connectParticles() {
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach(p2 => {
        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(124, 58, 237, ${0.08 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });
  }

  function fullAnimate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    requestAnimationFrame(fullAnimate);
  }

  // Cancel the first animation and start the full one
  fullAnimate();

  console.log('%c Abdul Kholid Iswan | Full Stack Developer ', 
    'background: linear-gradient(135deg, #7C3AED, #06B6D4); color: white; font-size: 14px; padding: 8px 16px; border-radius: 8px; font-weight: bold;');
  console.log('%c Portfolio built with HTML + Tailwind CSS + JavaScript ', 
    'color: #a78bfa; font-size: 12px;');
});
