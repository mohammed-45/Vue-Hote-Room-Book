<template>
  <section class="featured-rooms">
    <SectionTitle title="featured rooms"></SectionTitle>
    <div class="featured-rooms-center">
      <div v-for="(room, index) in featuredRooms" :key="index">
        <Room :key="room.id" :room="room"></Room>
      </div>
    </div>
  </section>
</template>

<script>
import Room from "./Room.vue";
import SectionTitle from "./SectionTitle.vue";
export default {
  name: "FeaturedRooms",
  components: { Room, SectionTitle },

  computed: {
    featuredRooms() {
      return this.$store.getters.featuredRooms;
    },
  },
};
</script>

<style></style>
