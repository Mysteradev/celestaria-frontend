<template>
  <div class="column is-3">
    <a :href="`/movie/${title}`">
      <div class="card">
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
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>

export default {
  name: "movieCard",
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
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #f8f8f8;
  height: 100%;
  transition: .5s;
  border-radius: 10px;
  cursor: pointer;

  img {
    border-radius: 10px 10px 0 0;
  }

  &:hover {
    transform: translateY(-5px);
  }

  .clickable {
    cursor: pointer;
  }
}
</style>
