<template>
  <section class="education glass-container">
    <h2 class="section-title">
      <span class="title-text">Education</span>
      <span class="title-underline"></span>
    </h2>

    <ul class="timeline" role="list">
      <li v-for="(e,i) in items" :key="i" class="timeline-item">
        <span class="dot" aria-hidden="true"></span>
        <div class="bubble">
          <div class="row">
            <span class="when">{{ e.date }}</span>
            <span class="icon" :aria-label="e.type" role="img">{{ e.icon }}</span>
          </div>

          <h3 class="school">{{ e.school }}</h3>
          <p class="degree">{{ e.degree }}</p>
          <p v-if="e.meta" class="meta">{{ e.meta }}</p>

          <div v-if="e.tags?.length" class="tags">
            <span v-for="t in e.tags" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'EducationSection',
  data() {
    return {
      items: [
        {
          type: 'degree',
          icon: '🎓',
          school: 'University of Saskatchewan',
          degree: 'B.Sc. Computer Science',
          date: '2022 — Present',
          tags: [],//['Algorithms', 'Networks', 'Systems'],
        },
        {
          type: 'certificate',
          icon: '📜',
          school: 'Coursera',
          degree: 'Supervised Machine Learning (Andrew Ng, Stanford Online)',
          date: 'Issued: 2023',
          meta: '',//'Credential ID: 1234-5678',
          tags:[],// ['ML', 'Regression', 'Classification'],
        },
      ],
    };
  },
  beforeRouteEnter(to, from, next) {
    document.title = 'Education - Ahmed Bouzaffour';
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', 'Education page of Ahmed Bouzaffour');
    next();
  },
};
</script>

<style scoped>
.education {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.section-title { text-align: center; margin-bottom: 28px; }
.title-text {
  font-size: 2.2rem; font-weight: 900;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.title-underline {
  width: 84px; height: 4px; margin: 10px auto 0; border-radius: 2px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
}

/* Timeline layout */
.timeline {
  position: relative;
  margin: 0;
  padding: 0 0 0 20px;
  list-style: none;
  width: 100%;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 9px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(255, 255, 255, .15);
}

.timeline-item {
  position: relative;
  margin: 0 0 16px 0;
}

.timeline-item .dot {
  position: absolute;
  left: -1px;
  top: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary-color);
  box-shadow: 0 0 0 4px rgba(110, 255, 110, .15);
}

.timeline-item .bubble {
  margin-left: 16px;
  padding: 14px 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, .05);
  border: 1px solid rgba(255, 255, 255, .12);
  backdrop-filter: blur(10px);
  transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
}

.timeline-item .bubble:hover {
  transform: translateY(-2px);
  border-color: var(--primary-color);
  box-shadow: 0 12px 24px rgba(0, 0, 0, .18);
}

.timeline-item .row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 6px;
}

.timeline-item .when {
  font-size: .95rem;
  color: var(--text-muted, #9ca3af);
}

.timeline-item .icon {
  font-size: 1.1rem;
}

.timeline-item .school {
  margin: 0;
  color: var(--primary-color);
  font-size: 1.05rem;
  font-weight: 700;
}

.timeline-item .degree {
  margin: 4px 0 0;
  color: var(--text, #e5e7eb);
  line-height: 1.5;
}

.timeline-item .meta {
  margin: 6px 0 0;
  color: var(--text-muted, #9ca3af);
  font-size: .95rem;
}

.tags {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  border: 1px solid rgba(255, 255, 255, .18);
  background: rgba(110, 255, 110, .14);
  color: var(--primary-color);
  padding: 4px 10px;
  border-radius: 999px;
  font-size: .8rem;
  font-weight: 600;
}

/* Small screens */
@media (max-width: 640px) {
  .timeline { padding-left: 16px; }
  .timeline::before { left: 7px; }
  .timeline-item .dot { left: -3px; }
  .title-text { font-size: 2rem; }
}
</style>
