<template>
 <div class="container">
   <section class="section">
   <div class="columns mt-5 mb-5">
     <div class="column">
       <h1 class="is-size-1">Celestaria, Le Film</h1>
       <h3 class="is-size-5">Le film interactif où VOUS avez les clés du jeu</h3>
     </div>
     <div class="column">
       <img :src="require('@/assets/img/img-home.jpg')" alt="Image home page" class="image-home media-content">
     </div>
   </div>
   <div class="columns mt-5 mb-5">
     <div class="column has-text-centered">
       <h1 class="is-size-1">Comment ça marche ?</h1>
       <h3 class="is-siza-5">Quelques aides, pour comprendre comment marche le site . . .</h3>
     </div>
   </div>
   <div class="columns mt-5 mb-5">
     <div class="column">
       <img :src="require('@/assets/img/img-home.jpg')" alt="Image home page" class="image-home image">
     </div>
   </div>
   <div class="columns mt-5">
     <div class="column has-text-centered">
       <p>Lancer le film</p>
       <img :src="require('@/assets/img/play-circle.svg')" alt="Play">
     </div>
     <div class="column has-text-centered">
       <p>Faire pause au film</p>
       <img :src="require('@/assets/img/pause-circle.svg')" alt="Pause">
     </div>
     <div class="column has-text-centered">
       <p>Stopper le film</p>
       <img :src="require('@/assets/img/stop-circle.svg')" alt="Stop">
     </div>
     <div class="column has-text-centered">
       <p>10 secondes pour choisir</p>
       <img :src="require('@/assets/img/clock.svg')" alt="Choise">
     </div>
     <div class="column has-text-centered">
       <p>Partager le film</p>
       <img :src="require('@/assets/img/share-2.svg')" alt="Share">
     </div>
   </div>
   <listfilm/>
   </section>
 </div>
</template>

<script>
  import Listfilm from "../components/home/listfilm";
  export default {
    components: {Listfilm},
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style>
  .image-home{
    border-radius: 1rem;
  }
</style>
