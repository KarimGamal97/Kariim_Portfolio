<template>
  <!-- Start Why -->
  <div class="why" id="why">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="why-title">
            <h3>Why I'm Different?</h3>
            <p>
              We're smart, hard working, easy to talk to, and We love
              challenges.
            </p>
          </div>
        </div>
        <div class="why-box">
          <div class="why-feat-icon">
            <font-awesome-icon
              class="font-icon"
              :icon="['fas', 'fingerprint']"
            />
          </div>
          <div class="why-feat-text">
            <h3>Unique Design</h3>
            <P
              >We're smart, hard working, easy to talk to, and we love a
              challenge.</P
            >
          </div>
        </div>
        <div class="why-box">
          <div class="why-feat-icon">
            <font-awesome-icon class="font-icon" :icon="['fas', 'cog']" />
          </div>
          <div class="why-feat-text">
            <h3>Fully Customisable</h3>
            <P
              >We're smart, hard working, easy to talk to, and we love a
              challenge.</P
            >
          </div>
        </div>
        <div class="why-box">
          <div class="why-feat-icon">
            <font-awesome-icon
              class="font-icon"
              :icon="['fas', 'layer-group']"
            />
          </div>
          <div class="why-feat-text">
            <h3>Different Layout</h3>
            <P
              >We're smart, hard working, easy to talk to, and we love a
              challenge.</P
            >
          </div>
        </div>
        <div class="why-box">
          <div class="why-feat-icon">
            <font-awesome-icon
              class="font-icon"
              :icon="['fas', 'mobile-alt']"
            />
          </div>
          <div class="why-feat-text">
            <h3>Responsive Layout</h3>
            <P
              >We're smart, hard working, easy to talk to, and we love a
              challenge.</P
            >
          </div>
        </div>
        <div class="why-box">
          <div class="why-feat-icon">
            <font-awesome-icon
              class="font-icon"
              :icon="['fas', 'expand-alt']"
            />
          </div>
          <div class="why-feat-text">
            <h3>Boxed & Wide Layouts</h3>
            <P
              >We're smart, hard working, easy to talk to, and we love a
              challenge.</P
            >
          </div>
        </div>
        <div class="why-box">
          <div class="why-feat-icon">
            <font-awesome-icon class="font-icon" :icon="['fas', 'life-ring']" />
          </div>
          <div class="why-feat-text">
            <h3>Extensive Documentation</h3>
            <P
              >We're smart, hard working, easy to talk to, and we love a
              challenge.</P
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Why -->
</template>

<script>
export default {
  name: "WhyComponent",
};
</script>

<style scoped>
/* Start Why */

.why {
  background-color: var(--white-color);
  padding-top: 8%;
  padding-bottom: 10%;
}

.why .why-title {
  text-align: center;
  position: relative;
  padding-bottom: 4%;
}

.why .why-title h3 {
  color: var(--sec-p-color);
  font-size: 32px;
  font-weight: 600;
}

.why .why-title h3::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 2px;
  margin: 50px -200px;
  background-color: var(--main-color);
}

.why .why-title p {
  color: var(--third-p-color);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0.1em;
  width: 85%;
  margin: 45px auto;
}

@media (max-width: 768px) {
  .why .why-title p {
    width: 100%;
  }
}

.why-box {
  display: inline-flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 32%;
  margin: 10px auto;
  padding: 10px;
}

@media (max-width: 768px) {
  .why-box {
    width: 100%;
  }
}

@media (min-width: 769px) and (max-width: 991px) {
  .why-box {
    width: 50%;
  }
}

.why-box .font-icon {
  border: 1px solid var(--p-color);
  border-radius: 50%;
  font-size: 35px;
  min-width: 70px;
  line-height: 70px;
  min-height: 70px;
  color: var(--main-color);
  text-align: center;
  margin-right: 15px;
}

.why-box h3 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 500;
}

.why-box p {
  line-height: 1.8;
  font-size: 16px;
  text-align: left;
  color: var(--third-p-color);
}
</style>
