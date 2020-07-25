<template>
  <div class="videos-list">
    <h1 class="title is-1">Choisir le chapitre 1...</h1>
    <div class="columns" v-for="video in videos" :key="video.id">
      <Video class="column is-4 thumbnail"/>
      <Video class="column is-4 thumbnail"/>
      <Video class="column is-4 thumbnail"/>
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
  .thumbnail {
    transition: .5s all;

    &:hover {
      box-shadow: 0 10px 20px rgba(220,220,220,0.5);
      transform: translateY(-5px);
    }
  }
</style>
