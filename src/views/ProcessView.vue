<template>
  <div class="process">
    <nav-bar></nav-bar>
    <process-component></process-component>
    <footer-content></footer-content>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ProcessComponent from "@/components/ProcessComponent.vue";
import FooterContent from "@/components/FooterContent.vue";
export default {
  name: "ProcessView",
  components: {
    NavBar,
    ProcessComponent,
    FooterContent,
  },
};
</script>
