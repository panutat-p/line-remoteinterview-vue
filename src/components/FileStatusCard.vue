<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { UploadDto } from '@/types/upload.dto';
import type { ResultDto } from '@/types/result.dto';
import { uploadWithProgress } from '@/composable/upload';

const props = defineProps<{ fileName: string; data: string }>();
const emit = defineEmits<{
  (e: 'result', value: ResultDto): void;
  (e: 'isLoading', value: boolean): void;
}>();

const progress = ref(0);

onMounted(() => {
  uploadFile(props.data);
});

async function uploadFile(data: string) {
  const f = (progressEvent: any) => {
    const { loaded, total } = progressEvent;
    progress.value = Math.round((loaded / total) * 100);
  };
  try {
    const payload: UploadDto = { data: data };
    const result = await uploadWithProgress(payload, f);
    console.log(result);
    emit('result', result);
  } catch (e: any) {
    console.log(e);
    console.log(e?.response?.data);
    alert(JSON.stringify(e?.response?.data));
  } finally {
    emit('isLoading', false);
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
        <p>
          <span class="float-left">{{ fileName }}</span>
          <span class="float-right">{{ progress }} %</span>
        </p>
        <progress
          class="progress progress-primary w-56 h-5"
          v-bind:value="progress"
          max="100"
        ></progress>
      </section>
    </div>
  </div>
</template>
