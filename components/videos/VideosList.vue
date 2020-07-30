<template>
  <div class="videos-list">
    <h1 class="title is-1">Choisir le chapitre 1...</h1>
    <div class="columns is-multiline">
      <Video v-for="video in videos" :key="video.id" :url="video.url" :title="video.title"/>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Video from "./Video";

  export default {
    name: "VideosList",
    components: {Video},
    mounted() {
      this.$store.dispatch('GET_ALL_VIDEOS_LIST');
    },
    computed: mapState([
      'videos'
    ])
  }
</script>

<style lang="scss" scoped>

</style>
