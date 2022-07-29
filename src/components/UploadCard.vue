<script setup lang="ts">
function hello(text: string) {
  console.log(text);
}
</script>

<template>
  <div class="card w-96 h-96 bg-base-100 border-dashed border-2 border-sky-500">
    <div class="card-body text-center">
      <p>Drag your .csv file here to start uploading.</p>
      <p>----------- OR -----------</p>
      <div class="card-actions justify-center">
        <form v-on:submit.prevent="hello('hello')">
          <button class="btn btn-primary">
            <label for="myfile">Browse File</label>
          </button>
          <input
            class="invisible"
            type="file"
            id="myfile"
            name="myfile"
          /><br /><br />
        </form>
      </div>
    </div>
  </div>
</template>
