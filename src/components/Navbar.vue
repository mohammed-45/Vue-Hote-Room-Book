<template>
  <nav class="navbar">
    <div class="nav-center">
      <div class="nav-header">
        <router-link to="/">
          <img src="../assets/img/svg/logo.svg" alt="Reach Resort" />
        </router-link>
        <button type="button" class="nav-btn" @click="isOpen = !isOpen">
          <font-awesome-icon :icon="['fas', 'align-right']" class="nav-icon" />
        </button>
      </div>
      <ul :class="[{ 'show-nav': isOpen }, 'nav-links']">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/rooms">Rooms</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
