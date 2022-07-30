<script setup lang="ts">
import { ref } from 'vue';
import { upload } from '@/composable/upload';
import type { ResultDto } from '@/types/result.dto';
import type { UploadDto } from '@/types/upload.dto';
import { getBase64 } from '@/composable/utils';

const file = ref<{ files: FileList }>();
const fileName = ref('');

const emit = defineEmits<{
  (e: 'increaseBy', n: number): void;
  (e: 'result', value: ResultDto): void;
  (e: 'isLoading', value: boolean): void;
}>();

async function uploadFile() {
  emit('isLoading', true);
  let base64: string;
  if (file.value) {
    console.log(file.value.files[0]);
    fileName.value = file.value?.files[0].name;
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
  <div class="card w-96 h-80 bg-base-100 border-dashed border-2 border-sky-500">
    <div class="text-center">
      <p class="mt-5 mb-20">Drag your .csv file here to start uploading.</p>
      <p class="mb-5">----------- OR -----------</p>
      <div class="card-actions justify-center">
        <form v-on:submit.prevent="uploadFile()" enctype="multipart/form-data">
          <label class="btn btn-primary" for="file">Browse File</label>
          <input
            class="fixed hidden"
            type="file"
            id="file"
            name="csv"
            ref="file"
          /><br /><br />
          <div class="text-md">{{ fileName }}</div>
          <button class="btn btn-primary" type="submit">Upload</button>
        </form>
      </div>
    </div>
  </div>
</template>
