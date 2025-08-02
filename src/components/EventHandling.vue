<template>
  <div>
    <input v-model="name" placeholder="Enter your name" />
    <button @click="handleSubmit">Submit</button>
    <p v-if="greeting">{{ greeting }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const greeting = ref('')

function handleSubmit() {
  if (name.value.trim()) {
    greeting.value = `Hello, ${name.value}! 👋`
  } else {
    greeting.value = 'Please enter your name first.'
  }
}
</script>
