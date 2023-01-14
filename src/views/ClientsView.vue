<template>
  <div class="client">
    <nav-bar></nav-bar>
    <clients-content></clients-content>
    <logos-content></logos-content>
    <footer-content></footer-content>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ClientsContent from "@/components/ClientsContent.vue";
import FooterContent from "@/components/FooterContent.vue";
import LogosContent from "@/components/LogosContent.vue";
export default {
  name: "ClientsView",
  components: { NavBar, ClientsContent, FooterContent, LogosContent },
};
</script>
