<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { UploadDto } from '@/types/upload.dto';
import type { ResultDto } from '@/types/result.dto';
import { upload } from '@/composable/upload';

const props = defineProps<{ fileName: string; data: string }>();
const emit = defineEmits<{
  (e: 'result', value: ResultDto): void;
  (e: 'isLoading', value: boolean): void;
}>();

const progress = ref(0);

onMounted(() => {
  console.log('mount FileStatusCard');
  uploadFile(props.data);
});

async function uploadFile(data: string) {
  try {
    const payload: UploadDto = { data: data };
    const result = await upload(payload);
    console.log(result);
    emit('result', result);
  } catch (e: any) {
    console.log(e);
    console.log(e?.response?.data);
    alert(JSON.stringify(e?.response?.data));
  } finally {
    emit('isLoading', false);
    console.log('isLoading false');
  }
}
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body flex flex-row justify-center">
      <section>
        <img
          class="object-contain h-12 mx-auto"
          src="https://cdn-icons-png.flaticon.com/512/617/617449.png"
          alt="CSV icon"
        />
      </section>
      <section>
        <div class="text-3l text-center">{{ fileName }}</div>
        <progress
          class="progress progress-primary w-56"
          v-bind:value="progress"
          max="100"
        ></progress>
        <div>{{ Math.round(progress) }}</div>
        <div class="flex flex-row justify-center">
          <button class="btn loading">UPLOADING</button>
        </div>
      </section>
    </div>
  </div>
</template>
