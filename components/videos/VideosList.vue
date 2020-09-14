<template>
  <div class="videos-list">
    <div class="columns">
      <div class="column is-4">
        <h1 class="title">Choisir le chapitre 1...</h1>
      </div>
      <div class="column is-offset-6 is-2">
        <button class="button is-primary is-light is-pulled-right" @click="nextChapter">Suivant &rarr;</button>
      </div>
    </div>
    <div class="columns is-multiline">
      <Video v-for="video in videos" :key="video.id" :id="video.id" :thumbnailUrl="video.download_url" :videoUrl="video.videoUrl" :title="video.author" @event-open-lightbox="openLightbox" v-lightbox/>
      <content-loader
        :width="1368"
        :height="548"
        :speed="2"
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        v-if="isLoading"
      >
        <rect x="12" y="0" rx="3" ry="3" width="318" height="262" />
        <rect x="354" y="0" rx="3" ry="3" width="318" height="262" />
        <rect x="696" y="0" rx="3" ry="3" width="318" height="262" />
        <rect x="1038" y="0" rx="3" ry="3" width="318" height="262" />

        <rect x="12" y="286" rx="3" ry="3" width="318" height="262" />
        <rect x="354" y="286" rx="3" ry="3" width="318" height="262" />
        <rect x="696" y="286" rx="3" ry="3" width="318" height="262" />
        <rect x="1038" y="286" rx="3" ry="3" width="318" height="262" />
      </content-loader>
    </div>
    <Lightbox v-show="isOpen" @event-close-lightbox="closeLightBox"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { ContentLoader } from 'vue-content-loader';
  import Video from "./Video";
  import Lightbox from "@/components/lightbox/Lightbox";

  export default {
    name: "VideosList",
    components: {
      Video,
      Lightbox,
      ContentLoader
    },
    data() {
      return {
        isOpen: false,
      }
    },
    mounted() {
      this.$store.dispatch('GET_ALL_VIDEOS_LIST');
    },
    computed: mapState([
      'videos',
      'isLoading'
    ]),
    methods: {
      openLightbox: function() {
        this.isOpen = true;
      },
      closeLightBox: function() {
        this.isOpen = false;
      },
      nextChapter: function () {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
