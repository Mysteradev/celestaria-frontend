<template>
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="">
            Celestaria
          </a>

          <div role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="isOpen = !isOpen" :class="{ 'is-active': isOpen }">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isOpen }">
          <div class="navbar-end">
              <a class="navbar-item">
                Accueil
              </a>
              <a class="navbar-item">
                Le Film
              </a>
              <a class="navbar-item">
                Contact
              </a>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
    export default {
      name: "navbar",
      data() {
        return {
          isOpen: false
        }
      }
    }
</script>

<style scoped>

</style>
