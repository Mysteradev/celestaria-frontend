<template>
  <div class="column is-3">
    <div class="card" @click="setActive(id)" :class="{'selected': this.activeVideo === id}">
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
            <span class="icon rounded-icon" @click="openLightbox">
              <FontAwesomeIcon :icon="['fas', 'compress']"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    import { faCompress } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { library } from "@fortawesome/fontawesome-svg-core";

    library.add(faCompress);

    export default {
      name: "Video",
      components: {
        FontAwesomeIcon
      },
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
      computed: mapState([
        'videoMaker/activeVideo'
      ]),
      methods: {
        ...mapMutations({
          setActiveVideo: 'videoMaker/SET_ACTIVE_VIDEO'
        }),
        openLightbox() {
          this.$emit("event-open-lightbox");
        },
        setActive(index) {
          this.setActiveVideo(index);
        }
      }
    }
</script>

<style lang="scss" scoped>
  .card {
    background-color: #f8f8f8;
    height: 100%;
    transition: .5s;
    border-radius: 10px;

    img {
      border-radius: 10px 10px 0 0;
    }

    &:hover {
      transform: translateY(-5px);
    }

    .clickable {
      cursor: pointer;
    }

    .rounded-icon {
      border-radius: 50%;
    }
  }

  .selected {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
    background: white;
  }
</style>
