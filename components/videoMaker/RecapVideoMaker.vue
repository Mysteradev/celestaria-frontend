<template>
  <div class="recap-list">
    <div class="field">
      <label for="filmTitle" class="label">Veuillez saisir un titre pour votre nouveau film</label>
      <div class="control">
        <input class="input" :class="{'is-danger': this.inputContent.trim().length === 0, 'is-success': this.inputContent.trim().length > 3}" v-model="inputContent" type="text" placeholder="Une histoire de clés..." id="filmTitle">
        <small id="filmTitleIndicator" v-show="this.inputContent.trim().length < 3">Le titre doit contenir plus de trois caractères...</small>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" v-model="hasAcceptedCondition">
            J'accepte que le film soit mis en ligne et <a href="#">accepte les conditions d'utilisations</a>.
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" :disabled="!this.isValid" @click="sendNewVideoToApi(inputContent)">Valider</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "RecapVideoMaker",
  data() {
    return {
      inputContent: '',
      hasAcceptedCondition: false
    }
  },
  methods: {
    ...mapActions({
      sendNewVideoToApi: 'videoMaker/SEND_NEW_MOVIE'
    })
  },
  computed: {
    /**
     * Si le titre est plus long que 3 caractères et
     * que l'utilisateur a accepter les conditions d'utilisations
     * @returns {boolean}
     */
    isValid: function() {
      return this.inputContent.trim().length > 3 && this.hasAcceptedCondition;
    }
  }
}
</script>

<style scoped>

</style>
