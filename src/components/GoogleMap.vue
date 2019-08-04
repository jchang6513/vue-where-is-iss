<template>
  <div class="google-map">
    <gmap-map
      class="gmap-map"
      :center="center"
      :zoom="3"
      :class="{hide: loading}"
    >
      <gmap-marker
        :position="marker.position"
        :clickable="true"
        :draggable="true"
        @click="center=marker.position"
      >
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  props: {
    issLocation: Object,
  },
  data: () => {
    return {
      center: { lat: 0, lng: 0 },
      loading: false,
      marker: {
        position: {lat: 23, lng: -120 },
      }
    };
  },

  mounted() {
    console.log(this.issLocation)
    // this.geolocate();
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
    },
    setISSLocation: function(issLocation) {
      this.center = issLocation
      this.marker.position = issLocation
    }
  },

  watch: {
    issLocation() {
      this.setISSLocation(this.issLocation)
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
