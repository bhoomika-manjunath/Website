const eventData = {
  "quiz": {
    title: "Brain Teaser",
    description: "Step into an exciting arena where logic meets learning and speed meets strategy! The Civil Engineering Technical Quiz is a dynamic three-round competition designed to challenge your aptitude, technical expertise, and decision-making skills. From brain-twisting puzzles to rapid-fire technical challenges and high-risk final round decisions. Whether you’re a budding engineer or a problem-solving enthusiast, this is your platform to prove your knowledge, confidence, and teamwork. 🚀 Join the challenge. Think smart. Answer fast. Win big."
  },
  "concrete": {
    title: "Cast & Conquer",
    description: "Design. Mix. Cast. Test. Triumph. Concrete is not just a construction material — it is the foundation of skylines, bridges, highways, and the infrastructure that shapes our world. Are you ready to prove your mastery over it? This is crafted to challenge your understanding, precision, innovation, and teamwork in the field of Concrete Technology. Enter the lab. Make decisions that matter. Engineer a mix that performs under pressure. From designing proportions to achieving performance, this event pushes you to transform knowledge into measurable strength. Because in civil engineering, true excellence is not just calculated — it is built."
  },
  "cad": {
    title: "CAD - Mania",
    description: "Enter a dynamic environment where digital creativity meets thoughtful design in our CAD Designing event. Participants will translate their concepts into precise and well-structured drawings, shaping spaces and layouts that reflect clarity, functionality, and individual design approach. With the freedom to explore innovative planning and refined presentation, this platform encourages future designers to communicate their vision effectively through technology. It encourages careful observation, organised planning, and meaningful visual representation—skills that are essential in real-world design practice."
  },
  "survey": {
    title: "Contour Clash",
    description: "Experience the true foundation of civil engineering through this immersive Survey event. Participants will step into a real field setting to observe, measure, and understand the physical features of a site, discovering how accurate data shapes successful planning and construction. The activity highlights the importance of careful observation, steady coordination, and dependable measurement in transforming land into workable design. Survey stands as a simple yet powerful reminder that every great structure starts with knowing the ground beneath it."
  },
  "debate": {
    title: "AI vs Civil - The Verdict",
    description: "Step into a space where ideas ignite, voices rise with purpose, and perspectives challenge the ordinary in this powerful Debate event. Participants will engage in thought-provoking discussions, presenting arguments with clarity, confidence, and conviction. Every word spoken becomes a reflection of awareness, critical thinking, and the courage to stand for a viewpoint. It encourages participants to question, reason, and respond with presence of mind while listening with equal attention."
  },
  "paper-presentation": {
    title: "Idea Blitz",
    description: "Think Bold. Present Smart. Engineer the Future. Idea Blitz is a premier technical event designed to bring together innovative minds ready to redefine the future of civil engineering. This platform invites participants to conceptualize, develop, and present forward-thinking solutions that address real-world challenges in infrastructure, sustainability, resilience, and technological advancement. The event emphasizes clarity of vision, feasibility of execution, engineering soundness, and the potential societal impact of proposed solutions, showcasing both technical depth and practical relevance. This is your stage to think critically, design strategically, and present confidently."
  },
  "brick-work": {
    title: "Rapid BriQ",
    description: `Think you can build strong foundations? 🧱💪

Join the Brick Bond Challenge, where teamwork meets precision! Gather your team of four and compete to build the perfect brick wall with speed, accuracy, and flawless bonding technique.

It’s not just about stacking bricks — it’s about engineering skill, coordination, and craftsmanship!

Are you ready to lay the foundation for victory? 🏆`
  },
  "face-painting": {
    title: "Cursed Creation",
    description: "Step into the world of mystery, magic, and midnight madness! This Halloween-themed Face Painting event invites you to transform faces into spooky masterpieces. From eerie skeletons and wicked witches to creepy clowns and mystical creatures, let your imagination run wild in the spirit of Halloween. Participants will bring haunting characters to life using bold colors, dramatic effects, and creative detailing — all within the given time limit."
  },
  "fashion-designing": {
    title: "TrendFolds",
    description: "Who said newspapers are just for reading? Turn headlines into hemlines and transform ordinary newspapers into extraordinary fashion statements! This unique event challenges participants to design and create stunning outfits using only newspapers. From elegant gowns and avant-garde dresses to funky streetwear and creative accessories, let your imagination redefine sustainable fashion."
  },
  "treasure-hunt": {
    title: "Mysti Trail",
    description: "Get ready for an adventure filled with mystery, excitement, and smart exploration in our thrilling Treasure Hunt! In this unique twist, leading participants on a tech-savvy journey across the venue. Teams must decode each code, solve clever hints, and race against time to uncover the next destination, making every step more challenging and fun. This event is designed to test teamwork, quick thinking, observation, and problem-solving skills. As teams move from one clue to the next, strategy and coordination will play a key role in reaching the final treasure."
  },
  "geo-master-minds": {
    title: "Geo Master Minds",
    description: "Geo Mastermind is a geotechnical engineering competition that challenges students to test their knowledge of soil mechanics and soil testing techniques. From classification and index properties to compaction, shear strength, and foundation analysis, participants will analyze real-world geotechnical data and solve practical ground engineering problems. If strong structures start with strong foundations, this is your chance to prove your expertise beneath the surface."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Countdown Timer Logic
  const targetDate = new Date('March 26, 2026 09:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown').innerHTML = "<h3 style='color: var(--accent); grid-column: 1/-1;'>EVENT STARTED!</h3>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');
    const secsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minsEl) minsEl.textContent = minutes.toString().padStart(2, '0');
    if (secsEl) secsEl.textContent = seconds.toString().padStart(2, '0');
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

  const modal = document.getElementById('eventModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const closeBtn = document.querySelector('.close-btn');
  const eventCards = document.querySelectorAll('.event-card');

  eventCards.forEach(card => {
    card.addEventListener('click', () => {
      const eventKey = card.getAttribute('data-event');
      const data = eventData[eventKey];

      if (data) {
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
      }
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
  };

  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Schedule Tab Logic
  const tabBtns = document.querySelectorAll('.tab-btn');
  const scheduleDays = document.querySelectorAll('.schedule-day');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const dayId = btn.getAttribute('data-day');

      // Update Buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update Content
      scheduleDays.forEach(day => {
        day.classList.remove('active');
        if (day.id === dayId) {
          day.classList.add('active');
        }
      });
    });
  });

  // --- Navbar Logic ---
  const siteNav = document.getElementById('site-nav');
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');
  const allNavLinks = document.querySelectorAll('.nav-link:not(.nav-cta)');

  // Shrink navbar on scroll
  window.addEventListener('scroll', () => {
    siteNav.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // Active link on scroll
  const sections = ['about', 'events', 'schedule', 'poster', 'venue'];
  const navOffset = 80;
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - navOffset - 10) current = id;
    });
    allNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
  });

  // --- Canvas Background: Orange Wireframe City ---
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height, dpr = 1;
  let isMobile = false;
  let animFrame;
  let lastTime = 0;
  let totalTime = 0;
  let initialized = false;

  const buildings = [];
  const nodes = [];
  const waves = [
    { ry: 0.55, ampRel: 0.04, freq: 0.008, speed: 0.8, alpha: 0.18 },
    { ry: 0.60, ampRel: 0.03, freq: 0.010, speed: 1.2, alpha: 0.12 }
  ];

  // Helper functions
  const O = (a) => `rgba(255,140,26,${Math.max(0, Math.min(1, a))})`;
  const O2 = (a) => `rgba(255,180,80,${Math.max(0, Math.min(1, a))})`;

  function line(x1, y1, x2, y2, color, lw = 1) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lw;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  }

  function glow(x, y, r, color) {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, color);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.save();
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function dot(x, y, r, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function buildBuildings() {
    buildings.length = 0;
    const defs = isMobile
      ? [
        { rx: -0.02, ry: 0.67, rw: 0.10, rh: 0.18, type: 'slab' },
        { rx: 0.12, ry: 0.54, rw: 0.11, rh: 0.31, type: 'pyramid' },
        { rx: 0.28, ry: 0.51, rw: 0.10, rh: 0.34, type: 'tapered' },
        { rx: 0.44, ry: 0.30, rw: 0.12, rh: 0.55, type: 'tower' }, // PERFECT CENTER (Base 0.85)
        { rx: 0.62, ry: 0.51, rw: 0.10, rh: 0.34, type: 'tapered' },
        { rx: 0.77, ry: 0.54, rw: 0.11, rh: 0.31, type: 'pyramid' },
        { rx: 0.92, ry: 0.67, rw: 0.10, rh: 0.18, type: 'slab' },
      ]
      : [
        { rx: 0.05, ry: 0.50, rw: 0.050, rh: 0.35, type: 'slab' },
        { rx: 0.15, ry: 0.43, rw: 0.055, rh: 0.42, type: 'setback' },
        { rx: 0.26, ry: 0.33, rw: 0.060, rh: 0.52, type: 'tapered' },
        { rx: 0.37, ry: 0.22, rw: 0.055, rh: 0.63, type: 'tower' },
        { rx: 0.465, ry: 0.11, rw: 0.070, rh: 0.74, type: 'tower' }, // PERFECT CENTER (Base 0.85)
        { rx: 0.575, ry: 0.22, rw: 0.055, rh: 0.63, type: 'tower' },
        { rx: 0.68, ry: 0.33, rw: 0.060, rh: 0.52, type: 'tapered' },
        { rx: 0.795, ry: 0.43, rw: 0.055, rh: 0.42, type: 'setback' },
        { rx: 0.90, ry: 0.50, rw: 0.050, rh: 0.35, type: 'slab' },
      ];

    defs.forEach((d) => {
      const floors = 4 + Math.floor(Math.random() * 7);
      const cols = 2 + Math.floor(Math.random() * 4);
      const windows = [];
      const winRows = floors * 2;
      const winCols = cols * 2;
      for (let wr = 0; wr < winRows; wr++) {
        windows[wr] = [];
        for (let wc = 0; wc < winCols; wc++) {
          windows[wr][wc] = { lit: Math.random() > 0.45, flicker: Math.random() * Math.PI * 2 };
        }
      }
      buildings.push({
        ...d, floors, cols, windows, winRows, winCols,
        hasSpire: Math.random() > 0.6,
        spireHRel: 0.04 + Math.random() * 0.06,
        beaconPhase: Math.random() * Math.PI * 2
      });
    });
  }

  function buildNodes() {
    nodes.length = 0;
    const count = isMobile ? 12 : 22;
    for (let i = 0; i < count; i++) {
      nodes.push({
        rx: Math.random(),
        ry: Math.random() * 0.7,
        vrx: (Math.random() - 0.5) * 0.0006,
        vry: (Math.random() - 0.5) * 0.0006,
        r: 1 + Math.random() * 1.5,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }
  }

  function initCanvas() {
    dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Mobile stabilization: Ignore small height changes (address bar)
    if (initialized && Math.abs(w - width) < 10 && Math.abs(h - height) < 80) return;

    width = w;
    height = h;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    isMobile = width < 768;

    if (!initialized) {
      buildBuildings();
      buildNodes();
      initialized = true;
    }
  }

  function drawPerspectiveGrid() {
    const vx = width * 0.5, vy = height * 0.58;
    const cols = isMobile ? 10 : 18, rows = 7, spread = width * 0.9;
    for (let i = 0; i <= cols; i++) {
      const px = (width - spread) / 2 + (spread / cols) * i;
      line(vx, vy, px, height, O(0.04 + 0.05 * Math.abs((i / cols) - 0.5)), 0.6);
    }
    for (let r = 1; r <= rows; r++) {
      const frac = r / rows, y = vy + (height - vy) * Math.pow(frac, 1.8), halfW = (spread / 2) * frac;
      line(vx - halfW, y, vx + halfW, y, O(0.04 + frac * 0.04), 0.6);
    }
  }

  function drawHexGrid() {
    if (isMobile) return;
    const size = 28, startX = width * 0.55, startY = height * 0.65;
    const cols = 10, rows = 6, w = size * 2, h = Math.sqrt(3) * size;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cx = startX + col * w * 0.75;
        const cy = startY + row * h + (col % 2 === 0 ? 0 : h / 2);
        const dist = Math.sqrt(Math.pow(cx - width * 0.5, 2) + Math.pow(cy - height * 0.75, 2));
        const maxD = width * 0.55;
        if (dist > maxD) continue;
        const alpha = (1 - dist / maxD) * 0.12;
        ctx.strokeStyle = O(alpha);
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 180) * (60 * i - 30);
          ctx.lineTo(cx + size * Math.cos(angle), cy + size * Math.sin(angle));
        }
        ctx.closePath(); ctx.stroke();
      }
    }
  }

  function drawBuildings() {
    buildings.forEach(b => {
      const bx = b.rx * width, by = b.ry * height, bw = b.rw * width, bh = b.rh * height;
      const mid = bx + bw / 2, baseAlpha = 0.22;
      ctx.strokeStyle = O(baseAlpha);
      ctx.lineWidth = 1;

      if (b.type === 'pyramid') {
        ctx.beginPath();
        ctx.moveTo(bx, by + bh);
        ctx.lineTo(bx, by + bh * 0.35);
        ctx.lineTo(mid, by);
        ctx.lineTo(bx + bw, by + bh * 0.35);
        ctx.lineTo(bx + bw, by + bh);
        ctx.stroke();
      } else if (b.type === 'setback') {
        const ins = bw * 0.22;
        ctx.strokeRect(bx, by + bh * 0.30, bw, bh * 0.70);
        ctx.strokeRect(bx + ins, by, bw - ins * 2, bh * 0.32);
      } else if (b.type === 'tapered') {
        const t = bw * 0.12;
        ctx.beginPath();
        ctx.moveTo(bx, by + bh);
        ctx.lineTo(bx - t / 2, by + bh);
        ctx.lineTo(bx + t / 2, by);
        ctx.lineTo(bx + bw - t / 2, by);
        ctx.lineTo(bx + bw + t / 2, by + bh);
        ctx.stroke();
      } else {
        ctx.strokeRect(bx, by, bw, bh);
      }

      const winW = (bw * 0.55) / b.winCols, winH = (bh * 0.70) / b.winRows;
      for (let wr = 0; wr < b.winRows; wr++) {
        for (let wc = 0; wc < b.winCols; wc++) {
          const win = b.windows[wr][wc];
          if (!win.lit) continue;
          const f = 0.6 + 0.4 * Math.sin(totalTime * 2 + win.flicker);
          ctx.fillStyle = O2(0.18 * f);
          ctx.fillRect(bx + (bw - winW * b.winCols) / 2 + wc * winW, by + bh * 0.08 + wr * winH, winW * 0.65, winH * 0.55);
        }
      }

      if (b.hasSpire) {
        const sh = b.spireHRel * height;
        line(mid, by, mid, by - sh, O(baseAlpha * 1.1), 0.7);
        const blink = 0.5 + 0.5 * Math.sin(totalTime * 3 + b.beaconPhase);
        glow(mid, by - sh, 10 * blink, O(0.25 * blink));
        dot(mid, by - sh, 1.5, O2(0.8 * blink));
      }
      glow(mid, by + bh, bw * 0.7, O(0.04));
    });
  }

  function drawNodes() {
    nodes.forEach(n => {
      n.rx += n.vrx; n.ry += n.vry;
      if (n.rx < 0 || n.rx > 1) n.vrx *= -1;
      if (n.ry < 0 || n.ry > 0.7) n.vry *= -1;
      const nx = n.rx * width, ny = n.ry * height;
      const p = 0.5 + 0.5 * Math.sin(totalTime * 2.5 + n.pulseOffset);
      glow(nx, ny, 8 * p, O(0.06 * p));
      dot(nx, ny, n.r, O2(0.4 + 0.4 * p));
    });
  }

  function drawInfrastructure() {
    const by = height * 0.65;
    const bx = isMobile ? width * 0.05 : width * 0.1;
    const bw = isMobile ? width * 0.4 : width * 0.35;
    line(bx, by, bx + bw, by, O(0.15), 0.8);
    const pylons = [bx + bw * 0.3, bx + bw * 0.7];
    pylons.forEach(px => {
      const th = height * 0.2;
      line(px, by, px, by - th, O(0.15), 0.8);
      for (let i = 0; i < 8; i++) {
        const frac = i / 7;
        line(px, by - th * 0.85, px + (frac - 0.5) * bw * 0.5, by, O(0.08), 0.5);
      }
      glow(px, by - th, 12, O(0.12));
      dot(px, by - th, 2, O2(0.7));
    });
  }

  function drawEnergyWaves() {
    waves.forEach((w) => {
      ctx.beginPath(); ctx.lineWidth = 0.8; ctx.strokeStyle = O(w.alpha);
      for (let x = 0; x <= width; x += 10) {
        const y = height * w.ry + Math.sin(x * w.freq + totalTime * w.speed) * height * w.ampRel;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    });
  }

  function animate(now) {
    const delta = (now - lastTime) / 1000 || 0;
    lastTime = now;
    totalTime += Math.min(delta, 0.1); // Cap delta to prevent jumps

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    drawPerspectiveGrid();
    drawHexGrid();
    drawInfrastructure();
    drawEnergyWaves();
    drawBuildings();
    drawNodes();
    animFrame = requestAnimationFrame(animate);
  }

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initCanvas, 150);
  });

  initCanvas();
  requestAnimationFrame(animate);
});
