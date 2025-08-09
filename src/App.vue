<template>
  <div id="app" :class="{ 'light-theme': isLightTheme }">
    <!-- Loading Screen -->
    <LoadingScreen 
      :is-loading="isLoading" 
      @loading-complete="handleLoadingComplete"
    />
    
    <!-- Particle Background -->
    <div class="particles-container">
      <div v-for="n in 50" :key="n" class="particle" :style="getParticleStyle()"></div>
    </div>
    
    <div class="header-container">
      <header>
        <h1 class="glitch-text" data-text="Ahmed Bouzaffour">Ahmed Bouzaffour</h1>
        <div class="header-controls">
          <button class="theme-toggle" @click="toggleTheme" :title="isLightTheme ? 'Switch to Dark' : 'Switch to Light'">
            <span v-if="isLightTheme">🌙</span>
            <span v-else>☀️</span>
          </button>
          <button class="hamburger" aria-label="Toggle menu" @click="toggleMenu">&#9776;</button>
        </div>
      </header>
    </div>
    
    <nav :class="{ 'is-visible': menuVisible }" class="glass-nav">
      <ul class="nav-links">
        <li><router-link to="/introduction" class="nav-link">Introduction</router-link></li>
        <li><router-link to="/skills" class="nav-link">Skills</router-link></li>
        <li><router-link to="/education" class="nav-link">Education</router-link></li>
        <li><router-link to="/projects" class="nav-link">Projects</router-link></li>
        <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
      </ul>
    </nav>
    
    <main class="content-container glass-container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    
    <footer class="glass-footer">
      <ul class="contact-info">
        <li><a href="mailto:ahmedbouzaffour2002@gmail.com" class="contact-link">
          <span class="icon">📧</span> ahmedbouzaffour2002@gmail.com
        </a></li>
        <li><a href="https://www.linkedin.com/in/ahmed-bouzaffour-79b78b270" target="_blank" class="contact-link">
          <span class="icon">💼</span> LinkedIn
        </a></li>
        <li><a href="https://github.com/MrBouzaffour" target="_blank" class="contact-link">
          <span class="icon">🐙</span> GitHub
        </a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
import LoadingScreen from '@/components/LoadingScreen.vue';
export default {
  name: 'App',
  components: {
    LoadingScreen
  },
  data() {
    return {
      menuVisible: false,
      isLightTheme: false,
      isLoading: true
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    toggleTheme() {
      this.isLightTheme = !this.isLightTheme;
      localStorage.setItem('theme', this.isLightTheme ? 'light' : 'dark');
    },
    getParticleStyle() {
      const delay = Math.random() * 20;
      const duration = 15 + Math.random() * 10;
      const size = 2 + Math.random() * 3;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      return {
        '--delay': `${delay}s`,
        '--duration': `${duration}s`,
        '--size': `${size}px`,
        '--x': `${x}%`,
        '--y': `${y}%`
      };
    },
    handleLoadingComplete() {
      this.isLoading = false;
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isLightTheme = savedTheme === 'light';
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto:wght@300;400;500;700&display=swap');

:root {
  --primary-color: #6eff6e;
  --secondary-color: #00ff00;
  --bg-dark: #0a0a0a;
  --bg-light: #f8f9fa;
  --text-dark: #ffffff;
  --text-light: #222;
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, var(--bg-dark) 0%, #1a1a1a 100%);
  color: var(--text-dark);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

/* Particle Background */
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: var(--primary-color);
  border-radius: 50%;
  opacity: 0.6;
  animation: float var(--duration) infinite ease-in-out;
  animation-delay: var(--delay);
  left: var(--x);
  top: var(--y);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 1;
  }
}

/* Light Theme */
.light-theme {
  background: linear-gradient(135deg, var(--bg-light) 0%, #e9ecef 100%);
  color: var(--text-light);
}

.light-theme,
.light-theme .glass-container,
.light-theme .glass-nav,
.light-theme .glass-footer,
.light-theme .section-title,
.light-theme .title-text,
.light-theme .category-title,
.light-theme .stat-label,
.light-theme .edu-degree,
.light-theme .edu-meta,
.light-theme .profile-info,
.light-theme .content-card p,
.light-theme .loading-text {
  color: var(--text-light) !important;
}

.light-theme .profile-card,
.light-theme .overview-card,
.light-theme .education-card,
.light-theme .certificate-card,
.light-theme .content-card {
  background: #fff !important;
  color: var(--text-light) !important;
}

.light-theme .title-underline,
.light-theme .category-title,
.light-theme .edu-school {
  color: var(--primary-color) !important;
}

.light-theme .nav-link {
  color: var(--primary-color) !important;
}

.light-theme .nav-link:hover {
  color: var(--secondary-color) !important;
}

.light-theme .particle {
  background: #007bff;
}

/* Header */
.header-container {
  display: flex;
  justify-content: center;
  width: 100%;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--glass-border);
  position: sticky;
  top: 0;
  z-index: 100;
}

header {
  color: var(--text-dark);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Glitch Text Effect */
.glitch-text {
  margin: 10px 0;
  font-size: 28px;
  font-family: 'Orbitron', monospace;
  font-weight: 900;
  color: var(--primary-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;
  animation: glitch 3s infinite;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  animation: glitch-1 2s infinite;
  color: #ff0000;
  z-index: -1;
}

.glitch-text::after {
  animation: glitch-2 2s infinite;
  color: #00ffff;
  z-index: -2;
}

@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(2px, -2px); }
  40% { transform: translate(2px, 2px); }
  60% { transform: translate(-2px, -2px); }
  80% { transform: translate(-2px, 2px); }
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 15px;
}

.theme-toggle {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--primary-color);
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.theme-toggle:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow);
}

.hamburger {
  display: none;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--primary-color);
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.hamburger:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow);
}

