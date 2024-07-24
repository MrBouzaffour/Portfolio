<template>
  <section class="contact">
    <h2>Contact Me</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
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
        message: ''
      }
    };
  },
  methods: {
  submitForm() {
    const serviceID = 'service_kvvlz3c';
      const templateID = 'template_vlupeue';
      const userID = 'GfgiWKkj9gaPhQJ5V';

    emailjs.send(serviceID, templateID, {
      name: this.form.name,
      email: this.form.email,
      message: this.form.message
    }, userID)
    .then(() => {
      alert('Message sent successfully!');
      this.resetForm();
    })
    .catch((error) => {
      alert('Failed to send the message. Please try again later.');
      console.error(error);
    });
  },

    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
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
  background-color: #1a1a1a;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  padding: 30px;
  border-radius: 8px;
  text-align: left;
}

.contact h2 {
  font-size: 32px;
  color: #6eff6e;
  margin-bottom: 20px;
  border-bottom: 2px solid #6eff6e;
  padding-bottom: 10px;
}

.form-group {
  margin-bottom: 20px;
}

form label {
  margin-bottom: 5px;
  color: #6eff6e;
}

form input, form textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #444;
  background-color: #333;
  color: #fff;
}

form button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #6eff6e;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #00ff00;
}
</style>
