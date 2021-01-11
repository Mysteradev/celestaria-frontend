<template>
  <div class="videos-creator">
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="is-1 title has-text-dark">
            Créez votre film...
          </h1>
          <h2 class="subtitle has-text-dark">
            Choisissez votre chapitre {{this.chapter}}
          </h2>
        </div>
      </div>
    </section>
    <div class="section">
      <div class="container">
        <VideosList/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import VideosList from "../components/movieMaker/listChapter";

  export default {
    name: "videos",
    components: {VideosList},
    computed: mapState([
      'chapter',
    ]),
  }
</script>

<style lang="scss" scoped>
  .hero {
    background: url("https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg") center;
    background-size: cover;
  }
</style>
