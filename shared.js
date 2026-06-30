/**
 * BIRTHDAY WEBSITE — SHARED JAVASCRIPT
 * Reads CONFIG (from config.js) and wires up:
 *  - CSS variable injection (colors, opacity, speed)
 *  - Background image
 *  - Floating hearts
 *  - Sparkle particles
 *
 * All pages include this file after config.js.
 */

/* ── HELPER: hex + alpha → rgba string ───────────────────── */
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/* ── ANIMATION SPEED MULTIPLIER ──────────────────────────── */
function getSpeedMult() {
  const map = { slow: 1.6, normal: 1.0, fast: 0.55 };
  return map[CONFIG.animations.animationSpeed] ?? 1.0;
}

/* ── APPLY CONFIG TO CSS VARIABLES ───────────────────────── */
function applyConfig() {
  const root = document.documentElement;
  const { colors: c, animations: a } = CONFIG;

  root.style.setProperty('--primary',        c.primary);
  root.style.setProperty('--secondary',      c.secondary);
  root.style.setProperty('--text-light',     c.textLight);
  root.style.setProperty('--overlay-color',  hexToRgba(c.overlayDark, c.overlayAlpha));
  root.style.setProperty('--bg-opacity',     a.backgroundOpacity);
  root.style.setProperty('--fade-duration',  a.fadeInDuration + 's');
  root.style.setProperty('--anim-speed',     getSpeedMult());
}

/* ── SET BACKGROUND IMAGE ─────────────────────────────────── */
function setBackground(imagePath) {
  const el = document.getElementById('bgImage');
  if (el) el.style.backgroundImage = `url('${imagePath}')`;
}

/* ── FLOATING HEARTS ──────────────────────────────────────── */
function generateHearts() {
  if (!CONFIG.animations.floatingHearts) return;
  const container = document.getElementById('heartsContainer');
  if (!container) return;

  const emojis = ['💝', '💖', '💗', '💓', '💕', '❤️', '🩷', '💞'];
  const count  = CONFIG.animations.heartCount;
  const speed  = getSpeedMult();

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className      = 'floating-heart';
    el.textContent    = emojis[i % emojis.length];
    el.style.left     = `${Math.random() * 100}%`;
    el.style.fontSize = `${1 + Math.random() * 1.3}rem`;

    const dur   = (5 + Math.random() * 7) * speed;
    const delay = Math.random() * 8;
    el.style.animationDuration = `${dur}s`;
    el.style.animationDelay    = `${delay}s`;

    container.appendChild(el);
  }
}

/* ── SPARKLE PARTICLES ────────────────────────────────────── */
function initSparkles() {
  if (!CONFIG.animations.sparkles) return;
  const canvas = document.getElementById('sparkleCanvas');
  if (!canvas) return;

  const ctx   = canvas.getContext('2d');
  const speed = getSpeedMult();

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(true); }

    reset(scatter = false) {
      this.x    = Math.random() * canvas.width;
      this.y    = Math.random() * canvas.height;
      this.r    = Math.random() * 2.2 + 0.5;
      this.max  = Math.random() * 0.5 + 0.12;
      this.op   = scatter ? Math.random() * this.max : 0;
      this.rate = (Math.random() * 0.008 + 0.003) / speed;
      this.grow = scatter ? Math.random() > 0.5 : true;
    }

    step() {
      this.op += this.grow ? this.rate : -this.rate;
      if (this.op >= this.max) this.grow = false;
      if (this.op <= 0)        this.reset();
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.op})`;
      ctx.fill();
    }
  }

  const particles = Array.from({ length: 70 }, () => new Particle());

  (function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.step(); p.draw(); });
    requestAnimationFrame(loop);
  })();
}

/* ── INIT ON EVERY PAGE ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  generateHearts();
  initSparkles();
});
