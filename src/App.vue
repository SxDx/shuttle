<template>
  <div
    class="
      flex
      justify-center
      items-center
      w-screen
      h-screen
      font-mono
      relative
    "
  >
    <div
      id="blob1"
      class="
        absolute
        animate-blob
        filter
        blur-xl
        opacity-50
        w-96
        h-96
        rounded-full
        left-[45%]
        top-[25%]
      "
    ></div>
    <div
      id="blob2"
      class="
        absolute
        animate-blob
        animation-delay-2000
        filter
        blur-xl
        opacity-50
        w-96
        h-96
        rounded-full
        right-[45%]
        top-[25%]
      "
    ></div>
    <div
      id="blob3"
      class="
        absolute
        animate-blob
        animation-delay-4000
        filter
        blur-xl
        opacity-50
        w-96
        h-96
        rounded-full
        right-[30%]
        top-[45%]
      "
    ></div>

    <div
      class="
        bg-white/70
        dark:bg-primary-400/90
        rounded-2xl
        shadow-xl
        w-5/6
        lg:w-2/3
        flex
        overflow-hidden
        relative
      "
    >
      <div class="hidden md:block w-0 md:w-4/12 relative">
        <img src="./assets/bg.gif" role="presentation" />
        <weather />
      </div>
      <div class="w-full lg:w-8/12 p-8 flex flex-col">
        <h1 class="font-semibold text-2xl lg:text-3xl mb-6">Welc0me René</h1>
        <div class="flex items-center flex-grow-1 h-full backdrop-blur-xl">
          <div
            class="
              grid grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              w-full
              gap-y-5
              lg:gap-y-11
            "
          >
            <div v-for="link in links" :key="link.name">
              <page :config="link" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <mode-switch />
  </div>
</template>

<script setup>
import Page from "./components/Page.vue";
import Weather from "./components/Weather.vue";
import ModeSwitch from "./components/ModeSwitch.vue";

const links = [
  {
    name: "Github",
    url: "https://github.com",
    color: "#FFFFFF",
  },
  {
    name: "Google Cloud",
    url: "https://console.cloud.google.com",
    color: "#1A73E8",
  },
  {
    name: "Mongodb Atlas",
    url: "https://cloud.mongodb.com",
    color: "#13AA53",
  },
  {
    name: "Hacker News",
    url: "https://vue-hn.herokuapp.com/top",
    color: "#CD201F",
  },
  {
    name: "Product Hunt",
    url: "https://www.producthunt.com",
    color: "#DA552F",
  },
  {
    name: "Standard",
    url: "https://www.derstandard.at/",
    color: "#E54463",
  },
  {
    name: "Presse",
    url: "https://diepresse.com/",
    color: "#01649E",
  },
  {
    name: "Verge",
    url: "https://www.theverge.com",
    color: "#E2127A",
  },
];
</script>

<style scoped>
#blob1 {
  background-color: #ab7280;
}
#blob2 {
  background-color: #517493;
}
#blob3 {
  background-color: #19385c;
}
</style>
