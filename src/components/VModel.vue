<template>
  <div>
    <label>Email:</label>
    <input type="email" v-model="email" placeholder="Enter your email" />
    <p>Your email is: {{ email }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
</script>
