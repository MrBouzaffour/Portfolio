<template>
  <section class="introduction">
    <h2>About Me</h2>
    <p>I am Ahmed Bouzaffour, currently pursuing a degree in Computer Science at the University of Saskatchewan. My academic journey has been fueled by a fervent passion for innovation and an aptitude for problem-solving.</p>
    <p>My expertise spans software development and web applications, where I continuously strive to enhance my skills and knowledge.</p>
    <p>This portfolio is a testament to my commitment to developing robust, cutting-edge solutions. I am enthusiastic about new opportunities and collaborations that make a meaningful impact in the tech industry.</p>
    <p>Let's connect and explore the possibilities of working together on exciting projects!</p>
  </section>
</template>

<script>
export default {
  name: 'IntroductionSection',
  beforeRouteEnter(to, from, next) {
    document.title = 'About Me - Ahmed Bouzaffour';
    document.querySelector('meta[name="description"]').setAttribute('content', 'About Me page of Ahmed Bouzaffour');
    next();
  }
}
</script>

<style scoped>
.introduction {
  background-color: #1a1a1a;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 40px auto;
  text-align: left;
}
.introduction h2 {
  font-size: 32px;
  color: #6eff6e;
  margin-bottom: 20px;
  border-bottom: 2px solid #6eff6e;
  padding-bottom: 10px;
}
.introduction p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
}
</style>
