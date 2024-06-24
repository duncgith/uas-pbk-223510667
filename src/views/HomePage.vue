<template>
    <q-page padding>
      <WeatherWidget />
    </q-page>
  </template>
  
  <script>
  import WeatherWidget from '../components/WeatherWidget.vue'
  
  export default {
    components: {
      WeatherWidget
    }
  }
  </script>
  
  <style>
body {
  background-image: url(https://wallpapercave.com/wp/wp9274811.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>