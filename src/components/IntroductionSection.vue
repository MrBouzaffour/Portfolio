<template>
  <section>
    <h2>Introduction</h2>
    <p>Hello, I'm Ahmed Bouzaffour, a dedicated Computer Science student with a passion for innovation and problem-solving.</p>
    <p>Throughout my academic journey at the University of Saskatchewan, I've immersed myself in various facets of technology, honing my skills in software development, web applications, and beyond.</p>
    <p>This portfolio showcases my projects, each representing my commitment to creating robust solutions and pushing the boundaries of what's possible in the digital realm.</p>
    <p>Driven by curiosity and a desire to contribute meaningfully to the tech industry, I'm eager to explore new opportunities and collaborate on impactful projects. Let's connect and embark on this journey together!</p>
  </section>
</template>

<script>
export default {
  name: 'IntroductionSection',
  beforeRouteEnter(to, from, next) {
    document.title = 'Introduction - Ahmed Bouzaffour';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Introduction page of Ahmed Bouzaffour');
    next();
  }
}
</script>

<style scoped>
/* Add scoped styles here */
</style>
