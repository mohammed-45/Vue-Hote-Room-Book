<template>
  <RoomsFilter :rooms="rooms" @sorted-rooms="filteredRooms"></RoomsFilter>
  <RoomsList :rooms="sorted"></RoomsList>
</template>

<script>
import RoomsFilter from "./RoomsFilter.vue";
import RoomsList from "./RoomsList.vue";
export default {
  name: "RoomsContainer",
  components: { RoomsFilter, RoomsList },
  data() {
    return {
      rooms: this.$store.state.rooms,
      sorted: [],
    };
  },
  methods: {
    filteredRooms(rooms) {
      // console.log(rooms);
      this.sorted = rooms;
    },
  },
};
</script>
