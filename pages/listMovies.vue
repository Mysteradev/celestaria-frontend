<template>
  <div class="container">
    <section class="hero is-medium is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="field is-grouped">
            <label class="label is-hidden" for="searchByTitle">Label</label>
            <div class="control is-expanded">
              <input class="input flat-input" type="text" id="searchByTitle" placeholder="Un voyage qui à mal tourné...">
            </div>
            <div class="control">
              <a href="#" class="button rounded-button" @click="">
                <FontAwesomeIcon :icon="['fas', 'search']"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faSearch);

export default {
  name: "listMovies",
  components: {
    FontAwesomeIcon
  },
  methods: {
    ...mapActions({
      'getAllMovies': 'listMovies/GET_ALL_MOVIES'
    })
  }
}
</script>

<style lang="scss" scoped>
  .flat-input {
    border: none;
    border-bottom: 2px solid black;
    border-radius: 0;
    box-shadow: none;
    font-size: 32px;

    &::placeholder {
      color: #34495e;
    }
  }

  .rounded-button {
    border: none;
    padding: 11px;
    font-size: 32px;

  }
</style>
