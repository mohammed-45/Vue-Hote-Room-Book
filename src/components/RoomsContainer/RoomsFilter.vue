<template>
  <section class="filter-container">
    <SectionTitle title="search rooms"></SectionTitle>

    <form class="filter-form">
      <div class="form-group">
        <label for="type">rooms type</label>
        <select
          name="type"
          id="type"
          :value="type"
          v-model="type"
          @change="filterRooms"
          class="form-control"
        >
          <option v-for="(option, index) in types" :key="index" :value="option">
            {{ option }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="capacity">guests</label>
        <select
          name="capacity"
          id="capacity"
          :value="capacity"
          v-model="capacity"
          @change="filterRooms"
          class="form-control"
        >
          <option
            v-for="(option, index) in people"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="price">room price ${{ price }}</label>
        <input
          type="range"
          name="price"
          id="price"
          :min="minPrice"
          :max="maxPrice"
          v-model="price"
          @input="filterRooms"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="size">room size</label>

        <div class="size-inputs">
          <input
            type="number"
            name="minSize"
            id="size"
            v-model="minSize"
            @input="filterRooms"
            class="size-input"
          />
          <input
            type="number"
            name="maxSize"
            id="size"
            v-model="maxSize"
            @input="filterRooms"
            class="size-input"
          />
        </div>
      </div>

      <div class="form-group">
        <div class="single-extra">
          <input
            type="checkbox"
            name="breakfast"
            id="breakfast"
            v-model="breakfast"
            @change="filterRooms"
          />
          <label for="breakfast">breakfast</label>
        </div>

        <div class="single-extra">
          <input
            type="checkbox"
            name="pets"
            id="pets"
            v-model="pets"
            @change="filterRooms"
          />
          <label for="pets">pets</label>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import SectionTitle from "../SectionTitle.vue";
export default {
  name: "RoomsFilter",
  props: { rooms: Array },
  components: { SectionTitle },
  emits: ["sorted-rooms"],
  data() {
    return {
      type: "all",
      capacity: 1,
      price: 0,
      minSize: 0,
      maxSize: 0,
      breakfast: false,
      pets: false,
      minPrice: 0,
      maxPrice: 0,
      types: ["all", ...this.getUnique(this.rooms, "type")],
      people: [1, ...this.getUnique(this.rooms, "capacity")],
      sortedRooms: [],
    };
  },
  methods: {
    getUnique(items, value) {
      return [...new Set(items.map((item) => item[value]))];
    },
    filterRooms() {
      let tempRooms = [...this.rooms];
      // transform value
      this.capacity = parseInt(this.capacity);
      this.price = parseInt(this.price);
      // filter by type
      if (this.type !== "all") {
        tempRooms = tempRooms.filter((room) => room.type === this.type);
        console.log(tempRooms);
      }
      // filter by capacity
      if (this.capacity !== 1) {
        tempRooms = tempRooms.filter((room) => room.capacity >= this.capacity);
      }
      // filter by price
      tempRooms = tempRooms.filter((room) => room.price <= this.price);
      // filter bt size
      tempRooms = tempRooms.filter(
        (room) => room.size >= this.minSize && room.size <= this.maxSize
      );
      // filter by breakfast
      if (this.breakfast) {
        tempRooms = tempRooms.filter((room) => room.breakfast === true);
      }
      // filter by pets
      if (this.pets) {
        tempRooms = tempRooms.filter((room) => room.pets === true);
      }
      this.sortedRooms = tempRooms;
      this.$emit("sorted-rooms", tempRooms);
    },
  },
  mounted() {
    this.maxPrice = Math.max(...this.rooms.map((item) => item.price));
    this.maxSize = Math.max(...this.rooms.map((item) => item.size));
    this.price = this.maxPrice;
    this.filterRooms();
  },
  updated() {
    // this.$store.getters.sortedRooms;
  },
  computed: {
    // filterRooms() {
    //   let tempRooms = [...this.rooms];
    //   // transform value
    //   this.capacity = parseInt(this.capacity);
    //   this.price = parseInt(this.price);
    //   // filter by type
    //   if (this.type !== "all") {
    //     tempRooms = tempRooms.filter((room) => room.type === this.type);
    //   }
    //   // filter by capacity
    //   if (this.capacity !== 1) {
    //     tempRooms = tempRooms.filter((room) => room.capacity >= this.capacity);
    //   }
    //   // filter by price
    //   tempRooms = tempRooms.filter((room) => room.price <= this.price);
    //   // filter bt size
    //   tempRooms = tempRooms.filter(
    //     (room) => room.size >= this.minSize && room.size <= this.maxSize
    //   );
    //   // filter by breakfast
    //   if (this.breakfast) {
    //     tempRooms = tempRooms.filter((room) => room.breakfast === true);
    //   }
    //   // filter by pets
    //   if (this.pets) {
    //     tempRooms = tempRooms.filter((room) => room.pets === true);
    //   }
    //   this.sortedRooms = tempRooms;
    // },
  },
};
</script>

<style></style>
