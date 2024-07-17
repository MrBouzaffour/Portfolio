<template>
    <section>
      <h2>Contact Me</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
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
        // Handle form submission
        console.log(this.form);
        // You can use a service like EmailJS or a backend endpoint to send the form data
      }
    }
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  form div {
    display: flex;
    flex-direction: column;
  }
  
  form label {
    margin-bottom: 5px;
  }
  
  form input, form textarea {
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
  }
  
  form button:hover {
    background-color: #00ff00;
  }
  </style>
  