<script setup lang="ts">
import UploadCard from '@/components/UploadCard.vue';
import { ref } from 'vue';
import type { ResultDto } from '@/types/result.dto';

const result = ref<ResultDto>();
const isLoading = ref(false);

function showResult(r: ResultDto) {
  console.log('showResult()');
  console.log(r);
  result.value = r;
}

function showIsLoading(b: boolean) {
  console.log('showIsLoading()');
  isLoading.value = b;
}
</script>

<template>
  <main class="flex items-center justify-center h-screen">
    <main>
      <header class="mt-20 mb-4">
        <h1 class="text-5xl text-gray-600 text-center">Websites Checker</h1>
      </header>
      <section class="flex flex-row justify-center mb-4">
        <UploadCard
          @result="(s) => showResult(s)"
          @isLoading="(b) => showIsLoading(b)"
        ></UploadCard>
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
