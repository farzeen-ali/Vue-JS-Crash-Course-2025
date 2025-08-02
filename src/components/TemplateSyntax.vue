<template>
  <div class="greeting-box">
    <h2>Welcome back, {{ userName }}!</h2>
    <p>You have {{ notifications }} new messages.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userName = ref('Farzeen')
const notifications = ref(3)
</script>

<style scoped>
.greeting-box {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
