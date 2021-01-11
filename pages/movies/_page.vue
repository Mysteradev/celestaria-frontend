<template>
  <div class="container">
    <section class="hero is-medium is-bold">
      <div class="hero-body">
        <div class="container">
          <SearchBar/>
        </div>
      </div>
    </section>
    <ListMovies trigger-page="movies"/>
  </div>
</template>

<script>
import ListMovies from "@/components/movies/listMovies";
import { mapMutations } from "vuex";
import SearchBar from "@/components/movies/searchBar";

export default {
  name: "movies",
  head() {
    return {
      title: "Les films - Celestaria"
    }
  },
  components: {
    SearchBar,
    ListMovies,
  },
  methods: {
    ...mapMutations({
      setCurrentPage: 'listMovies/SET_CURRENT_PAGE'
    })
  },
  mounted() {
    this.setCurrentPage(this.$route.params.page)
  }
}
</script>

<style lang="scss" scoped>

</style>
