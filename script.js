/* ═══════════════════════════════════════════
   Consultorio DC — Script
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Navbar scroll effect ───
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ─── Mobile menu ───
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });

  // ─── Carousel ───
  const slides = [
    { text: 'Un espacio cálido y seguro donde cada niño es protagonista de su propio desarrollo.', color: '#8B9E7C' },
    { text: 'Consultorios diseñados para que los más pequeños se sientan como en casa.', color: '#7A6B55' },
    { text: 'Profesionales comprometidas con el bienestar integral de tu hijo.', color: '#6B7F5E' },
    { text: 'Acompañamos a las familias en cada etapa del crecimiento.', color: '#A89880' },
  ];

  const carousel = document.getElementById('carousel');
  const carouselText = document.getElementById('carouselText');
  const dotsContainer = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  let current = 0;
  let interval;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function updateSlide() {
    carousel.style.background = slides[current].color;
    carouselText.textContent = '"' + slides[current].text + '"';
    dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  function goTo(index) {
    current = index;
    updateSlide();
    resetInterval();
  }

  function next() {
    current = (current + 1) % slides.length;
    updateSlide();
  }

  function prev() {
    current = (current - 1 + slides.length) % slides.length;
    updateSlide();
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(next, 5000);
  }

  prevBtn.addEventListener('click', () => { prev(); resetInterval(); });
  nextBtn.addEventListener('click', () => { next(); resetInterval(); });

  // Init
  updateSlide();
  interval = setInterval(next, 5000);

});
