<template>
  <div class="container mt-4">
    <div class="columns">
      <div class="column is-three-quarters">
        <video controls >
          <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4">
        </video>
        <h3 class="is-size-3 mb-4">Un film cool</h3>
        <p class="mb-3">16:07 min | 301 vues | 13 octobre 2020</p>
        <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eligendi ullam. Autem debitis deleniti dolorum impedit iure mollitia nisi quae ratione recusandae sit? Aliquid autem facere ipsa iste laboriosam minima!</p>
        <button class="button is-link is-light">Partager !</button>
      </div>
      <div class="column">
        <verticallistfilm/>
      </div>
    </div>
  </div>
</template>
<script>

import verticallistfilm from "../components/movie/verticalListFilm";

export default {
  components: {verticallistfilm},
  name: "movie",
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.test {
  border: deeppink solid 1px;
}
</style>
