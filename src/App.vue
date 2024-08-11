<template>
  <div id="app">
    <div class="header-container">
      <header>
        <h1>Ahmed Bouzaffour</h1>
        <button class="hamburger" aria-label="Toggle menu" @click="toggleMenu">&#9776;</button>
      </header>
    </div>
    <nav :class="{ 'is-visible': menuVisible }">
      <ul class="nav-links">
        <li><router-link to="/introduction">Introduction</router-link></li>
        <li><router-link to="/skills">Skills</router-link></li>
        <li><router-link to="/education">Education</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <main class="content-container">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
    <footer>
      <ul class="contact-info">
        <li>Email: <a href="mailto:ahmedbouzaffour2002@gmail.com">ahmedbouzaffour2002@gmail.com</a></li>
        <li><a href="https://www.linkedin.com/in/ahmed-bouzaffour-6610052a5" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
        <li><a href="https://github.com/MrBouzaffour" target="_blank"><i class="fab fa-github"></i> GitHub</a></li>
      </ul>
    </footer>
  </div>
</template>




<script>
export default {
  name: 'App',
  data() {
    return {
      menuVisible: false 
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  }
}
</script>




<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  scroll-behavior: smooth;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header-container {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #1a1a1a;
  border-bottom: 2px solid #444;
}
header {
  color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
}
header h1 {
  margin: 10px 0;
  font-size: 24px;
  color: #6eff6e;
}
.hamburger {
  display: none;
  background: none;
  border: none;
  color: #6eff6e;
  font-size: 30px;
  cursor: pointer;
}
nav {
  background-color: #1a1a1a;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  margin: 20px auto;
  padding: 15px;
  width: 80%;
  max-width: 800px;
}
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
}
.nav-links li {
  font-size: 16px;
}
.nav-links a {
  color: #6eff6e;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}
.nav-links a:hover {
  color: #00ff00;
}
.content-container {
  background-color: #1a1a1a;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 30px;
  margin: 20px auto;
  width: 80%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 60px;
}
section {
  width: 100%;
  color: #6eff6e;
}
h2 {
  font-size: 24px;
  color: #6eff6e;
  margin-bottom: 15px;
}
ul.contact-info {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}
ul.contact-info li {
  margin: 5px 0;
  font-size: 14px;
  font-family: 'Courier New', monospace;
}
ul.contact-info a {
  color: #6eff6e;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}
ul.contact-info a:hover {
  color: #00ff00;
}
footer {
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 0 0 8px 8px;
  margin-top: 20px;
  width: 100%;
  font-size: 12px;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
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
  header h1 {
    font-size: 20px;
  }
}
</style>
