<template>
  <button @click="sendMessage">Click Me</button>
</template>

<script setup>
const emit = defineEmits(['notify'])

function sendMessage() {
  emit('notify', 'Hello from Child!')
}
</script>
