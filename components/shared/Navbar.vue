<template>
    <div class="container pt-2">
      <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
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
            <NuxtLink to="/" class="navbar-item">
              Accueil
            </NuxtLink>

            <a class="navbar-item">
              Contact
            </a>
            <NuxtLink to="/" class="navbar-item">
              <button class="button is-link is-light">Créer mon film →</button>
            </NuxtLink>
            <NuxtLink to="lesFilms" class="navbar-item">
              <button class="button is-blank is-link">Voir les films</button>
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
    export default {
      name: "Navbar",
      data() {
        return {
          isOpen: false
        }
      }
    }
</script>

<style lang="scss" scoped>
  .button {
    border-radius: 11px;
  }

  .is-link {
    padding: 25px;

    &.is-blank {
      color: #2160c4;
      background: none;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19)
    }
  }

  .navbar-item {
    &:hover {
      background: none;
    }
  }
</style>


