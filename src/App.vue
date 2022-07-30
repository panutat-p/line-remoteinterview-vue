<script setup lang="ts">
import UploadCard from '@/components/UploadCard.vue';
import { ref } from 'vue';
import type { ResultDto } from '@/types/result.dto';

const fileName = ref('');
const isLoading = ref(false);
const result = ref<ResultDto>();
</script>

<template>
  <main class="flex items-center justify-center h-screen">
    <main>
      <header class="mt-20 mb-4">
        <h1 class="text-5xl text-gray-600 text-center">Websites Checker</h1>
      </header>
      <section class="flex flex-row justify-center mb-4">
        <UploadCard
          @fileName="(s) => (fileName = s)"
          @isLoading="(b) => (isLoading = b)"
          @result="(r) => (result = r)"
        ></UploadCard>
      </section>
      <section>
        <div class="h-20 bg-green-200 text-3l text-center">{{ fileName }}</div>
      </section>
      <section class="flex flex-row justify-center">
        <img
          src="https://via.placeholder.com/500x400/000000.png"
          alt="very long placeholder"
        />
      </section>
      <section v-if="isLoading">
        <div class="flex flex-row justify-center h-24">
          <button class="btn loading">loading</button>
        </div>
      </section>
      <section>
        <div>
          {{ result }}
        </div>
      </section>
    </main>
  </main>
</template>
