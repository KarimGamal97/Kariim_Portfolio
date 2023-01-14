<template>
  <div class="contact">
    <nav-bar></nav-bar>
    <contact-content></contact-content>
    <footer-content></footer-content>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ContactContent from "@/components/ContactContent.vue";
import FooterContent from "@/components/FooterContent.vue";
export default {
  name: "ContactView",
  components: {
    NavBar,
    ContactContent,
    FooterContent,
  },
};
</script>
