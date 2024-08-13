<template>
  <section class="projects">
    <h2>Projects</h2>
    <div class="projects-container">
      <div class="project" v-for="(project, index) in projects" :key="index">
        <h3>{{ project.title }}</h3>
        <img :src="project.image" :alt="`Screenshot of ${project.title}`" />
        <p>{{ project.description }}</p>
        <p><strong>Technologies used:</strong> {{ project.technologies.join(', ') }}</p>
        <a :href="project.github" target="_blank">GitHub Link</a>
        <!-- Uncomment if there is a live demo -->
        <!-- <a :href="project.demo" target="_blank">Live Demo</a> -->
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
          title: 'GitSentry',
          image: require('@/assets/GitSentry.png'),
          description: 'GitSentry is an advanced shell script for streamlining Git operations. It features automated backups, branch validation, and custom pre-push checks, ensuring secure and efficient development workflows.',
          technologies: ['Bash'],
          github: 'https://github.com/MrBouzaffour/GitSentry.git',
          demo: ''
        },
        {
          title: 'Graph-Based Word Prediction System',
          image: require('@/assets/WordGraphPredictor.png'),
          description: 'A system that predicts the next word based on user input using a graph-based approach. It involves data preprocessing, graph construction, and utilizing a command-line interface for interaction.',
          technologies: ['Java'],
          github: 'https://github.com/MrBouzaffour/WordGraphPredictor.git',
          demo: ''
        },
        {
          title: 'Simple Database',
          image: require('@/assets/database_1.png'),
          description: 'A simple database project developed to showcase basic CRUD operations and database management.',
          technologies: ['C'],
          github: 'https://github.com/MrBouzaffour/Simple-Database',
          demo: ''
        },
        {
          title: 'Automated Email Sender',
          //image: require('@/assets/database_1.png'),
          description: 'This Python script allows users to send automated emails with ease. Leveraging smtplib and email libraries, the script supports plain text and HTML emails. Its designed to be secure and flexible, using environment variables to handle email credentials.',
          technologies: ['Python'],
          github: 'https://github.com/MrBouzaffour/Automated-Email-Sender.git',
          demo: ''
        }
      ]
    };
  }
}
</script>

<style scoped>
.projects {
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  text-align: center;
}

.projects h2 {
  font-size: 32px;
  color: #6eff6e;
  margin-bottom: 20px;
  border-bottom: 2px solid #6eff6e;
  padding-bottom: 10px;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.project {
  background-color: #2a2a2a;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 300px;
  margin-bottom: 20px;
  text-align: left;
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

.project p {
  font-size: 16px;
  line-height: 1.4;
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
