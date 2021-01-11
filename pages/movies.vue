<template>
  <div class="container">
    <NuxtChild/>

    <Pagination/>

    <Footer/>
  </div>
</template>

<script>
import ListMovies from "@/components/movies/listMovies";
import SearchBar from "@/components/movies/searchBar";
import Pagination from "@/components/movies/Pagination";
import Footer from "@/components/shared/Footer";

export default {
  name: "movies",
  components: {
    Pagination,
    SearchBar,
    ListMovies,
    Footer
  },
}
</script>

<style scoped>

</style>
