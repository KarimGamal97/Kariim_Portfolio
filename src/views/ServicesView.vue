<template>
  <div class="services">
    <nav-bar></nav-bar>
    <services-content></services-content>
    <footer-content></footer-content>
  </div>
</template>

<script>
import ServicesContent from "@/components/ServicesContent.vue";
import NavBar from "@/components/NavBar.vue";
import FooterContent from "@/components/FooterContent.vue";

export default {
  name: "AboutView",
  components: {
    ServicesContent,
    NavBar,
    FooterContent,
  },
};
</script>

<style scoped></style>
