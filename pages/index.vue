<template>
  <div>
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container" >
            <div class="columns mt-6" >
              <div class="column">
                <h1 class="title">
                  <span class="is-size-1">Celestaria</span><br><br>
                  Le film intéractif <br>où vous avez les clés du jeu.
                </h1>
                  <button class="button is-link is-light">Créer votre film ! →</button>
              </div>
              <div class="column has-text-centered">
                <figure class="is-inline-block">
                  <img :src="require('@/assets/img/3281755.jpg')" alt="Key" class="image">
                </figure>
              </div>
            </div>
            <div class="columns has-text-centered banderole">
              <div class="column">
                <figure class="is-inline-block">
                  <img :src="require('@/assets/img/video.svg')" alt="Key" class="image is-64x64">
                </figure>
                <p><animated-number :value="film" :duration="1700" :round="1"/> films déjà crées</p>
              </div>
              <div class="column">
                <figure class="is-inline-block">
                  <img :src="require('@/assets/img/minute.svg')" alt="Key" class="image  is-64x64">
                </figure>
                <p><animated-number :value="minutes" :duration="1700" :round="1"/> minutes visionnées</p>
              </div>
              <div class="column">
                <figure class="is-inline-block">
                  <img :src="require('@/assets/img/video-player.svg')" alt="Key" class="image anime-img is-64x64">
                </figure>
                <p><animated-number :value="totalFilm" :duration="1700" :round="1"/> films peuvent êtres crées</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    <div class="container mb-6">
      <div class="columns">
        <div class="column">
          <h1 class="is-size-1 has-text-centered title">Celestaria</h1>
          <h3 class="is-size-5 has-text-justified">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto atque aut commodi ea earum facere fuga, ipsum iste itaque necessitatibus officiis pariatur quo repellat repellendus repudiandae sint, unde, vitae..Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto atque aut commodi ea earum facere fuga, ipsum iste itaque necessitatibus officiis pariatur quo repellat repellendus repudiandae sint, unde, vitae..</h3>
        </div>
        <div class="column">
          <img :src="require('@/assets/img/key-home.png')" alt="Image home page" class="image-home image">
        </div>
      </div>
    </div>
    <div class="container banderole py-6 my-6 px-6">
      <h3 class="title is-size-3 ">Comment créer son film ?</h3>
      <div class="columns ">
        <div class="column has-text-centered">
          <div class="fond-blanc">
            <b>Choisissez vos chapitres</b><br><br>
            <figure class="is-inline-block">
              <img :src="require('@/assets/img/choice.svg')" alt="Key" class="image anime-img is-64x64">
            </figure><br><br>
            <p>Choissisez vos 6 chapitres </p>
          </div>
        </div>
        <div class="column has-text-centered">
          <div class="fond-blanc">
          <b>Donnez un titre a votre film</b><br><br>
          <figure class="is-inline-block">
            <img :src="require('@/assets/img/title.svg')" alt="Key" class="image anime-img is-64x64">
          </figure><br><br>
          <p>Pour finalisez votre film, nommez le </p>
          </div>
        </div>
        <div class="column has-text-centered">
          <div class="fond-blanc">
          <b>Visionez et partagez le !</b><br><br>
          <figure class="is-inline-block">
            <img :src="require('@/assets/img/share.svg')" alt="Key" class="image anime-img is-64x64">
          </figure><br><br>
          <p>Visionnez votre film et partagez le à vos amis !</p>
          </div>
        </div>
      </div>
    </div>
    <listfilm/>
  </div>
</template>

<script>

import Listfilm from "../components/home/listfilm";
import AnimatedNumber from "animated-number-vue";

export default {
  components: {Listfilm, AnimatedNumber},
  data() {
    return {
      film: 93898,
      minutes : 838739,
      totalFilm : 10990
    }
  }
}
</script>
<style scoped>
.div-test{
  border: deeppink solid 1px;
}
.image-home{
  border-radius: 11px ;
}
.banderole{
  background-color: #f7f7f7;
  border-radius: 11px ;
}
.fond-blanc{
  background-color: #ffffff;
  padding: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 11px ;
}
</style>


