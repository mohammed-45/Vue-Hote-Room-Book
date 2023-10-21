import { createStore } from "vuex";
import items from "../Data/data";

export const store = createStore({
  state() {
    return {
      rooms: [],
      room: [],
      // sortedRooms: [],
      // type: "all",
      // capacity: 1,
      // price: 0,
      // minSize: 0,
      // maxSize: 0,
      // breakfast: false,
      // pets: false,
    };
  },
  mutations: {
    formatDate(state, items) {
      let tempItems = items.map((item) => {
        let id = item.sys.id;
        let images = item.fields.images.map((image) => image.fields.file.url);

        let room = { ...item.fields, images, id };
        return room;
      });
      state.rooms = tempItems;
      state.sortedRooms = tempItems;
    },
    getSingleRoom(state, slug) {
      let tempRooms = [...state.rooms];
      const room = tempRooms.find((room) => room.slug === slug);
      state.room = room;
      localStorage.setItem("room", JSON.stringify(state.room));
    },
    // sortedRooms(state) {
    //   let tempRooms = [...state.rooms];

    //   // transform value
    //   state.capacity = parseInt(state.capacity);
    //   state.price = parseInt(state.price);

    //   // filter by type
    //   if (state.type !== "all") {
    //     tempRooms = tempRooms.filter((room) => room.type === state.type);
    //   }

    //   // filter by capacity
    //   if (state.capacity !== 1) {
    //     tempRooms = tempRooms.filter((room) => room.capacity >= state.capacity);
    //   }

    //   // filter by price
    //   tempRooms = tempRooms.filter((room) => room.price <= state.price);

    //   // filter bt size
    //   tempRooms = tempRooms.filter(
    //     (room) => room.size >= state.minSize && room.size <= state.maxSize
    //   );

    //   // filter by breakfast
    //   if (state.breakfast) {
    //     tempRooms = tempRooms.filter((room) => room.breakfast === true);
    //   }

    //   // filter by pets
    //   if (state.pets) {
    //     tempRooms = tempRooms.filter((room) => room.pets === true);
    //   }
    //   state.sortedRooms = tempRooms;
    // },
  },
  getters: {
    featuredRooms(state) {
      return state.rooms.filter((room) => room.featured === true);
    },
  },
  actions: {
    getRooms({ commit }) {
      commit("formatDate", items);
    },
  },
});
