<template>
  <!-- Start Logos -->

  <div class="logo">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-xs-12">
          <div class="logo-box">
            <img src="../assets/imgs/Envato.png" title="Envato" />
          </div>
        </div>

        <div class="col-md-3 col-xs-12">
          <div class="logo-box">
            <img src="../assets/imgs/dribble.png" title="dribble" />
          </div>
        </div>

        <div class="col-md-3 col-xs-12">
          <div class="logo-box">
            <img src="../assets/imgs/Envato.png" title="Envato" />
          </div>
        </div>

        <div class="col-md-3 col-xs-12">
          <div class="logo-box">
            <img src="../assets/imgs/behance.png" title="behance" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- End Logos -->
</template>

<script>
export default {
  name: "LogosContent",
};
</script>

<style scoped>
/* Start logo */

.logo {
  background-color: var(--section-color);
  padding: 8% 8%;
}

.logo .logo-box {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
}

.logo .logo-box img {
  width: 90%;
}

@media (max-width: 768px) {
  .logo .logo-box img {
    width: 50%;
  }
}

/* End logo */
</style>
