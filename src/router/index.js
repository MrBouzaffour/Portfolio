import { createRouter, createWebHistory } from 'vue-router';

const IntroductionSection = () => import('../components/IntroductionSection.vue');
const SkillsSection = () => import('../components/SkillsSection.vue');
const EducationSection = () => import('../components/EducationSection.vue');
const ProjectsSection = () => import('../components/ProjectsSection.vue');
const ContactForm = () => import('../components/ContactForm.vue');

const routes = [
  { path: '/introduction', component: IntroductionSection },
  { path: '/skills', component: SkillsSection },
  { path: '/education', component: EducationSection },
  { path: '/projects', component: ProjectsSection },
  { path: '/contact', component: ContactForm },
  { path: '/', redirect: '/introduction' }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
