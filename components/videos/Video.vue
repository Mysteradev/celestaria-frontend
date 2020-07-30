<template>
  <div class="column is-4">
    <div class="inner-card">
      <h1>{{title}}</h1>
      <img class="image thumbnail" :src="url" alt="Image de présentation">
      <span class="openIcon">&circlearrowleft;</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Video",
      props: {
        title: {
          type: String,
          required: true
        },
        url: {
          type: String,
          required: true
        }
      }
    }
</script>

<style lang="scss" scoped>
  .inner-card {
    transition: .5s all;

    .thumbnail {
      max-height: 250px;
      width: 100%;
      border-radius: 5px;
    }

    .openIcon {
      position: absolute;
      display: block;
      text-align: center;
      line-height: 39px;
      bottom: -20px;
      right: -20px;
      background: #46B04B;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      color: #FFFFFF;
      cursor: pointer;
    }

    &:hover {
      transform: translateY(-5px);
    }
  }
</style>
