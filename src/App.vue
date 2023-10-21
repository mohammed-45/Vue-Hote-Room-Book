<template>
  <Navbar></Navbar>
  <RouterView />
  <Footer></Footer>
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: { Navbar, Footer },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$store.dispatch("getRooms");
  },
};
</script>
