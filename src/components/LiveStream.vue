<template>
  <div class="live-stream">
   <iframe
    src="https://www.youtube.com/embed/ddFvjfvPnqk?autoplay=1"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    height="180px"
    width="360px"
  />
  </div>
</template>

<script>
export default {
  name: "LiveStream",
};
</script>

<style lang="scss" scoped>
.live-stream {
  bottom: 10px;
  left: 10px;
  position: absolute;
}
</style>

