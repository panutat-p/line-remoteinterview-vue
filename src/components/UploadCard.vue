<script setup lang="ts">
import { ref } from 'vue';
import { upload } from '@/composable/upload';
import type { ResultDto } from '@/types/result.dto';
import { DateTime } from 'luxon';
import type { UploadDto } from '@/types/upload.dto';

const file = ref<{ files: FileList }>();
const result = ref<ResultDto>({});

function getBase64(blob: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

async function uploadFile() {
  let base64: string;
  if (file.value) {
    console.log(file.value.files);
    console.log(file.value.files[0]);
    if (file.value?.files.length > 0) {
      base64 = await getBase64(file.value.files[0]);
      console.log(base64);
    } else {
      console.log('no file');
      return;
    }
  } else {
    console.log('no file');
    return;
  }
  const arr = base64.split(',');
  if (arr[0] !== 'data:text/csv;base64') {
    console.log('wrong file format');
    return;
  }
  const data = arr[1];
  try {
    const payload: UploadDto = { data: data };
    result.value = await upload(payload);
  } catch (e) {
    console.log(e);
    console.log(e?.response?.data);
    alert(e?.response?.data?.error);
  } finally {
    console.log('uploadFile(data)');
  }
}

function toMinute(milli: number): string {
  return DateTime.fromMillis(milli).toFormat("mm'm' ss's'");
}
</script>

<template>
  <div class="card w-96 h-80 bg-base-100 border-dashed border-2 border-sky-500">
    <div class="text-center">
      <p class="mt-5 mb-20">Drag your .csv file here to start uploading.</p>
      <p class="mb-5">----------- OR -----------</p>
      <div class="card-actions justify-center">
        <form v-on:submit.prevent="uploadFile()" enctype="multipart/form-data">
          <label class="btn btn-primary" for="myfile">Browse File</label>
          <input
            class=""
            type="file"
            id="file"
            name="csv"
            ref="file"
          /><br /><br />
          <button class="btn btn-primary" type="submit">Upload</button>
        </form>
      </div>
    </div>
  </div>
  <div>
    {{ result }}
  </div>
</template>
