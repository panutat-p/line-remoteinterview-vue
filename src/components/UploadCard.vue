<script setup lang="ts">
import { ref } from 'vue';
import { upload } from '@/composable/upload';
import type { ResultDto } from '@/types/result.dto';
import type { UploadDto } from '@/types/upload.dto';
import { getBase64 } from '@/composable/utils';

const file = ref<{ files: FileList }>();

const emit = defineEmits<{
  (e: 'fileName', value: string): void;
  (e: 'isLoading', value: boolean): void;
  (e: 'result', value: ResultDto): void;
}>();

async function uploadFile() {
  emit('isLoading', true);
  let base64: string;
  if (file.value) {
    console.log(file.value.files[0]);
    emit('fileName', file.value?.files[0].name);
    if (file.value?.files.length > 0) {
      base64 = await getBase64(file.value.files[0]);
      console.log(base64);
    } else {
      alert('Invalid File');
      return;
    }
  } else {
    alert('Invalid File');
    return;
  }
  const arr = base64.split(',');
  if (arr[0] !== 'data:text/csv;base64') {
    alert('Accept CSV only');
    return;
  }
  const data = arr[1];
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
  }
}
</script>

<template>
  <main class="card w-96 h-80 bg-blue-50 border-dashed border-2 border-sky-500">
    <div class="mt-5 mb-5 text-center">
      <img
        class="object-contain h-24 mx-auto"
        src="https://cdn-icons-png.flaticon.com/512/617/617449.png"
        alt="CSV icon"
      />
      <p class="mt-5 mb-10">Drag your .csv file here to start uploading.</p>
      <p class="mb-3">----------- OR -----------</p>
      <div class="card-actions justify-center">
        <div>
          <label class="btn btn-primary" for="file">BROWSE FILE</label>
          <input
            v-on:change="uploadFile()"
            class="fixed hidden"
            type="file"
            accept=".csv"
            id="file"
            name="csv"
            ref="file"
          />
        </div>
      </div>
    </div>
  </main>
</template>
