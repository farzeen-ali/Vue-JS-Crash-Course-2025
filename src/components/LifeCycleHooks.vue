<template>
  <div>
    <h2>Dashboard</h2>
    <p v-if="loading">Loading data...</p>
    <p v-else>{{ data }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const data = ref('')
const loading = ref(true)

onMounted(async () => {
  // Simulated API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  data.value = 'Welcome Farzeen, your dashboard is ready!'
  loading.value = false
})
</script>
