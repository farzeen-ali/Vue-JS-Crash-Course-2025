<template>
  <ul>
    <li v-for="(course, index) in courses" :key="index">
      {{ index + 1 }}. {{ course }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const courses = ref(['Vue.js Basics', 'Nuxt.js Fundamentals', 'Firebase Integration'])
</script>
