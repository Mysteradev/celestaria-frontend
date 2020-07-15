<template>
  <div class="columns mt-5 mb-5" >
    <div class="column" v-for="title in titles" :key="title">
      <p>{{ title }}</p>
      <img :src="require('@/assets/img/img-home.jpg')" alt="" class="image-home">
    </div>
  </div>
</template>

<script>
    export default {
        name: "listfilm",
      data(){
        return{
          titles : ['Un film cool', 'Le vrai film', 'Un film génial']
        }
      }
    }
</script>

<style scoped>
  .image-home{
    border-radius: 1rem;
  }
</style>
