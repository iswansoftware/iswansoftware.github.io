/* =============================================
   MAIN.JS — Abdul Kholid Iswan Portfolio
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

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
  const roles = [
    'Full Stack Developer',
    'Laravel Developer',
    'React.js Developer',
    'Web Consultant',
  ];
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
  const WA_NUMBER = '6285607502566';
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
