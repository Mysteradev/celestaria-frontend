<template>
  <div>
    <h3 class="is-size-3 title">Films similaires : </h3>
      <div class="column" v-for="video in videos">
        <p class="has-text-centered">{{ video.author }}</p>
        <a :href="video.download_url">
          <img :src="video.download_url" alt="Miniature d'un chapitre vidéo">
        </a>
      </div>
    </div>
</template>
<script>

export default {
  name: "verticallistfilm",
  data() {
    return {
      videos: {}
    }
  },
  methods: {
    async getVideo() {
      await this.$axios.$get('https://picsum.photos/v2/list?limit=3')
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
.test {
  border: deeppink solid 1px;
}
</style>
