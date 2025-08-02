<template>
  <div>
    <button @click="showGreeting">Click Me</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')

function showGreeting() {
  message.value = 'Hello Farzeen! 👋'
}
</script>
