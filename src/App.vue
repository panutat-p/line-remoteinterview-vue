<script setup lang="ts">
import UploadCard from '@/components/UploadCard.vue';
</script>

<template>
  <main class="flex items-center justify-center h-screen">
    <main>
      <header class="mt-20 mb-4">
        <h1 class="text-5xl text-gray-600 text-center">Websites Checker</h1>
      </header>
      <section class="flex flex-row justify-center mb-4">
        <UploadCard></UploadCard>
      </section>
      <section class="flex flex-row justify-center">
        <img
          src="https://via.placeholder.com/500x400/000000.png"
          alt="very long placeholder"
        />
      </section>
    </main>
  </main>
</template>
