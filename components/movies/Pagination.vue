<template>
  <nav class="pagination is-centered pb-5" role="navigation" aria-label="pagination">
    <NuxtLink v-if="getPreviousPage > 0" :to="`/movies/${getPreviousPage}`" class="pagination-previous" :disabled="getCurrentPage < 2">Précédent</NuxtLink>
    <button v-else class="pagination-previous" disabled>Précédent</button>
    <NuxtLink v-if="!(getNextPage > getMaxPage)" class="pagination-next" :to="`/movies/${getNextPage}`">Suivant</NuxtLink>
    <button v-else class="pagination-next" disabled>Suivant</button>
    <ul class="pagination-list">
      <li>
        <NuxtLink :to="`/movies/${getPreviousPage === 0 ? getCurrentPage : getPreviousPage}`" class="pagination-link" :class="{ 'is-current': getCurrentPage === 1 }" :aria-label="`Aller à la page ${getPreviousPage}`">{{ getPreviousPage === 0 ? getCurrentPage : getPreviousPage }}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/movies/${getPreviousPage !== 0 ? getCurrentPage : getNextPage}`" class="pagination-link" :class="{ 'is-current': getCurrentPage > 1}" :aria-label="`Page ${getCurrentPage}`" aria-current="page">{{ getPreviousPage !== 0 ? getCurrentPage : getNextPage }}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/movies/${getPreviousPage !== 0 ? getNextPage : getNextPage + 1}`" @click.native="setCurrentPage(getCurrentPage)" class="pagination-link" :aria-label="`Aller à la page ${getNextPage}`">{{ getPreviousPage !== 0 ? getNextPage : getNextPage + 1 }}</NuxtLink>
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
      getCurrentPage: 'listMovies/getCurrentPage',
      getMaxPage: 'listMovies/getMaxPage'
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

      return 0;
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
