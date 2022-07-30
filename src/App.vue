<script setup lang="ts">
import UploadCard from '@/components/UploadCard.vue';
import ResultCard from '@/components/ResultCard.vue';
import FileStatusCard from '@/components/FileStatusCard.vue';
import { ref } from 'vue';
import type { ResultDto } from '@/types/result.dto';
import type { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@/config';
import axios from 'axios';

// todo
const progress = ref(0);
const payload = ref();

const fileName = ref('');
const data = ref('');
const isLoading = ref(false);
const result = ref<ResultDto>();

// todo
async function uploadWithProgress() {
  console.log('uploadWithProgress()');
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `${BASE_URL}/upload`,
    headers: { 'Transaction-ID': `${Math.floor(Math.random() * 10000)}` },
    data: {
      data: 'aHR0cHM6Ly93d3cueW91dHViZS5jb20sCmh0dHA6Ly93d3cuZ29vZ2xlLmNvbSwKaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLAp3d3cudHdpdHRlci5jb20sCmh0dHBzOi8vd3d3Lndpa2lwZWRpYS5vcmcsCmh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20sCmh0dHBzOi8vd3d3Lmluc3RhZzc3N3JhbS5jb20sCnd3dy5zYW5vb2suY29tLA==',
    },
    onUploadProgress: (progressEvent) => console.log(progressEvent.loaded),
  };
  const { data } = await axios(config);
  console.log(data);
  payload.value = data;
}

function callback(r: ResultDto) {
  data.value = '';
  result.value = r;
}
</script>

<template>
  <main class="flex items-center justify-center h-screen">
    <main>
      <section>
        <button v-on:click="uploadWithProgress()" class="btn btn-secondary">
          Button
        </button>
        <button v-on:click="progress = 0" class="btn btn-secondary">
          Reset
        </button>
        <progress
          class="progress progress-primary w-56"
          v-bind:value="progress"
          max="100"
        ></progress>
        <div>{{ Math.round(progress) }}</div>
        <div>{{ payload }}</div>
      </section>
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
          @result="(r) => callback(r)"
        ></FileStatusCard>
      </section>
      <section v-if="result" class="flex flex-row justify-center mb-4">
        <ResultCard v-bind:data="result"></ResultCard>
      </section>
    </main>
  </main>
</template>
