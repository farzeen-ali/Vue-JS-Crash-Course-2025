<template>
  <div class="user-card">
    <h2>{{ name }}</h2>
    <p>Email: {{ email }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  email: String
})
</script>
