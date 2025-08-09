<template>
  <section class="skills">
    <h2 class="section-title">
      <span class="title-text">Skills & Expertise</span>
      <span class="title-underline"></span>
    </h2>
    
    <div class="skills-overview">
      <div class="overview-card">
        <div class="overview-icon">💻</div>
        <h3>Programming Languages</h3>
        <p>Proficient in multiple programming languages with focus on system programming and web development</p>
      </div>
      <div class="overview-card">
        <div class="overview-icon">🌐</div>
        <h3>Web Technologies</h3>
        <p>Full-stack development with modern frameworks and responsive design principles</p>
      </div>
      <div class="overview-card">
        <div class="overview-icon">🛠️</div>
        <h3>Tools & Platforms</h3>
        <p>Experience with development tools, databases, and deployment platforms</p>
      </div>
    </div>
    
    <div class="skills-categories">
      <div class="category-section" v-for="category in skillCategories" :key="category.name">
        <h3 class="category-title">
          <span class="category-icon">{{ category.icon }}</span>
          {{ category.name }}
        </h3>
        
        <div class="skills-grid">
          <div 
            v-for="skill in category.skills" 
            :key="skill.name"
            class="skill-card"
            @mouseenter="skill.isHovered = true"
            @mouseleave="skill.isHovered = false"
          >
            <div class="skill-header">
              <div class="skill-icon">{{ skill.icon }}</div>
              <div class="skill-info">
                <h4 class="skill-name">{{ skill.name }}</h4>
                <div class="skill-level">
                  <div class="level-bars">
                    <span 
                      v-for="n in 5" 
                      :key="n"
                      :class="['level-bar', { filled: n <= skill.level }]"
                    ></span>
                  </div>
                  <span class="level-text">{{ getLevelText(skill.level) }}</span>
                </div>
              </div>
            </div>
            
            <div class="skill-details" v-if="skill.isHovered">
              <p class="skill-description">{{ skill.description }}</p>
              <div class="skill-projects" v-if="skill.projects">
                <span class="projects-label">Projects:</span>
                <span class="projects-count">{{ skill.projects }}</span>
              </div>
            </div>
            
            <div class="skill-progress">
              <div class="progress-bar">
                <div 
                  class="progress-fill" 
                  :style="{ width: `${skill.level * 20}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="skills-summary">
      <div class="summary-card">
        <h3>Technical Summary</h3>
        <div class="summary-stats">
          <div class="stat">
            <span class="stat-number">{{ totalSkills }}</span>
            <span class="stat-label">Skills</span>
          </div>
          <div class="stat">
            <span class="stat-number">{{ averageLevel }}</span>
            <span class="stat-label">Avg Level</span>
          </div>
          <div class="stat">
            <span class="stat-number">{{ categoriesCount }}</span>
            <span class="stat-label">Categories</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skillCategories: [
        {
          name: 'Languages',
          icon: '',
          skills: [
            { name: 'C', icon: '', level: 4, description: 'System programming, embedded systems, memory management', projects: 5, isHovered: false },
            { name: 'C++', icon: '', level: 2, description: 'Object-oriented programming, algorithms, performance', projects: 0, isHovered: false },
            { name: 'Python', icon: '', level: 4, description: 'Scripting, automation, data processing', projects: 4, isHovered: false },
            { name: 'Java', icon: '', level: 3, description: 'Software engineering, backend, OOP', projects: 2, isHovered: false },
            { name: 'Rust', icon: '', level: 2, description: 'Still learning', projects: 2, isHovered: false },
            { name: 'JavaScript', icon: '', level: 3, description: 'Web development, Node.js, React', projects: 2, isHovered: false },
            { name: 'C#', icon: '', level: 3, description: 'Game dev', projects: 2, isHovered: false }
          ]
        },
        {
          name: 'Frameworks & Tools',
          icon: '',
          skills: [
            { name: 'Vue.js', icon: '', level: 3, description: 'Frontend framework, SPA, reactivity', projects: 2, isHovered: false },
            { name: 'React', icon: '', level: 3, description: 'Frontend framework', projects: 2, isHovered: false },
            { name: 'Node.js', icon: '', level: 4, description: 'Backend, REST APIs, npm ecosystem', projects: 2, isHovered: false },
            { name: 'MongoDB', icon: '', level: 4, description: 'NoSQL, document storage, aggregation', projects: 2, isHovered: false },
            { name: 'Git', icon: '', level: 5, description: 'Version control, collaboration, branching', projects: 20, isHovered: false },
            { name: 'Docker', icon: '', level: 3, description: 'Containerization, deployment, microservices', projects: 1, isHovered: false },
            { name: 'Winsock API', icon: '', level: 3, description: 'Network programming, sockets, TCP/IP', projects: 1, isHovered: false }
          ]
        },
        {
          name: 'Embedded Systems',
          icon: '',
          skills: [
            { name: 'RISC-V Architecture', icon: '', level: 3, description: 'Low-level programming, system-level design', projects: 1, isHovered: false },
            { name: 'Memory Management', icon: '', level: 4, description: 'Heap management, allocators, optimization', projects: 2, isHovered: false }
          ]
        },
        {
          name: 'Methodologies',
          icon: '',
          skills: [
            { name: 'Agile', icon: '', level: 4, description: 'Iterative development, collaboration', projects: 2, isHovered: false },
            { name: 'TDD', icon: '', level: 3, description: 'Test-driven development, quality assurance', projects: 1, isHovered: false },
            { name: 'Quality Assurance', icon: '', level: 3, description: 'Testing, reliability, bug tracking', projects: 1, isHovered: false }
          ]
        },
        {
          name: 'Collaboration',
          icon: '',
          skills: [
            { name: 'Teamwork', icon: '', level: 5, description: 'Effective communication, group projects', projects: 5, isHovered: false },
            { name: 'Planning & Prioritization', icon: '', level: 4, description: 'Task management, deadlines, organization', projects: 3, isHovered: false },
            { name: 'Reliability', icon: '', level: 5, description: 'Consistent delivery, responsibility', projects: 5, isHovered: false }
          ]
        }
      ]
    };
  },
  computed: {
    totalSkills() {
      return this.skillCategories.reduce((total, category) => total + category.skills.length, 0);
    },
    averageLevel() {
      const allSkills = this.skillCategories.flatMap(category => category.skills);
      const totalLevel = allSkills.reduce((sum, skill) => sum + skill.level, 0);
      return (totalLevel / allSkills.length).toFixed(1);
    },
    categoriesCount() {
      return this.skillCategories.length;
    }
  },
  methods: {
    getLevelText(level) {
      const levels = {
        1: 'Beginner',
        2: 'Elementary',
        3: 'Intermediate',
        4: 'Advanced',
        5: 'Expert'
      };
      return levels[level] || 'Unknown';
    }
  },
  beforeRouteEnter(to, from, next) {
    document.title = 'Skills - Ahmed Bouzaffour';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Skills page of Ahmed Bouzaffour');
    next();
  }
}
</script>

