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
      <!-- <a :href="project.demo" target="_blank">Live Demo</a>-->
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
          title: 'Graph-Based Word Prediction System',
          image:  require('@/assets/WordGraphPredictor.png'),
          description: 'A system that predicts the next word based on user input using a graph-based approach. It involves data preprocessing, graph construction, and utilizing a command-line interface for interaction.',
          technologies: ['Java'],
          github: 'https://github.com/MrBouzaffour/WordGraphPredictor.git', // Replace with your actual GitHub repository URL
          demo: '' // If there is a live demo, provide the URL
        },
        {
          title: 'Simple Database',
          image: require('@/assets/database_1.png'),
          description: 'A simple database project developed to showcase basic CRUD operations and database management.',
          technologies: ['C'],
          github: 'https://github.com/MrBouzaffour/Simple-Database',
          demo: ''
        }
      ]
    };
  }
}
</script>
<style scoped>
section {
  margin-bottom: 50px; /* Adjust this value based on the desired space */
}

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
