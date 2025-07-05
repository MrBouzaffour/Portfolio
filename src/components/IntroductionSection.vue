<template>
  <section class="introduction">
    <div class="hero-section">
      <h2 class="section-title">
        <span class="title-text">About Me</span>
        <span class="title-underline"></span>
      </h2>
      
      <div class="typing-container">
        <div class="typing-text">{{ currentTypingText }}</div>
        <span class="cursor">|</span>
      </div>
      
      <div class="profile-card">
        <div class="profile-image">
          <div class="image-placeholder">
            <span class="initials">AB</span>
          </div>
        </div>
        
        <div class="profile-info">
          <h3 class="name">Ahmed Bouzaffour</h3>
          <p class="title">Computer Science Student</p>
          <p class="location">📍 University of Saskatchewan</p>
        </div>
      </div>
    </div>
    
    <div class="content-sections">
      <div class="content-card" v-for="(section, index) in contentSections" :key="index">
        <div class="card-icon">{{ section.icon }}</div>
        <h4>{{ section.title }}</h4>
        <p>{{ section.content }}</p>
      </div>
    </div>
    
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
      contentSections: [
        {
          icon: '📝',
          title: 'Summary',
          content: 'Dedicated Computer Science student with a strong foundation in C, C++, Python, and software development. Passionate about learning and contributing to innovative projects in fitness and technology. Excited to apply problem-solving skills while gaining valuable experience and learning from Garmin\'s expert team as a Software Engineer Intern.'
        },
        {
          icon: '💡',
          title: 'Client-Server Application (C, Winsock API)',
          content: 'Developed a secure TCP client-server application featuring user login and registration, password hashing, and command handling. Utilized network programming and secure authentication for system-level communication.'
        },
        {
          icon: '⚙️',
          title: 'Custom Memory Allocator (C)',
          content: 'Designed a memory allocator for heap management and dynamic memory allocation, demonstrating strong low-level programming skills. Optimized memory performance for embedded systems.'
        },
        {
          icon: '🌐',
          title: 'BeSocial (Vue.js, Node.js, MongoDB)',
          content: 'Built a full-stack social media platform with real-time messaging and secure user authentication. Employed modern frameworks, showcasing full-stack development capabilities.'
        },
        {
          icon: '🏆',
          title: 'Challenges & Competitions',
          content: 'Google Foobar Challenge: Invited to participate in the exclusive Google Foobar coding challenge, solving complex algorithmic problems. Blockchain Project: Worked in a team during a hackathon to develop a blockchain-based project, collaborating on key features like smart contracts and decentralized systems.'
        }
      ],
      typingTexts: [
        "Hello, I'm Ahmed Bouzaffour",
        "Computer Science Student",
        "Passionate Developer",
        "Problem Solver",
        "Innovation Enthusiast"
      ],
      currentTypingText: '',
      typingTimeout: null,
      observer: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.startTyping();
      this.animateOnScroll();
    });
  },
  beforeUnmount() {
    // Clean up any ongoing animations or observers
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    startTyping() {
      let currentTextIndex = 0;
      let currentCharIndex = 0;
      let isDeleting = false;
      
      const typeText = () => {
        const currentText = this.typingTexts[currentTextIndex];
        
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
          if (currentCharIndex > currentText.length) {
            this.typingTimeout = setTimeout(() => {
              isDeleting = true;
              typeText();
            }, 2000);
            return;
          }
        }
        
        this.currentTypingText = currentText.substring(0, currentCharIndex);
        
        const speed = isDeleting ? 50 : 100;
        this.typingTimeout = setTimeout(typeText, speed);
      };
      
      typeText();
    },
    animateOnScroll() {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, { threshold: 0.1 });
      
      this.$nextTick(() => {
        const cards = this.$el.querySelectorAll('.content-card');
        cards.forEach(card => {
          this.observer.observe(card);
        });
      });
    }
  }
}
</script>

<style scoped>
.introduction {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.hero-section {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  position: relative;
  margin-bottom: 40px;
}

.title-text {
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  margin-bottom: 10px;
}

.title-underline {
  display: block;
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  margin: 0 auto;
  border-radius: 2px;
  animation: slideIn 1s ease-out;
}

@keyframes slideIn {
  from { width: 0; }
  to { width: 100px; }
}

.typing-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  min-height: 60px;
}

.typing-text {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-right: 5px;
}

.cursor {
  font-size: 1.5rem;
  color: var(--primary-color);
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.profile-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 40px 0;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.profile-image {
  flex-shrink: 0;
}

.image-placeholder {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(110, 255, 110, 0.3);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.initials {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  font-family: 'Orbitron', monospace;
}

.profile-info {
  text-align: left;
}

.name {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0 0 10px 0;
}

.title {
  font-size: 1.2rem;
  color: #ffffff;
  margin: 0 0 5px 0;
  opacity: 0.9;
}

.location {
  font-size: 1rem;
  color: #ffffff;
  margin: 0;
  opacity: 0.7;
}

.content-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 60px 0;
}

.content-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.content-card.animate-in {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.6s ease;
}

.content-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: var(--primary-color);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.content-card h4 {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin: 0 0 15px 0;
  font-weight: 600;
}

.content-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  margin: 0;
  opacity: 0.9;
}

.cta-section {
  text-align: center;
  margin-top: 60px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.cta-text {
  font-size: 1.3rem;
  color: #ffffff;
  margin: 0 0 20px 0;
  opacity: 0.9;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: #000;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(110, 255, 110, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(110, 255, 110, 0.4);
}

.arrow {
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow {
  transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .title-text {
    font-size: 2rem;
  }
  
  .typing-text {
    font-size: 1.2rem;
  }
  
  .profile-card {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  .profile-info {
    text-align: center;
  }
  
  .content-sections {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .content-card {
    padding: 20px;
  }
}

/* Light theme overrides */
:global(.light-theme) .profile-card,
:global(.light-theme) .content-card,
:global(.light-theme) .cta-section {
  background: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.1);
}

:global(.light-theme) .content-card p,
:global(.light-theme) .cta-text {
  color: var(--text-light);
}

:global(.light-theme) .title,
:global(.light-theme) .location {
  color: var(--text-light);
}
</style>
