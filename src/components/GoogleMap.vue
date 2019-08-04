<template>
  <div class="google-map">
    <gmap-map
      class="gmap-map"
      :center="center"
      :zoom="3"
      :class="{hide: loading}"
    >
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data: () => {
    return {
      center: { lat: 0, lng: 0 },
      loading: false,
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    geolocate: function() {
      this.loading = true;
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .gmap-map {
    height: 100vh;
    opacity: 1;
    widows: 100vw;
    &.hide {
      opacity: 0;
    }
  }
</style>
