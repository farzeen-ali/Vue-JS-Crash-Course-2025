<template>
  <div>
    <p v-if="status === 'loggedIn'">Welcome back, Farzeen!</p>
    <p v-else-if="status === 'loading'">Checking your session...</p>
    <p v-else>Please log in to continue.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const status = ref('loggedIn') // try: 'loading' or 'guest'
</script>
