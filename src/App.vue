<template>
  <div id="app">
    <GoogleMap
      :iss-location="issLocation"
    />
    <LiveStream />
  </div>
</template>

<script>
import GoogleMap from './components/GoogleMap';
import LiveStream from './components/LiveStream';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    GoogleMap,
    LiveStream
  },
  data: () => ({
    issLocation: {lat: 0, lng: 0},
  }),
  mounted() {
    this.getISS();
    setInterval(this.getISS, 5000);
  },
  methods: {
    getISS: function() {
      const setISSLocation = this.setISSLocation;
      axios.get('http://api.open-notify.org/iss-now.json')
        .then(function (response) {
          // handle success
          const issLocation = {
            lat: Number(response.data.iss_position.latitude),
            lng: Number(response.data.iss_position.longitude)
          }
          setISSLocation(issLocation)
        })
    },
    setISSLocation: function(issLocation) {
      this.issLocation = issLocation
    }
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
