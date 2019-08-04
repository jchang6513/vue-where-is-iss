<template>
  <div id="app">
    <GoogleMap />
  </div>
</template>

<script>
import GoogleMap from './components/GoogleMap'

export default {
  name: 'app',
  components: {
    GoogleMap
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
