<template>
  <section class="education glass-container">
    <h2 class="section-title">
      <span class="title-text">Education</span>
      <span class="title-underline"></span>
    </h2>
    <div class="education-details">
      <div class="education-card">
        <div class="edu-icon">🎓</div>
        <div class="edu-info">
          <p class="edu-school"><strong>University of Saskatchewan</strong></p>
          <p class="edu-degree">Bachelor of Science in Computer Science</p>
        </div>
      </div>
      <!-- Example certificate card -->
      <div class="education-card certificate-card">
        <div class="edu-icon">📜</div>
        <div class="edu-info">
          <p class="edu-school"><strong>Coursera</strong></p>
          <p class="edu-degree">Supervised Machine Learning (Andrew Ng, Stanford Online)</p>
          <p class="edu-meta">Issued: 2023 &bull; Credential ID: 1234-5678</p>
        </div>
      </div>
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
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
}

.title-text {
  font-size: 2.5rem;
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

.education-details {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.education-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  gap: 30px;
  box-shadow: 0 10px 30px rgba(110, 255, 110, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: var(--primary-color);
}

.edu-icon {
  font-size: 3rem;
  margin-right: 20px;
}

.edu-info {
  display: flex;
  flex-direction: column;
}

.edu-school {
  font-size: 1.3rem;
  color: var(--primary-color);
  font-weight: 700;
  margin-bottom: 8px;
}

.edu-degree {
  font-size: 1.1rem;
  color: #4b5563;
  opacity: 0.9;
  margin-bottom: 0;
}

.certificate-card {
  border-left: 5px solid var(--primary-color);
  background: rgba(255,255,255,0.08);
}

.edu-meta {
  font-size: 0.95rem;
  color: #6b7280;
  margin-top: 6px;
}
</style>
