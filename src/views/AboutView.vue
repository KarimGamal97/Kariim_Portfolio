<template>
  <div class="about">
    <nav-bar></nav-bar>
    <about-content></about-content>
    <footer-content></footer-content>
  </div>
</template>

<script>
import AboutContent from "@/components/AboutContent.vue";
import NavBar from "@/components/NavBar.vue";
import FooterContent from "@/components/FooterContent.vue";

export default {
  name: "AboutView",
  components: {
    AboutContent,
    NavBar,
    FooterContent,
  },
};
</script>

<style scoped></style>
