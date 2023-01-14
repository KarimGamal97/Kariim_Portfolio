<template>
  <div class="home">
    <nav-bar></nav-bar>
    <header-content></header-content>
    <footer-content></footer-content>
  </div>
</template>

<script>
import HeaderContent from "@/components/HeaderContent.vue";
import NavBar from "@/components/NavBar.vue";
import FooterContent from "@/components/FooterContent.vue";

export default {
  name: "HomeView",
  components: { NavBar, HeaderContent, FooterContent },
};
</script>

<style scoped></style>
