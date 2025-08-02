<template>
  <button :title="tooltipText">
    Submit
  </button>
</template>

<script setup>
import { ref } from 'vue'

const tooltipText = ref('Click to submit your response')
</script>
