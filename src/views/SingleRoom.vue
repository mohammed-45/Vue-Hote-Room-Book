<template>
  <Hero :img="mainImage">
    <Banner :title="room.name">
      <router-link to="/rooms" class="btn-primary"> back to rooms </router-link>
    </Banner>
  </Hero>
  <section class="single-room">
    <div class="single-room-images">
      <div v-for="(item, index) in defaultImages" :key="index">
        <img :src="item" :alt="room.name" />
      </div>
    </div>

    <div class="single-room-info">
      <article class="desc">
        <h3>details:</h3>
        <p>{{ room.description }}</p>
      </article>

      <article class="info">
        <h3>information:</h3>
        <h6>price : ${{ room.price }}</h6>
        <h6>size : {{ room.size }} SQFT</h6>
        <h6 v-if="room.capacity > 1">
          max capacity :
          {{ room.capacity }} people
        </h6>
        <h6 v-else>
          max capacity :
          {{ room.capacity }} person
        </h6>
        <h6 v-if="room.pets">pets allowed</h6>
        <h6 v-else>no pets allowed</h6>
        <h6 v-if="room.breakfast">free breakfast included</h6>
      </article>
    </div>
  </section>

  <section class="room-extras">
    <h6>extras:</h6>
    <ul class="extras">
      <div v-for="(item, index) in room.extras" :key="index">
        <li>- {{ item }}</li>
      </div>
    </ul>
  </section>
</template>

<script>
import Banner from "../components/Banner.vue";
import Hero from "../components/Hero.vue";
export default {
  name: "SingleRoom",
  components: { Banner, Hero },
  data() {
    return {
      defaultBcg: new URL("../assets/img/jpeg/room-1.jpeg", import.meta.url)
        .href,
      room: JSON.parse(localStorage.getItem("room")),
    };
  },
  beforeMount() {
    this.$store.commit("getSingleRoom", this.$route.params.slug);
  },
  mounted() {
    this.room = JSON.parse(localStorage.getItem("room"));
  },
  computed: {
    mainImage() {
      return this.room.images.filter((img, i) => i === 0);
    },
    defaultImages() {
      return this.room.images.filter((img, i) => i !== 0);
    },
  },
};
</script>
