<template>
  <div class="videos-list">
    <div class="columns">
      <div class="column is-12">
        <button class="button is-primary is-light is-pulled-right" v-if="chapter <= 5" @click="nextChapter" :disabled="!!!this.activeVideo">Suivant &rarr;</button>
      </div>
    </div>
    <div class="columns is-multiline" v-if="!showRecap">
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

    <RecapVideoMaker v-if="showRecap"/>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import { ContentLoader } from 'vue-content-loader';
  import Video from "./Video";
  import Lightbox from "@/components/lightbox/Lightbox";
  import RecapVideoMaker from "@/components/videoMaker/RecapVideoMaker";

  export default {
    name: "VideosList",
    components: {
      RecapVideoMaker,
      Video,
      Lightbox,
      ContentLoader
    },
    data() {
      return {
        isOpen: false,
        showRecap: false
      }
    },
    mounted() {
      this.getAllVideosList();
    },
    computed: mapState([
      'videos',
      'isLoading',
      'chapter',
      'activeVideo'
    ]),
    methods: {
      ...mapMutations({
        setNewCurrentChapter: 'SET_NEW_CURRENT_CHAPTER',
        saveToSelectedVideo: 'SAVE_TO_SELECTED_VIDEOS'
      }),
      ...mapActions({
        getAllVideosList: 'GET_CHAPTER_VIDEOS_LIST'
      }),
      openLightbox: function() {
        this.isOpen = true;
      },
      closeLightBox: function() {
        this.isOpen = false;
      },
      nextChapter: function () {
        if(this.activeVideo) {
          if(this.chapter < 5) {
            this.saveToSelectedVideo(this.activeVideo);
            this.setNewCurrentChapter();
          } else {
            this.setNewCurrentChapter();
            this.showRecap = true;
          }
        } else {
          throw new TypeError('You should provide a valid activeVideo param.');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
