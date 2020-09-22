<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h3 class="is-size-3 title">Retrouver ici des films d'autres utilisateurs</h3>
      </div>
    </div>
    <div class="columns" >
      <div class="column" v-for="video in videos">
        <p class="has-text-centered">{{ video.author }}</p>
        <a :href="video.download_url">
          <img :src="video.download_url" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>

import axios from "axios";

export default {
  name: "listfilm",
  data() {
    return {
      videos: []
    }
  },
  mounted() {
    axios
      .get('https://picsum.photos/v2/list?limit=4')
      .then(response => (this.videos = response.data))
      .catch(error => {console.log(error);})
  }
}
</script>

<style scoped>
.line{
  border-bottom: blueviolet solid 4px;
  border-radius: 4px;
}
</style>
