<template>
  <section class="introduction">
    <div class="hero-section">
      <h2 class="section-title">
        <span class="title-text">About Me</span>
        <span class="title-underline"></span>
      </h2>

      <div class="typing-container" aria-live="polite">
        <div class="typing-text">{{ currentTypingText }}</div>
        <span class="cursor" aria-hidden="true">|</span>
      </div>

      <div class="profile-wrap">
        <div class="profile-card">
          <div class="profile-image">
            <div class="image-placeholder" aria-hidden="true">
              <span class="initials">AB</span>
            </div>
          </div>

          <div class="profile-info">
            <h3 class="name">Ahmed Bouzaffour</h3>
            <p class="title">Computer Science Student</p>
            <p class="location">📍 University of Saskatchewan</p>

            <!-- Compact quick facts (organized, no long descriptions) -->
            <ul class="quick-facts" role="list">
              <li class="fact-chip">C/C++ · Python · Vue/Node</li>
              <li class="fact-chip">Systems & Full-stack</li>
              <li class="fact-chip">Open to collabs/internships</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="cta-section">
      <p class="cta-text">Ready to collaborate on exciting projects?</p>
      <router-link to="/contact" class="cta-button">
        <span>Let's Connect</span>
        <span class="arrow">→</span>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroductionSection',
  data() {
    return {
      typingTexts: [
        "Hello, I'm Ahmed Bouzaffour",
        "Computer Science Student",
        "Passionate Developer",
        "Problem Solver",
        "Innovation Enthusiast"
      ],
      currentTypingText: '',
      typingTimeout: null
    };
  },
  mounted() {
    this.startTyping();
  },
  beforeUnmount() {
    if (this.typingTimeout) clearTimeout(this.typingTimeout);
  },
  methods: {
    startTyping() {
      let currentTextIndex = 0;
      let currentCharIndex = 0;
      let isDeleting = false;

      const typeText = () => {
        const current = this.typingTexts[currentTextIndex];

        if (isDeleting) {
          currentCharIndex--;
          if (currentCharIndex < 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % this.typingTexts.length;
            this.typingTimeout = setTimeout(typeText, 500);
            return;
          }
        } else {
          currentCharIndex++;
          if (currentCharIndex > current.length) {
            this.typingTimeout = setTimeout(() => {
              isDeleting = true;
              typeText();
            }, 1600);
            return;
          }
        }

        this.currentTypingText = current.substring(0, currentCharIndex);
        this.typingTimeout = setTimeout(typeText, isDeleting ? 45 : 90);
      };

      typeText();
    }
  }
};
</script>

<style scoped>
.introduction {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

/* Heading */
.hero-section { text-align: center; margin-bottom: 56px; }
.section-title { position: relative; margin-bottom: 28px; }
.title-text {
  font-size: 2.6rem; font-weight: 900;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  display: block; margin-bottom: 10px;
}
.title-underline {
  width: 90px; height: 4px; margin: 0 auto; border-radius: 2px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  animation: slideIn 0.9s ease-out;
}
@keyframes slideIn { from { width: 0; } to { width: 90px; } }

/* Typing */
.typing-container {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 6px; margin: 20px 0 10px; min-height: 44px;
}
.typing-text { font-size: 1.3rem; font-weight: 600; color: var(--primary-color); }
.cursor { font-size: 1.3rem; color: var(--primary-color); animation: blink 1s infinite; }
@keyframes blink { 0%,50%{opacity:1} 51%,100%{opacity:0} }

/* Profile */
.profile-wrap { display: grid; place-items: center; }
.profile-card {
  width: 100%;
  display: grid; grid-template-columns: 120px 1fr; gap: 24px;
  align-items: center;
  margin: 28px 0 0;
  padding: 24px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 18px; backdrop-filter: blur(10px);
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}
.profile-card:hover { transform: translateY(-3px); border-color: var(--primary-color); box-shadow: 0 16px 32px rgba(0,0,0,.28); }

.profile-image { justify-self: center; }
.image-placeholder {
  width: 120px; height: 120px; border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  display: grid; place-items: center;
  box-shadow: 0 10px 30px rgba(110,255,110,.3); animation: pulse 2s infinite;
}
@keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
.initials { font-size: 3rem; font-weight: 900; color: #fff; font-family: 'Orbitron', monospace; }

.profile-info { text-align: left; }
.name { font-size: 1.8rem; font-weight: 800; color: var(--primary-color); margin: 0 0 6px; }
.title { font-size: 1.05rem; color: #fff; opacity: .9; margin: 0 0 2px; }
.location { font-size: .95rem; color: #fff; opacity: .75; margin: 0; }

/* Quick facts */
.quick-facts {
  display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0 0; padding: 0; list-style: none;
}
.fact-chip {
  border: 1px solid rgba(255,255,255,.18);
  background: rgba(255,255,255,.06);
  color: var(--text, #e5e7eb);
  padding: 4px 10px; border-radius: 999px; font-size: .85rem; font-weight: 700;
}

/* CTA */
.cta-section {
  text-align: center; margin-top: 48px; padding: 32px;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 18px; backdrop-filter: blur(10px);
}
.cta-text { font-size: 1.15rem; color: #fff; opacity: .9; margin: 0 0 16px; }
.cta-button {
  display: inline-flex; align-items: center; gap: 10px;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: #000; text-decoration: none; padding: 12px 22px; border-radius: 28px;
  font-weight: 700; font-size: 1.05rem;
  transition: transform .2s ease, box-shadow .2s ease;
  box-shadow: 0 10px 30px rgba(110,255,110,.3);
}
.cta-button:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(110,255,110,.4); }
.arrow { transition: transform .2s ease; }
.cta-button:hover .arrow { transform: translateX(4px); }

/* Responsive */
@media (max-width: 768px) {
  .title-text { font-size: 2.2rem; }
  .typing-text, .cursor { font-size: 1.15rem; }
  .profile-card { grid-template-columns: 1fr; text-align: center; }
  .profile-info { text-align: center; }
}

/* Light theme */
:global(.light-theme) .profile-card,
:global(.light-theme) .cta-section {
  background: rgba(0,0,0,0.05);
  border-color: rgba(0,0,0,0.1);
}
:global(.light-theme) .title,
:global(.light-theme) .location,
:global(.light-theme) .cta-text,
:global(.light-theme) .fact-chip {
  color: var(--text-light);
}
</style>
