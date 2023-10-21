<template>
  <div class="banner">
    <h1>{{ title }}</h1>
    <div></div>
    <p v-if="subtitle">{{ subtitle }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: { title: String, subtitle: String },
};
</script>

<style></style>
