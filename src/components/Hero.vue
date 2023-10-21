<template>
  <header
    :class="hero"
    :style="[
      img
        ? {
            background: 'url(' + img + ') center/cover no-repeat',
            minHeight: '60vh',
          }
        : { background: 'url(' + defaultImg + ') center/cover no-repeat' },
    ]"
  >
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "Hero",
  props: {
    hero: {
      type: String,
      default: "defaultHero",
    },
    img: String,
  },
  data() {
    return {
      defaultImg: new URL("../assets/img/jpeg/room-1.jpeg", import.meta.url)
        .href,
    };
  },
};
</script>
