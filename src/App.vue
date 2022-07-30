<script setup lang="ts">
import UploadCard from '@/components/UploadCard.vue';
import ResultCard from '@/components/ResultCard.vue';
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
      <section v-if="isLoading">
        <div class="flex flex-row justify-center">
          <button class="btn loading">loading</button>
        </div>
        <div class="text-3l text-center">{{ fileName }}</div>
      </section>
      <section v-if="result" class="flex flex-row justify-center mb-4">
        <ResultCard v-bind:data="result"></ResultCard>
      </section>
    </main>
  </main>
</template>
