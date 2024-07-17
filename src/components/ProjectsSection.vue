<template>
  <section>
    <h2>Projects : </h2>
    <br>
    <br>

    <div class="projects-container">
      <div 
        class="project" 
        v-for="(project, index) in projects" 
        :key="index"
      >
        <h3>{{ project.title }}</h3>
        <img :src="project.image" :alt="`Screenshot of ${project.title}`">
        <p>{{ project.description }}</p>
        <p>Technologies used: {{ project.technologies.join(', ') }}</p>
        <a :href="project.github" target="_blank">GitHub Link</a>
        <a :href="project.demo" target="_blank">Live Demo</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  beforeRouteEnter(to, from, next) {
    document.title = 'Projects - Ahmed Bouzaffour';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Projects page of Ahmed Bouzaffour');
    next();
  },
  data() {
    return {
      projects: [
        {
          title: 'Social Media Web Application (Ongoing)',
          image: require('@/assets/project_screenshot.png'),
          description: 'Currently developing a dynamic and user-friendly Social Media Web Application that allows users to connect, share updates, and engage with content.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Node.js'],
          github: 'https://github.com/MrBouzaffour/Social-Media-Web_Application',
          demo: 'live_demo_link'
        },
        {
          title: 'Another Project',
          image: require('@/assets/project_screenshot.png'),
          description: 'Description of another project.',
          technologies: ['Python', 'Flask', 'PostgreSQL'],
          github: 'https://github.com/MrBouzaffour/Another_Project',
          demo: 'another_live_demo_link'
        },
        // Add more projects here
      ]
    };
  }
}
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.project {
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 300px;
  margin-bottom: 20px;
  text-align: center;
}

.project:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
}

.project img {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.project a {
  display: block;
  margin-top: 10px;
  color: #6eff6e;
  text-decoration: none;
  transition: color 0.3s ease;
}

.project a:hover {
  color: #00ff00;
}
</style>
