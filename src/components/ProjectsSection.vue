<template>
  <section class="projects">
    <h2 class="section-title">
      <span class="title-text">Projects</span>
      <span class="title-underline"></span>
    </h2>
    
    <div class="filter-container">
      <button 
        v-for="filter in filters" 
        :key="filter"
        @click="setFilter(filter)"
        :class="['filter-btn', { active: currentFilter === filter }]"
      >
        {{ filter }}
      </button>
    </div>
    
    <div class="projects-container">
      <div 
        v-for="(project, index) in filteredProjects" 
        :key="project.title" 
        class="project-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @mousemove="handleMouseMove"
>

        <div class="card-inner">
          <div class="project-image">
            <img :src="project.image" :alt="`Screenshot of ${project.title}`" />
            <div class="image-overlay">
              <div class="overlay-content">
                <span class="view-project">View Project</span>
              </div>
            </div>
          </div>
          
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            
            <div class="tech-stack">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
            
            <div class="project-links">
              <a 
                :href="project.github" 
                target="_blank" 
                class="project-link github-link"
                @click.stop
              >
                <span class="link-icon">🐙</span>
                <span>GitHub</span>
              </a>
              <a 
                v-if="project.demo" 
                :href="project.demo" 
                target="_blank" 
                class="project-link demo-link"
                @click.stop
              >
                <span class="link-icon">🚀</span>
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
        
        <div class="card-glow"></div>
      </div>
    </div>
    
    <div v-if="filteredProjects.length === 0" class="no-projects">
      <div class="no-projects-icon">🔍</div>
      <p>No projects found for "{{ currentFilter }}"</p>
      <button @click="setFilter('All')" class="reset-filter">Show All Projects</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      currentFilter: 'All',
      projects: [
        {
          title: 'Trading Journal (Full-Stack)',
          image: require('@/assets/trading_journal.png'),
          description:
            'A full-stack Trading Journal that helps traders log trades, analyze performance, and improve decision-making. It offers trade templates, reminders, goal tracking, a rich analytics dashboard, and an AI assistant experience, built with React (Vite) and a secure Express API backed by CouchDB, all dockerized for easy deployment.',
          technologies: ['React', 'Vite', 'Express', 'Node.js', 'CouchDB', 'Docker', 'JWT', 'Charting', 'AI'],
          category: ['Web Development', 'Automation','Full Stack'], 
          github: 'https://github.com/MrBouzaffour/trading-journal.git', 
          demo: '' },
        {
          title: 'Generic Hash Table (C)',
          image: require('@/assets/no-image-available.png'),
          description:
            'A generic hash table in C supporting int and string keys. Includes separate hash functions, insert/search, table printing, and cleanup. Resize/delete are stubbed for future work.',
          technologies: ['C', 'Data Structures', 'Hash Tables'],
          category: ['Data Structures', 'System Programming'],
          github: 'https://github.com/MrBouzaffour/HashTable-in-C.git', 
          demo: ''
},
      {
        title: 'Bouncy Ball (SDL2)',
        image: require('@/assets/bouncy_ball.png'),
        description:
          'C/SDL2 simulation of a bouncing ball with gravity, damping, wall collisions, and a fading trajectory trail. Uses a fixed-size window surface and per-pixel drawing.',
        technologies: ['C', 'SDL2', 'Graphics', 'Physics'],
        category: ['System Programming', 'Graphics'],
        github: '',
        demo: ''
        },
      
       {
        title: 'Mini Heap Allocator (C)',
        image: require('@/assets/no-image-available.png'), 
        description:
          'A simple first-fit heap allocator in C with a fixed-size heap, free/allocated chunk lists, insert/remove, and a custom bsearch-based lookup. Supports alloc/free and dumps chunk state for debugging.',
        technologies: ['C', 'Memory Management', 'Data Structures', 'Systems'],
        category: ['System Programming', 'Data Structures'],
        github: 'https://github.com/MrBouzaffour/Malloc-in-C.git',
        demo: ''
       },
 
      {
        title: 'Portfolio v1.0',
        image: require('@/assets/portfolio_v1.png'), 
        description:
          'First release of my personal portfolio built with Vue.',
        technologies: ['Vue', 'JavaScript', 'CSS'],
        category: ['Web Development', 'Frontend'],
        github: 'https://github.com/MrBouzaffour/Portfolio.git',
        demo: ''
      },
      {
        title: 'Mini Library CLI (C)',
        image: require('@/assets/no-image-available.png'), 
        description:
          'An interactive C CLI to manage libraries and books. Supports commands like ".exit", "show", and "use <lib>". Implements custom input buffering, parsing, and in-memory data structures (Libraries, Library, Book, Author) with enums for command handling.',
        technologies: ['C', 'CLI', 'Parsing', 'Memory Management'],
        category: ['System Programming', 'Data Structures'],
        github: 'https://github.com/MrBouzaffour/LibraryManager.git', 
        demo: ''
      },
        {
          title: 'GitSentry',
          image: require('@/assets/GitSentry.png'),
          description: 'GitSentry is an advanced shell script for streamlining Git operations. It features automated backups, branch validation, and custom pre-push checks, ensuring secure and efficient development workflows.',
          technologies: ['Bash', 'Shell Scripting', 'Git'],
          category: ['Automation'],
          github: 'https://github.com/MrBouzaffour/GitSentry.git',
          demo: ''
        },
        {
          title: 'Graph-Based Word Prediction System',
          image: require('@/assets/WordGraphPredictor.png'),
          description: 'A system that predicts the next word based on user input using a graph-based approach. It involves data preprocessing, graph construction, and utilizing a command-line interface for interaction.',
          technologies: ['Java', 'Data Structures', 'Algorithms'],
          category: ['Data Structures'],
          github: 'https://github.com/MrBouzaffour/WordGraphPredictor.git',
          demo: ''
        },
        {
          title: 'Simple Database',
          image: require('@/assets/database_1.png'),
          description: 'A simple database project developed to showcase basic CRUD operations and database management.',
          technologies: ['C', 'Database Design', 'System Programming'],
          category: ['System Programming', 'Data Structures'],
          github: 'https://github.com/MrBouzaffour/Simple-Database',
          demo: ''
        },
        {
          title: 'Automated Email Sender',
          image: require('@/assets/no-image-available.png'),
          description: 'This Python script allows users to send automated emails with ease. Leveraging smtplib and email libraries, the script supports plain text and HTML emails. Its designed to be secure and flexible, using environment variables to handle email credentials.',
          technologies: ['Python', 'SMTP', 'Automation'],
          category: ['Automation'],
          github: 'https://github.com/MrBouzaffour/Automated-Email-Sender.git',
          demo: ''
        }
      ]
    };
  },
