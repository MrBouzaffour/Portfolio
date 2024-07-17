<template>
  <section>
    <h2>Education</h2>
    <p>University of Saskatchewan</p>
    <p>Degree: Bachelor of Science in Computer Science</p>
  </section>
</template>

<script>
export default {
  name: 'EducationSection',
  beforeRouteEnter(to, from, next) {
    document.title = 'Education - Ahmed Bouzaffour';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Education page of Ahmed Bouzaffour');
    next();
  }
}
</script>

<style scoped>
/* Add scoped styles here */
</style>