/* Navigation */
.glass-nav {
  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  margin: 20px auto;
  padding: 20px;
  width: 90%;
  max-width: 1000px;
  box-shadow: var(--shadow);
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.nav-links li {
  font-size: 16px;
  margin: 5px 0;
}

.nav-link {
  color: var(--primary-color);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 10px 20px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  font-weight: 500;
}

/* Modern underline effect */
.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 6px;
  transform: translateX(-50%) scaleX(0);
  width: 60%;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 2px;
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
  pointer-events: none;
  z-index: 1;
}

.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
  transform: translateX(-50%) scaleX(1);
}

.nav-link:hover {
  color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(110, 255, 110, 0.15);
}

/* Content Container */
.glass-container {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 40px;
  margin: 20px auto;
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 60px;
  box-shadow: var(--shadow);
  min-height: 70vh;
}

/* Footer */
.glass-footer {
  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  border: 1px solid var(--glass-border);
  color: var(--text-dark);
  text-align: center;
  padding: 20px;
  border-radius: 16px;
  margin: 20px auto;
  width: 90%;
  max-width: 1000px;
  box-shadow: var(--shadow);
}

.contact-info {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.contact-info li {
  margin: 5px 0;
  font-size: 14px;
  font-family: 'Courier New', monospace;
}

.contact-link {
  color: var(--primary-color);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(10px);
}

.contact-link:hover {
  color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(110, 255, 110, 0.3);
}

.icon {
  font-size: 16px;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  
  nav {
    display: none;
  }
  
  nav.is-visible {
    display: block;
  }
  
  .nav-links {
    flex-direction: column;
    align-items: center;
  }
  
  .nav-links li {
    margin: 10px 0;
  }
  
  .glitch-text {
    font-size: 20px;
  }
  
  .contact-info {
    flex-direction: column;
    align-items: center;
  }
  
  .glass-container {
    padding: 20px;
    margin: 10px auto;
  }
}

/* Light theme overrides */
.light-theme .glass-nav,
.light-theme .glass-container,
.light-theme .glass-footer {
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(0, 0, 0, 0.1);
}

.light-theme .contact-link {
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(0, 0, 0, 0.1);
  color: #007bff;
}

.light-theme .contact-link:hover {
  color: #0056b3;
}
</style>
