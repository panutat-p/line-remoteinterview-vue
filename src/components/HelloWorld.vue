<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="m-5">
    <h1 class="text-3xl text-green-500">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a class="text-blue-600" target="_blank" href="https://vitejs.dev/"
        >Vite</a
      >
      +
      <a class="text-blue-600" target="_blank" href="https://vuejs.org/"
        >Vue 3</a
      >.
    </h3>
  </div>
</template>
