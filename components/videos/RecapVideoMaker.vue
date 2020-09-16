<template>
  <div class="recap-list">
    <div class="field">
      <label for="filmTitle" class="label">Veuillez saisir un titre pour votre nouveau film</label>
      <div class="control">
        <input class="input" :class="{'is-danger': this.inputContent.length === 0, 'is-success': this.inputContent.length > 3}" v-model="inputContent" type="text" placeholder="Une histoire de clés..." id="filmTitle">
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
            J'accepte que le film soit mis en ligne et <a href="#">accepte les conditions d'utilisations</a>.
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Valider</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecapVideoMaker",
  data() {
    return {
      inputContent: ''
    }
  }
}
</script>

<style scoped>

</style>
