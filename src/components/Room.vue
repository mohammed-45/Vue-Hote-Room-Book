<template>
  <article class="room">
    <div class="img-container">
      <img :src="room.images[0] || defaultImg" alt="single room" />

      <div class="price-top">
        <h6>$ {{ room.price }}</h6>
        <p>per night</p>
      </div>

      <router-link
        :to="{ path: '/rooms/' + room.slug }"
        class="btn-primary room-link"
      >
        Feature
      </router-link>
    </div>
    <p class="room-info">{{ room.name }}</p>
  </article>
</template>

<script>
export default {
  name: "Room",
  props: ["room"],
  data() {
    return {
      defaultImg: new URL("../assets/img/jpeg/room-1.jpeg", import.meta.url)
        .href,
    };
  },
};
</script>
