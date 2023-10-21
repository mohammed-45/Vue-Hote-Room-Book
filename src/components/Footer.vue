<template>
  <footer class="footer">
    <h2>Beach Resort | Hotel Room Book</h2>
    <p>
      &copy; <span>{{ year }}</span> BeachResort.com - All Rights Copyright
      Reserved To
      <a target="_blank" rel="noreferrer" href="https://github.com/mohammed-45">
        Muhammed Farghaly
      </a>
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
