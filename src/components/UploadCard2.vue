<script setup lang="ts"></script>

<template>
  <div class="max-w-xl">
    <label
      class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
    >
      <span class="flex items-center space-x-2">
        <span class="font-medium text-gray-600">
          Drag your .csv file here to start uploading. or
          <span class="btn btn-active btn-primary">Browse File</span>
        </span>
      </span>
      <input type="file" name="file_upload" class="hidden" />
    </label>
  </div>
</template>
