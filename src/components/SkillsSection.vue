<template>
  <section class="skills">
    <h2>Skills</h2>
    <ul>
      <li><strong>Programming Languages:</strong> C ,C++ ,C# ,PHP ,Java ,Python ,JavaScript Bash ,Pascal ,Risc-V</li>
      <li><strong>Web Technologies:</strong> HTML, CSS, Express, VueJs, Bootstrap </li>
      <li><strong>Databases:</strong> MongoDB, SQL</li>
      <li><strong>Version Control:</strong> Git</li>
      <li><strong>Operating Systems:</strong> Windows, Linux</li>
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
.skills {
  background-color: #1a1a1a;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  text-align: left;
  padding: 30px;
  border-radius: 8px;
}
.skills h2 {
  font-size: 32px;
  color: #6eff6e;
  margin-bottom: 20px;
  border-bottom: 2px solid #6eff6e;
  padding-bottom: 10px;
}
.skills ul {
  list-style-type: none;
  padding: 0;
}
.skills li {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 10px;
}
.skills strong {
  color: #6eff6e;
}
</style>
