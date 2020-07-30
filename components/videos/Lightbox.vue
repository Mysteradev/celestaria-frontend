<template>
    <div class="preview-video">
      <span class="close-button">&cross;</span>
      <video :src="src" :poster="poster"></video>
    </div>
</template>

<script>
    export default {
      name: "Lightbox.vue",
      props: {
        poster: {
          type: String,
          required: true
        },
        src: {
          type: String,
          required: true
        },

      }
    }
</script>

<style scoped>
  .close-button {
    position: absolute;
    right: 10px;
    top: 10px;
  }
</style>
