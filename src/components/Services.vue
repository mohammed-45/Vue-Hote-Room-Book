<template>
  <section class="services">
    <SectionTitle title="services"></SectionTitle>
    <div class="services-center">
      <article class="services">
        <span
          ><font-awesome-icon :icon="['fas', 'martini-glass-citrus']"
        /></span>
        <h6>free cocktails</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est
          eaque error provident unde eligendi.
        </p>
      </article>
      <article class="services">
        <span><font-awesome-icon :icon="['fas', 'person-hiking']" /></span>
        <h6>endless hiking</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est
          eaque error provident unde eligendi.
        </p>
      </article>
      <article class="services">
        <span><font-awesome-icon :icon="['fas', 'van-shuttle']" /></span>
        <h6>free shuttle</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est
          eaque error provident unde eligendi.
        </p>
      </article>
      <article class="services">
        <span><font-awesome-icon :icon="['fas', 'beer-mug-empty']" /></span>
        <h6>storages beer</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est
          eaque error provident unde eligendi.
        </p>
      </article>
    </div>
  </section>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
export default {
  name: "Services",
  components: { SectionTitle },
  data() {
    return {};
  },
};
</script>
