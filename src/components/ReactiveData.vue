<template>
  <div>
    <p>Count (ref): {{ count }}</p>
    <p>User (reactive): {{ user.name }} (Age: {{ user.age }})</p>

    <button @click="count++">Increase Count</button>
    <button @click="user.age++">Increase Age</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const count = ref(0) // ✅ primitive value
const user = reactive({ name: 'Farzeen', age: 22 }) // ✅ object
</script>