computed: {
  filters() {
    const set = new Set();
    this.projects.forEach(p => (p.category || p.categories || []).forEach(c => set.add(c)));
    return ['All', ...Array.from(set)];
  },
  filteredProjects() {
    if (this.currentFilter === 'All') return this.projects;
    const getCats = p => p.category || p.categories || [];
    return this.projects.filter(p => getCats(p).includes(this.currentFilter));
  }
},

  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
    },
    handleMouseEnter(event) {
      const card = event.currentTarget;
      card.style.transform = 'translateY(-10px) rotateX(5deg) rotateY(5deg)';
    },
    handleMouseLeave(event) {
      const card = event.currentTarget;
      card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    },
    handleMouseMove(event) {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  },
  beforeRouteEnter(to, from, next) {
    document.title = 'Projects - Ahmed Bouzaffour';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Projects page of Ahmed Bouzaffour');
    next();
  }
}
</script>

<style scoped>
.projects {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section-title {
  text-align: center;
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

.filter-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 40px;
}

.filter-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--primary-color);
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-weight: 500;
}

.filter-btn:hover {
  background: rgba(110, 255, 110, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(110, 255, 110, 0.3);
}

.filter-btn.active {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: #000;
  box-shadow: 0 5px 15px rgba(110, 255, 110, 0.4);
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.project-card {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

.project-card:nth-child(1) { animation-delay: 0.1s; }
.project-card:nth-child(2) { animation-delay: 0.2s; }
.project-card:nth-child(3) { animation-delay: 0.3s; }
.project-card:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-inner {
  position: relative;
  z-index: 2;
}

.project-image {
  position: relative;
  overflow: hidden;
  height: 200px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.overlay-content {
  text-align: center;
}

.view-project {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1.1rem;
}

.project-content {
  padding: 25px;
}

.project-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin: 0 0 15px 0;
  font-weight: 700;
}

.project-description {
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 20px;
  opacity: 0.9;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-tag {
  background: rgba(110, 255, 110, 0.2);
  color: var(--primary-color);
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(110, 255, 110, 0.3);
}

.project-links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.github-link {
  background: rgba(255, 255, 255, 0.1);
  color: var(--primary-color);
}

.github-link:hover {
  background: rgba(110, 255, 110, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(110, 255, 110, 0.3);
}

.demo-link {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: #000;
}

.demo-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(110, 255, 110, 0.4);
}

.link-icon {
  font-size: 1.1rem;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(110, 255, 110, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.project-card:hover .card-glow {
  opacity: 1;
}

.no-projects {
  text-align: center;
  padding: 60px 20px;
  color: #ffffff;
}

.no-projects-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.5;
}

.no-projects p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  opacity: 0.8;
}

.reset-filter {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: #000;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.reset-filter:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(110, 255, 110, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .title-text {
    font-size: 2rem;
  }
  
  .projects-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .project-card {
    margin-bottom: 20px;
  }
  
  .filter-container {
    gap: 10px;
  }
  
  .filter-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
  
  .project-links {
    flex-direction: column;
  }
  
  .project-link {
    justify-content: center;
  }
}

/* Light theme overrides */
:global(.light-theme) .project-card {
  background: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.1);
}

:global(.light-theme) .project-description {
  color: var(--text-light);
}

:global(.light-theme) .filter-btn {
  background: rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.2);
}

:global(.light-theme) .no-projects {
  color: var(--text-light);
}

.light-theme :deep(.project-description),
.light-theme :deep(.project-details),
.light-theme :deep(.project-card) p {
  color: var(--text-light) !important;
}
</style>