<style scoped>
.skills {
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

.skills-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.overview-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.overview-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: var(--primary-color);
}

.overview-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.overview-card h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin: 0 0 15px 0;
  font-weight: 600;
}

.overview-card p {
  color: #ffffff;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

.skills-categories {
  margin-bottom: 60px;
}

.category-section {
  margin-bottom: 50px;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 15px;
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: 700;
}

.category-icon {
  font-size: 2.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.skill-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  border-color: var(--primary-color);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.skill-icon {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(110, 255, 110, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(110, 255, 110, 0.3);
}

.skill-info {
  flex: 1;
}

.skill-name {
  color: var(--primary-color);
  font-size: 1.2rem;
  margin: 0 0 8px 0;
  font-weight: 600;
}

.skill-level {
  display: flex;
  align-items: center;
  gap: 10px;
}

.level-bars {
  display: flex;
  gap: 2px;
}

.level-bar {
  width: 8px;
  height: 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.level-bar.filled {
  background: var(--primary-color);
}

.level-text {
  font-size: 0.85rem;
  color: #ffffff;
  opacity: 0.8;
}

.skill-details {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.skill-description {
  color: #ffffff;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0 0 10px 0;
  opacity: 0.9;
}

.skill-projects {
  display: flex;
  align-items: center;
  gap: 8px;
}

.projects-label {
  font-size: 0.85rem;
  color: #ffffff;
  opacity: 0.7;
}

.projects-count {
  background: var(--primary-color);
  color: #000;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
}

.skill-progress {
  margin-top: 15px;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 3px;
  transition: width 1s ease;
  animation: progressFill 1.5s ease-out;
}

@keyframes progressFill {
  from { width: 0; }
}

.skills-summary {
  margin-top: 60px;
}

.summary-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  backdrop-filter: blur(10px);
}

.summary-card h3 {
  color: var(--primary-color);
  font-size: 2rem;
  margin: 0 0 30px 0;
  font-weight: 700;
}

.summary-stats {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  color: var(--primary-color);
  font-family: 'Orbitron', monospace;
}

.stat-label {
  font-size: 1rem;
  color: #ffffff;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .title-text {
    font-size: 2rem;
  }
  
  .skills-overview {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .category-title {
    font-size: 1.5rem;
  }
  
  .summary-stats {
    flex-direction: column;
    gap: 20px;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
}

/* Light theme overrides */
:global(.light-theme) .overview-card,
:global(.light-theme) .skill-card,
:global(.light-theme) .summary-card {
  background: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.1);
}

:global(.light-theme) .overview-card p,
:global(.light-theme) .skill-description,
:global(.light-theme) .level-text,
:global(.light-theme) .projects-label,
:global(.light-theme) .stat-label {
  color: var(--text-light);
}

.light-theme :deep(.skill-description),
.light-theme :deep(.skill-details),
.light-theme :deep(.skills-categories) p {
  color: var(--text-light) !important;
}
</style>
