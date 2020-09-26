<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h3 class="is-size-3 title">Retrouvez ici des films d'autres utilisateurs</h3>
      </div>
    </div>
    <div class="columns" >
      <div class="column" v-for="video in videos">
        <p class="has-text-centered">{{ video.author }}</p>
        <a :href="video.download_url">
          <img :src="video.download_url" alt="Miniature d'un chapitre vidéo">
        </a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "listfilm",
  data() {
    return {
      videos: {}
    }
  },
  methods: {
    async getVideo() {
     await this.$axios.$get('https://picsum.photos/v2/list?limit=4')
        .then(response => (this.videos = response))
        .catch(error => console.log(error));
    }
  },
  mounted() {
    this.getVideo();
  }
}
</script>

<style scoped>

</style>
