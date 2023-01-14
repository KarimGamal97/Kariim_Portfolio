<template>
  <div class="why">
    <nav-bar></nav-bar>
    <why-content></why-content>
    <skills-content></skills-content>
    <hire-content></hire-content>
    <footer-content></footer-content>
  </div>
</template>

<script>
import WhyContent from "@/components/WhyContent.vue";
import NavBar from "@/components/NavBar.vue";
import SkillsContent from "@/components/SkillsContent.vue";
import HireContent from "@/components/HireContent.vue";
import FooterContent from "@/components/FooterContent.vue";

export default {
  name: "AboutView",
  components: {
    WhyContent,
    NavBar,
    FooterContent,
    SkillsContent,
    HireContent,
  },
};
</script>

<style scoped></style>
