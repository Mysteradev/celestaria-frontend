<template>
  <div class="videos-list">
    <div class="columns">
      <div class="column is-12">
        <button class="button is-primary is-light is-pulled-right" v-if="chapter <= 5" @click="nextChapter" :disabled="!!!this.activeVideo">Suivant &rarr;</button>
      </div>
    </div>
    <div class="columns is-multiline" v-if="!showRecap">
      <Chapter v-for="chapter in chapters" :key="chapter.id" :id="chapter.id" :thumbnailUrl="chapter.download_url" :videoUrl="chapter.videoUrl" :title="chapter.author" :show-fullscreen-button="true" @event-open-lightbox="openLightbox" v-lightbox/>
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
  import {mapMutations, mapActions, mapGetters} from 'vuex';
  import { ContentLoader } from 'vue-content-loader';
  import Chapter from "./Chapter";
  import Lightbox from "@/components/lightbox/Lightbox";
  import RecapVideoMaker from "@/components/movieMaker/RecapMovieMaker";

  export default {
    name: "VideosList",
    components: {
      RecapVideoMaker,
      Chapter,
      Lightbox,
      ContentLoader
    },
    data() {
      return {
        isOpen: false,
        showRecap: false
      }
    },
    created() {
      this.getAllVideosList();
    },
    computed: mapGetters({
      isLoading: 'movieMaker/getIsLoading',
      chapters: 'movieMaker/getVideos',
      activeVideo: 'movieMaker/getActiveVideo',
      chapter: 'movieMaker/getChapter'
    }),
    methods: {
      ...mapMutations({
        setNewCurrentChapter: 'movieMaker/SET_NEW_CURRENT_CHAPTER',
        saveToSelectedVideo: 'movieMaker/SAVE_TO_SELECTED_VIDEOS'
      }),
      ...mapActions({
        getAllVideosList: 'movieMaker/GET_CHAPTER_VIDEOS_LIST'
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
