<template>
  <div class="field is-grouped">
    <label class="label is-hidden" for="searchByTitle">Label</label>
    <div class="control is-expanded">
      <input class="input flat-input" type="text" id="searchByTitle" placeholder="Un voyage qui à mal tourné..." v-model="search">
    </div>
    <div class="control">
      <NuxtLink :to="`/search=${search}&page=1`" @click.native="fetchMovies(search)" class="button rounded-button">
        <FontAwesomeIcon :icon="['fas', 'search']"/>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faSearch);

export default {
  name: "searchBar",
  components: {
    FontAwesomeIcon,
  },
  methods: {
    ...mapActions({
      fetchMovies: 'listMovies/FETCH_MOVIES_BY_CRITERIA'
    })
  },
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>

</style>
