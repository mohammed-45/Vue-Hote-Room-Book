<template>
  <Hero>
    <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
      <router-link to="/rooms" class="btn-primary"> our rooms </router-link>
    </Banner>
  </Hero>
  <Services></Services>
  <FeaturedRooms></FeaturedRooms>
</template>

<script>
import Banner from "../components/Banner.vue";
import FeaturedRooms from "../components/FeaturedRooms.vue";
import Hero from "../components/Hero.vue";
import Services from "../components/Services.vue";

export default {
  components: { Hero, Banner, Services, FeaturedRooms },
};
</script>
