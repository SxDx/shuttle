<template>
  <div>
    <a
      :href="config.url"
      class="font-light dark:text-white/70 underline text-sm lg:text-base"
      target="_blank"
      rel="noopener noreferer"
      :data-hover-color="config.color"
    >
      {{ config.name }}
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  config: Object,
});
</script>

<style scoped>
a {
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
  text-decoration-color: transparent;
}

a:hover {
  /* color: v-bind(config.color); */
  text-decoration-color: v-bind(config.color);
  transition: text-decoration-color 500ms;
}
</style>
