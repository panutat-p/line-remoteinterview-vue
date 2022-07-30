<script setup lang="ts">
import UploadCard from '@/components/UploadCard.vue';
import ResultCard from '@/components/ResultCard.vue';
import FileStatusCard from '@/components/FileStatusCard.vue';
import { ref } from 'vue';
import type { ResultDto } from '@/types/result.dto';

const fileName = ref('');
const data = ref('');
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
          @result="(r) => (result = r)"
          @fileName="(s) => (fileName = s)"
          @data="(d) => (data = d)"
          @isLoading="(b) => (isLoading = b)"
        ></UploadCard>
      </section>
      <section v-if="isLoading" class="flex flex-row justify-center mb-4">
        <FileStatusCard
          v-bind:file-name="fileName"
          v-bind:data="data"
          @isLoading="(b) => (isLoading = b)"
          @result="(r) => (result = r)"
        ></FileStatusCard>
      </section>
      <section v-if="result" class="flex flex-row justify-center mb-4">
        <ResultCard v-bind:data="result"></ResultCard>
      </section>
    </main>
  </main>
</template>
