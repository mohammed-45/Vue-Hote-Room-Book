<template>
  <section class="roomslist">
    <div class="roomslist-center">
      <div v-for="(item, index) in rooms" :key="index">
        <Room :room="item" />
      </div>
    </div>
  </section>
</template>

<script>
import Room from "../Room.vue";
export default {
  name: "RoomsList",
  components: { Room },
  props: ["rooms"],
  data() {
    return {
      // rooms: this.$store.state.sortedRooms,
    };
  },
};
</script>
