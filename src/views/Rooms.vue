<template>
  <Hero hero="roomsHero">
    <Banner title="our rooms">
      <router-link to="/" class="btn-primary"> return home </router-link>
    </Banner>
  </Hero>

  <RoomsContainer></RoomsContainer>
</template>

<script>
import Hero from "../components/Hero.vue";
import Banner from "../components/Banner.vue";
import RoomsContainer from "../components/RoomsContainer/RoomsContainer.vue";
export default {
  name: "Rooms",
  components: { Hero, Banner, RoomsContainer },
};
</script>
