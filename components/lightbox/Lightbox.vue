<template>
      <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
          <p class="image is-4by3">
            <img :src="this.url" alt="Miniature de la vidéo"/>
          </p>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="closeLightbox"></button>
      </div>
</template>

<script>
    import './LightboxDirective';
    import store from './LightboxStore';

    export default {
      name: "Lightbox",
      data() {
        return {
          state: store.state
        }
      },
      methods: {
        closeLightbox() {
          this.state.video = null;
          this.$emit("event-close-lightbox")
        }
      },
      computed: {
        url() {
          return this.state.video
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
