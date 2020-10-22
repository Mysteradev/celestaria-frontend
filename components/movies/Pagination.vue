<template>
  <nav class="pagination is-centered pb-5" role="navigation" aria-label="pagination">
    <NuxtLink :to="`/movies/${getPreviousPage}`" class="pagination-previous" :disabled="getCurrentPage < 2">Précédent</NuxtLink>
    <NuxtLink class="pagination-next" :to="`/movies/${getNextPage}`">Suivant</NuxtLink>
    <ul class="pagination-list">
      <li>
        <NuxtLink :to="`/movies/${getPreviousPage}`" class="pagination-link" :aria-label="`Aller à la page ${getPreviousPage}`">{{getPreviousPage}}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/movies/${getCurrentPage}`" class="pagination-link is-current" :aria-label="`Page ${getCurrentPage}`" aria-current="page">{{getCurrentPage}}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/movies/${getNextPage}`" @click.native="setCurrentPage(getCurrentPage)" class="pagination-link" :aria-label="`Aller à la page ${getNextPage}`">{{getNextPage}}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Pagination",
  computed: {
    ...mapGetters({
      getCurrentPage: 'listMovies/getCurrentPage'
    }),

    /**
     * Get the next number of the current page
     * @returns {number}
     */
    getNextPage(){
      return Number(this.getCurrentPage) + 1;
    },

    /**
     * Get the previous number page
     * @returns {number}
     */
    getPreviousPage() {
      if(this.getCurrentPage > 1) {
        return Number(this.getCurrentPage) - 1;
      }

      return 1;
    }
  },
  methods: {
    ...mapMutations({
      setCurrentPage: 'listMovies/SET_CURRENT_PAGE'
    }),
    ...mapActions({
      fetchMovies: 'listMovies/FETCH_MOVIES'
    })
  },
  mounted() {
    // OR operator short circuit
    // TODO May not be needed
    this.setCurrentPage(this.$route.params.page || 1);
  },
  watch: {
    $route() {
      this.setCurrentPage(this.$route.params.page);
      this.fetchMovies("movies");
    }
  }
}
</script>

<style scoped>

</style>
