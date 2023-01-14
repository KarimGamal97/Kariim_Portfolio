<template>
  <div class="work">
    <nav-bar></nav-bar>
    <work-content></work-content>
    <footer-content></footer-content>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterContent from "@/components/FooterContent.vue";
import WorkContent from "@/components/WorkContent.vue";

export default {
  name: "AboutView",
  components: {
    NavBar,
    FooterContent,
    WorkContent,
  },
};
</script>

<style scoped></style>
