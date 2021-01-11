<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h3 class="is-size-3 title">Retrouvez ici des films d'autres utilisateurs</h3>
      </div>
    </div>
    <div class="columns" >
      <MovieCard class="column" v-for="movie in movies" :thumbnail-url="movie.download_url" :id="movie.id" :title="movie.author" :key="movie.id"></MovieCard>
    </div>
  </div>
</template>
<script>

//TODO delete this component and use the shared one

import MovieCard from "@/components/shared/movie/movieCard";
export default {
  name: "homeMovies",
  components: {MovieCard},
  data() {
    return {
      movies: {}
    }
  },
  methods: {
    async getMovies() {
     await this.$axios.$get('https://picsum.photos/v2/list?limit=4')
        .then(response => (this.movies = response))
        .catch(error => console.log(error));
    }
  },
  created() {
    this.getMovies();
  }
}
</script>

<style scoped>

</style>
