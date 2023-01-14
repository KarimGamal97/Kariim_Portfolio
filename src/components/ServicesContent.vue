<template>
  <!-- Start Services -->
  <div class="service" id="service">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="service-title">
            <h3>Our Services</h3>
            <p>
              How I can help take your next project to new heights! Thousands of
              clients have procured exceptional results while working with Me.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12">
          <div
            class="service-box"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            <font-awesome-icon class="font-icon" :icon="['fas', 'palette']" />
            <h4>Graphic Design</h4>
            <p>
              We're smart, we're hard working, we're easy to talk to, and we
              love a challenge.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12">
          <div
            class="service-box"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            <font-awesome-icon class="font-icon" :icon="['fas', 'desktop']" />
            <h4>Web Design</h4>
            <p>
              We're smart, we're hard working, we're easy to talk to, and we
              love a challenge.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12">
          <div
            class="service-box"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            <font-awesome-icon
              class="font-icon"
              :icon="['fas', 'pencil-ruler']"
            />
            <h4>Web Development</h4>
            <p>
              We're smart, we're hard working, we're easy to talk to, and we
              love a challenge.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12">
          <div
            class="service-box"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            <font-awesome-icon
              class="font-icon"
              :icon="['fas', 'fingerprint']"
            />
            <h4>Brand Identity</h4>
            <p>
              We're smart, we're hard working, we're easy to talk to, and we
              love a challenge.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12">
          <div
            class="service-box"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            <font-awesome-icon
              class="font-icon"
              :icon="['fas', 'chart-simple']"
            />
            <h4>Business Analysis</h4>
            <p>
              We're smart, we're hard working, we're easy to talk to, and we
              love a challenge.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12">
          <div
            class="service-box"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            <font-awesome-icon
              class="font-icon"
              :icon="['fas', 'tachograph-digital']"
            />
            <h4>Digital Marketing</h4>
            <p>
              We're smart, we're hard working, we're easy to talk to, and we
              love a challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Services -->
</template>

<script>
export default {
  name: "ServicesConent",
};
</script>

<style scoped>
/* Start Services */

.service {
  background-color: #f8f9fa;
  padding-top: 8%;
  padding-bottom: 6%;
}

.service .service-title {
  text-align: center;
  position: relative;
  padding-bottom: 4%;
}

.service .service-title h3 {
  color: var(--sec-p-color);
  font-size: 32px;
  font-weight: 600;
}

.service .service-title h3::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 2px;
  margin: 50px -150px;
  background-color: var(--main-color);
}

.service .service-title p {
  color: var(--third-p-color);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0.1em;
  width: 85%;
  margin: 45px auto;
}

@media (max-width: 768px) {
  .service .service-title p {
    width: 100%;
  }
}

.service .service-box {
  text-align: center;
  background-color: var(--white-color);
  border-radius: 8px;
  width: 100%;
  padding: 20px;
  margin: 12px;
  transition: all 0.3 ease-in-out;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

@media (max-width: 768px) {
  .service .service-box {
    margin: 8px;
  }
}

.service .service-box .font-icon {
  margin-top: 40px;
  font-weight: 900;
  font-size: 50px;
  color: var(--main-color);
}

.service .service-box h4 {
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 30px;
  font-weight: 500;
}

.service .service-box p {
  font-size: 16px;
  margin-top: 25px;
  font-weight: 400;
  color: var(--third-p-color);
}

/* End Services */
</style>
