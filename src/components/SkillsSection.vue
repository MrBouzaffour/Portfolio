<template>
  <section>
    <h2>Skills</h2>
    <ul>
      <li>Programming Languages: C, Java, Python, JavaScript, Bash</li>
      <li>Web Technologies: HTML, CSS, Express</li>
      <li>Databases: MongoDB, SQL</li>
      <li>Version Control: Git</li>
      <li>Operating Systems: Windows, Linux</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  beforeRouteEnter(to, from, next) {
    document.title = 'Skills - Ahmed Bouzaffour';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Skills page of Ahmed Bouzaffour');
    next();
  }
}
</script>

<style scoped>
/* Add scoped styles here */
</style>
