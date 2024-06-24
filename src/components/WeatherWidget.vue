<template>
  <q-card class="weather-widget">
    <q-card-section>
      <div class="text-h5 text-center">Cuaca</div>
      <q-input
        v-model="city"
        label="Masukkan nama kota"
        outlined
        dense
        @keyup.enter="getWeather"
      />
      <q-btn @click="getWeather" color="primary" label="Cari" />
      <div v-if="weatherData" class="q-mt-md">
        <div class="text-subtitle1"><strong>Lokasi: </strong>{{ weatherData.name }}</div>
        <div class="text-h6 text-orange">
          <strong>Temperatur: </strong>{{ weatherData.main.temp }}°C
        </div>
        <div><strong>Deskripsi: </strong>{{ weatherData.weather[0].description }}</div>
      </div>
      <div v-else-if="error" class="text-red text-center q-mt-md">{{ error }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      weatherData: null,
      city: '',
      apiKey: '645965c182097623959d126d1b8aca9d', // Ganti dengan API key OpenWeatherMap Anda
      error: null
    }
  },
  methods: {
    async getWeather() {
      if (!this.city) return
      this.error = null
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: this.city,
            units: 'metric',
            appid: this.apiKey
          }
        })
        console.log(response.data)
        this.weatherData = response.data
      } catch (error) {
        console.error(error)
        this.error = 'Tidak dapat menemukan data cuaca untuk kota yang dicari.'
        this.weatherData = null
      }
    }
  }
}
</script>

<style scoped>
.weather-widget {
  max-width: 400px;
  margin: 20px auto;
  background-image: url('https://wallpapercave.com/wp/wp8624231.jpg'); /* Ganti dengan URL gambar latar belakang Anda */
  background-size: cover;
  background-position: center;
  color: white; /* Ubah warna teks agar kontras dengan latar belakang */
}
.text-center {
  text-align: center;
}
.text-orange {
  color: orange;
}
.text-red {
  color: red;
}
</style>
