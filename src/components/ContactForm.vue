<template>
  <section class="contact">
    <h2 class="section-title">
      <span class="title-text">Get In Touch</span>
      <span class="title-underline"></span>
    </h2>
    
    <div class="contact-container">
      <div class="contact-info">
        <div class="info-card">
          <div class="info-icon">📧</div>
          <h3>Email</h3>
          <p>ahmedbouzaffour2002@gmail.com</p>
          <a href="mailto:ahmedbouzaffour2002@gmail.com" class="contact-action">Send Email</a>
        </div>
        
        <div class="info-card">
          <div class="info-icon">💼</div>
          <h3>LinkedIn</h3>
          <p>Connect with me professionally</p>
          <a href="https://www.linkedin.com/in/ahmed-bouzaffour-79b78b270" target="_blank" class="contact-action">View Profile</a>
        </div>
        
        <div class="info-card">
          <div class="info-icon">🐙</div>
          <h3>GitHub</h3>
          <p>Check out my projects</p>
          <a href="https://github.com/MrBouzaffour" target="_blank" class="contact-action">View Projects</a>
        </div>
      </div>
      
      <div class="contact-form-container">
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-header">
            <h3>Send me a message</h3>
            <p>I'd love to hear from you! Let's discuss opportunities.</p>
          </div>
          
          <div class="form-group">
            <div class="input-container">
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
                :class="{ 'has-value': form.name }"
              >
              <label for="name" class="floating-label">Your Name</label>
              <div class="input-icon">👤</div>
            </div>
          </div>
          
          <div class="form-group">
            <div class="input-container">
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required
                :class="{ 'has-value': form.email }"
              >
              <label for="email" class="floating-label">Your Email</label>
              <div class="input-icon">📧</div>
            </div>
          </div>
          
          <div class="form-group">
            <div class="input-container">
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                required
                :class="{ 'has-value': form.subject }"
              >
              <label for="subject" class="floating-label">Subject</label>
              <div class="input-icon">📝</div>
            </div>
          </div>
          
          <div class="form-group">
            <div class="input-container textarea-container">
              <textarea 
                id="message" 
                v-model="form.message" 
                required
                :class="{ 'has-value': form.message }"
                rows="5"
              ></textarea>
              <label for="message" class="floating-label">Your Message</label>
              <div class="input-icon">💬</div>
            </div>
          </div>
          
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else class="loading">
              <span class="spinner"></span>
              Sending...
            </span>
          </button>
        </form>
      </div>
    </div>
    
    <!-- Success Modal -->
    <div v-if="showSuccess" class="modal-overlay" @click="closeModal">
      <div class="success-modal" @click.stop>
        <div class="success-icon">✅</div>
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. I'll get back to you soon!</p>
        <button @click="closeModal" class="close-btn">Close</button>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      showSuccess: false
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      
      try {
        const serviceID = 'service_kvvlz3c';
        const templateID = 'template_vlupeue';
        const userID = 'GfgiWKkj9gaPhQJ5V';

        await emailjs.send(serviceID, templateID, {
          name: this.form.name,
          email: this.form.email,
          subject: this.form.subject,
          message: this.form.message
        }, userID);
        
        this.showSuccess = true;
        this.resetForm();
      } catch (error) {
        console.error('Email send error:', error);
        alert('Failed to send the message. Please try again later.');
      } finally {
        this.isSubmitting = false;
      }
    },

    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.subject = '';
      this.form.message = '';
    },
    
    closeModal() {
      this.showSuccess = false;
    }
  },
  beforeRouteEnter(to, from, next) {
    document.title = 'Contact - Ahmed Bouzaffour';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Contact page of Ahmed Bouzaffour');
    next();
  }
};
</script>

<style scoped>
.contact {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
}

.title-text {
  font-size: 3rem;
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

.contact-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  margin-bottom: 40px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 25px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  border-color: var(--primary-color);
}

.info-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.info-card h3 {
  color: var(--primary-color);
  font-size: 1.3rem;
  margin: 0 0 10px 0;
  font-weight: 600;
}

.info-card p {
  color: #ffffff;
  margin: 0 0 15px 0;
  opacity: 0.9;
  font-size: 0.9rem;
}

.contact-action {
  display: inline-block;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: #000;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.contact-action:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(110, 255, 110, 0.4);
}

.contact-form-container {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
}

.form-header {
  text-align: center;
  margin-bottom: 30px;
}

.form-header h3 {
  color: var(--primary-color);
  font-size: 1.8rem;
  margin: 0 0 10px 0;
  font-weight: 600;
}

.form-header p {
  color: #ffffff;
  margin: 0;
  opacity: 0.8;
}

.form-group {
  margin-bottom: 25px;
}

.input-container {
  position: relative;
}

.input-container input,
.input-container textarea {
  width: 100%;
  padding: 15px 45px 15px 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.input-container textarea {
  resize: vertical;
  min-height: 120px;
}

.input-container input:focus,
.input-container textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(110, 255, 110, 0.1);
  transform: translateY(-2px);
}

.input-container input.has-value,
.input-container textarea.has-value {
  border-color: var(--primary-color);
}

.floating-label {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  transition: all 0.3s ease;
  pointer-events: none;
  background: transparent;
}

.textarea-container .floating-label {
  top: 20px;
  transform: none;
}

.input-container input:focus + .floating-label,
.input-container textarea:focus + .floating-label,
.input-container input.has-value + .floating-label,
.input-container textarea.has-value + .floating-label {
  top: 0;
  left: 10px;
  font-size: 0.8rem;
  color: var(--primary-color);
  background: rgba(0, 0, 0, 0.8);
  padding: 0 5px;
  border-radius: 4px;
}

.input-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  opacity: 0.6;
  pointer-events: none;
}

.textarea-container .input-icon {
  top: 20px;
  transform: none;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: #000;
  border: none;
  padding: 15px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(110, 255, 110, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid #000;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.success-modal {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  backdrop-filter: blur(20px);
  max-width: 400px;
  width: 90%;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.success-modal h3 {
  color: var(--primary-color);
  font-size: 1.8rem;
  margin: 0 0 15px 0;
  font-weight: 600;
}

.success-modal p {
  color: #ffffff;
  margin: 0 0 25px 0;
  opacity: 0.9;
}

.close-btn {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: #000;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(110, 255, 110, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .title-text {
    font-size: 2rem;
  }
  
  .contact-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .contact-info {
    order: 2;
  }
  
  .contact-form-container {
    order: 1;
    padding: 25px;
  }
  
  .info-card {
    padding: 20px;
  }
}

/* Light theme overrides */
:global(.light-theme) .info-card,
:global(.light-theme) .contact-form-container {
  background: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.1);
}

:global(.light-theme) .info-card p,
:global(.light-theme) .form-header p {
  color: var(--text-light);
}

:global(.light-theme) .input-container input,
:global(.light-theme) .input-container textarea {
  background: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.2);
  color: var(--text-light);
}

:global(.light-theme) .floating-label {
  color: rgba(0, 0, 0, 0.6);
}

:global(.light-theme) .success-modal {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(0, 0, 0, 0.1);
}

:global(.light-theme) .success-modal p {
  color: var(--text-light);
}

.light-theme :deep(.contact-form),
.light-theme :deep(.contact-info),
.light-theme :deep(.info-card),
.light-theme :deep(.success-modal),
.light-theme :deep(.modal-overlay),
.light-theme :deep(.info-card) p {
  color: var(--text-light) !important;
}
</style>
