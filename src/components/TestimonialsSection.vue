<template>
    <section>
      <h2>Testimonials</h2>
      <div class="testimonial" v-for="(testimonial, index) in testimonials" :key="index">
        <p>{{ testimonial.text }}</p>
        <p><strong>{{ testimonial.author }}</strong></p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testimonials: [
          { text: "Ahmed is a fantastic developer with great attention to detail.", author: "John Doe" },
          { text: "Working with Ahmed has been a pleasure. He's very knowledgeable and professional.", author: "Jane Smith" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .testimonial {
    background-color: #1a1a1a;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  </style>
  