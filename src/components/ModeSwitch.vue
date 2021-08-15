<template>
  <div class="absolute top-2 right-2 opacity-0 hover:opacity-100 transition-opacity">
    <Switch
      v-model="darkMode"
      class="
        relative
        inline-flex
        items-center
        h-6
        rounded-full
        w-11
        dark:bg-yellow-400
        bg-gray-700
      "
    >
      <span class="sr-only">Enable notifications</span>
      <span
        :class="darkMode ? 'translate-x-6' : 'translate-x-1'"
        class="inline-block w-4 h-4 transform bg-white rounded-full"
      />
    </Switch>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { Switch } from "@headlessui/vue";

let initalDarkMode = true;
if ("darkMode" in localStorage) {
  initalDarkMode = localStorage.darkMode === "true";
}

const darkMode = ref(initalDarkMode);

watchEffect(() => {
  localStorage.darkMode = darkMode.value;

  if (darkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
</script>
