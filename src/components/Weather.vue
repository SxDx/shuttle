<template>
  <div
    v-if="loaded"
    class="
      absolute
      top-2
      right-2
      text-lg
      font-light
      text-white/70
      flex
      items-center
    "
  >
    <i class="wi mr-2" :class="icon"></i> <span>{{ temp }}°C</span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CryptoJS from "crypto-js";

const loaded = ref(false);
const temp = ref(0);
const icon = ref(0);

let apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const secret = localStorage.secret;

if(secret) {
  console.log(CryptoJS.AES.encrypt(apiKey, secret).toString());

  const bytes = CryptoJS.AES.decrypt(apiKey, secret);
  apiKey = bytes.toString(CryptoJS.enc.Utf8);
}

if (apiKey) {
  const apiBase = "https://api.openweathermap.org/data/2.5/weather";

  const city = "Vienna";
  const country = "AT";
  const query = `${apiBase}?q=${city},${country}&appid=${apiKey}&units=metric`;

  fetch(query)
    .then((response) => response.json())
    .then((result) => {
      temp.value = Math.round(result.main.temp);
      icon.value = `wi-owm-${result.weather[0].id}`;
      loaded.value = true;
    });
}
</script>
