<template>
  <div class="section">
    <div class="container">
      <VideosList/>
    </div>
  </div>

</template>

<script>
  import VideosList from "../components/videos/VideosList";
  export default {
    name: "videos",
    components: {VideosList}
  }
</script>

<style scoped>

</style>
