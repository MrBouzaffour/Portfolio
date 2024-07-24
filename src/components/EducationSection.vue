<template>
  <section class="education">
    <h2>Education</h2>
    <div class="education-details">
      <p><strong>University of Saskatchewan</strong></p>
      <p>Degree: Bachelor of Science in Computer Science</p>
    </div>
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
.education {
  background-color: #1a1a1a;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  text-align: left;
  padding: 30px;
  border-radius: 8px;
}
.education h2 {
  font-size: 32px;
  color: #6eff6e;
  margin-bottom: 20px;
  border-bottom: 2px solid #6eff6e;
  padding-bottom: 10px;
}
.education-details p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 10px;
}
.education-details strong {
  color: #6eff6e;
}
</style>
