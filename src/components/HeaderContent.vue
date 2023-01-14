<template>
  <!-- Start Header -->
  <div class="header" id="header">
    <div class="overlay"></div>
    <div class="container">
      <!-- Start Header Content -->
      <div class="header-content">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="head-content">
                <h3>WELCOME TO MY WORLD</h3>
                <vue-typer
                  class="txt-rotate"
                  :text="[
                    'I am Karim Gamal .',
                    'I am a Front-End Developer .',
                    'I am Creative .',
                  ]"
                  :repeat="Infinity"
                  :shuffle="false"
                  initial-action="typing"
                  :pre-type-delay="70"
                  :type-delay="70"
                  :pre-erase-delay="2000"
                  :erase-delay="250"
                  erase-style="clear"
                  :erase-on-complete="false"
                  caret-animation="smooth"
                ></vue-typer>
                <p>based in Cairo, Egypt.</p>
                <a
                  href="https://drive.google.com/file/d/1_nQVb3ynA44yGRGahSftpDit4wANRZQT/view"
                  target="_blank"
                >
                  <button class="cv-btn">Download CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Header Content -->
    </div>
  </div>
  <!-- End Header -->
</template>

<script>
export default {
  name: "HeaderContent",
};
</script>

<style scoped>
.header {
  background-image: url(../assets/imgs/header-img.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  height: 700px;
}
@media (max-width: 576px) {
  .header {
    padding-top: 25%;
  }
}
.header .header-content {
  padding-top: 25%;
  text-align: center;
  position: relative;
}

/* @media (max-width: 576px) {
  .header .header-content {
    padding-top: 45%;
  }
} */

@media (min-width: 577px) and (max-width: 768px) {
  .header .header-content {
    padding-top: 18%;
  }
}

@media (min-width: 769px) and (max-width: 1023px) {
  .header .header-content {
    padding-top: 23%;
  }
}

@media (min-width: 1024px) and (max-width: 1200px) {
  .header .header-content {
    padding-top: 12%;
  }
}

.header .header-content .head-content {
  z-index: 5;
  position: absolute;
  margin: 0 auto;
  width: 100%;
}
.head-content span {
  color: blue !important;
}

.header .header-content .head-content h3 {
  text-transform: uppercase;
  font-size: 21px;
  letter-spacing: 5px;
  color: var(--white-color);
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .header .header-content .head-content h3 {
    font-size: 15px;
    padding: 5px;
  }
}
.vue-typer span {
  color: #fff !important;
}

.header .header-content .head-content .txt-rotate {
  color: #fff;
  font-size: 75px;
  width: 100%;
  font-weight: bold;
  margin-top: 50px;
}
@media (min-width: 0) and (max-width: 576px) {
  .header .header-content .head-content .txt-rotate {
    font-size: 26px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .header .header-content .head-content .txt-rotate {
    font-size: 27px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .header .header-content .head-content .txt-rotate {
    font-size: 45px;
  }
}

.vue-typer {
  color: var(--main-color);
  font-size: 20px;
}
.header .header-content .head-content p {
  color: var(--p-color);
  font-weight: 400;
  font-size: 21px;
  letter-spacing: 3px;
  margin-top: 15px;
}

@media (max-width: 768px) {
  .header .header-content .head-content p {
    font-size: 16px;
  }
}

.header .header-content .head-content .cv-btn {
  border: none;
  width: 200px;
  border-radius: 150px;
  height: 60px;
  margin-top: 25px;
  background-color: var(--main-color);
  color: var(--white-color);
  font-size: 18px;
  transition: all 0.2s ease-in-out;
}

.header .header-content .head-content .cv-btn:hover {
  filter: brightness(0.9);
}
</style>
