<template>
  <div class="list-movies">
    <div class="columns is-multiline">
      <MovieCard v-for="movie in movies" :key="movie.id" :id="movie.id" :thumbnailUrl="movie.download_url" :videoUrl="movie.videoUrl" :title="movie.author" />
    </div>
  </div>
</template>

<script>
import Video from "@/components/movieMaker/Chapter";
import { mapGetters, mapActions } from "vuex";
import Pagination from "@/components/movies/Pagination";
import MovieCard from "@/components/shared/movie/movieCard";

export default {
  name: "listMovies",
  components: {
    MovieCard,
    Pagination,
    Video
  },
  props: {
    triggerPage: {
      type: String,
      required: true
    }
  },
  created() {
    this.fetchMovies(this.triggerPage);
  },
  methods: {
    ...mapActions({
      fetchMovies: 'listMovies/FETCH_MOVIES'
    })
  },
  computed:
    mapGetters({
      'movies': 'listMovies/getMovies'
    })
}
</script>

<style scoped>

</style>
