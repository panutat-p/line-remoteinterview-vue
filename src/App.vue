<script setup lang="ts">
import UploadCard from '@/components/UploadCard.vue';
import UploadCard2 from '@/components/UploadCard2.vue';
import { ref } from 'vue';

const count = ref(0);

function callback(n: number) {
  console.log('callback()');
  count.value += n;
}
</script>

<template>
  <main class="flex items-center justify-center h-screen">
    <main>
      <header class="mt-20 mb-4">
        <h1 class="text-5xl text-gray-600 text-center">Websites Checker</h1>
      </header>
      <section class="flex flex-row justify-center mb-4">
        <UploadCard @increase-by="(n) => callback(n)"></UploadCard>
      </section>
      <section class="flex flex-row justify-center">
        <img
          src="https://via.placeholder.com/500x400/000000.png"
          alt="very long placeholder"
        />
      </section>
      <section>
        <UploadCard2></UploadCard2>
      </section>
      <section>
        <div class="text-3xl">
          {{ count }}
        </div>
      </section>
    </main>
  </main>
</template>
