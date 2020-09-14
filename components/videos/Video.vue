<template>
  <div class="column is-3">
    <div class="card" @click="setActive(id)" :class="{'selected': this.$store.getters.activeVideo === id}">
      <div class="card-image">
        <figure class="image is-5by3">
          <img :src="thumbnailUrl" alt="Thumbnail image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-5">{{ title }}</p>
          </div>
          <div class="media-right clickable">
            <span class="icon has-text-success" @click="openLightbox">
              <i class="">⇱</i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Video",
      props: {
        id: {
          type: Number,
          required: true
        },
        title: {
          type: String,
          required: true
        },
        thumbnailUrl: {
          type: String,
          required: true
        }
      },
      methods: {
        openLightbox() {
          this.$emit("event-open-lightbox");
        },
        setActive(index) {
          this.$store.commit('SET_ACTIVE_VIDEO', index);
        }
      }
    }
</script>

<style lang="scss" scoped>
  .card {
    height: 100%;
    transition: .5s;

    &:hover {
      transform: translateY(-5px);
    }

    .clickable {
      cursor: pointer;
    }
  }

  .selected {
    -webkit-box-shadow: 0 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    box-shadow: 0 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
  }
</style>
