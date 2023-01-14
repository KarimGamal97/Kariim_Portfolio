<template>
  <!-- Start Work Process -->

  <div class="process" id="process">
    <div class="container">
      <div class="row">
        <div class="process-title">
          <h3>Work Process</h3>
          <p>
            Simple work process of build your design. Delivering work within
            time and budget which meets client’s requirements is our moto.
          </p>
        </div>

        <div class="process-components">
          <div class="row">
            <div class="col-md-6 col-xs-12">
              <div class="process-feat">
                <div class="num">
                  <p>1</p>
                </div>
                <div class="process-feat-content">
                  <h3>Planning & Consulting</h3>
                  <p>
                    We're smart, we're hard working, we're easy to talk to, and
                    we love a challenge lisque persius mea essent possim iriure.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-xs-12">
              <div class="process-feat">
                <div class="num">
                  <p>2</p>
                </div>
                <div class="process-feat-content">
                  <h3>Content</h3>
                  <p>
                    We're smart, we're hard working, we're easy to talk to, and
                    we love a challenge lisque persius mea essent possim iriure.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-xs-12">
              <div class="process-feat">
                <div class="num">
                  <p>3</p>
                </div>
                <div class="process-feat-content">
                  <h3>Conception</h3>
                  <p>
                    We're smart, we're hard working, we're easy to talk to, and
                    we love a challenge lisque persius mea essent possim iriure.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-xs-12">
              <div class="process-feat">
                <div class="num">
                  <p>4</p>
                </div>
                <div class="process-feat-content">
                  <h3>Design & Development</h3>
                  <p>
                    We're smart, we're hard working, we're easy to talk to, and
                    we love a challenge lisque persius mea essent possim iriure.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-xs-12">
              <div class="process-feat">
                <div class="num">
                  <p>5</p>
                </div>
                <div class="process-feat-content">
                  <h3>Final discussion</h3>
                  <p>
                    We're smart, we're hard working, we're easy to talk to, and
                    we love a challenge lisque persius mea essent possim iriure.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-xs-12">
              <div class="process-feat">
                <div class="num">
                  <p>6</p>
                </div>
                <div class="process-feat-content">
                  <h3>Delivery & Launch</h3>
                  <p>
                    We're smart, we're hard working, we're easy to talk to, and
                    we love a challenge lisque persius mea essent possim iriure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- End Work Process -->
</template>

<script>
export default {
  name: "ProcessComponent",
};
</script>

<style scoped>
/* Start process */

.process {
  background-color: var(--section-color);
  padding: 8% 8%;
}

.process .process-title {
  text-align: center;
  position: relative;
}

.process .process-title h3 {
  color: var(--black-color);
  font-size: 32px;
  font-weight: 500;
}

.process .process-title h3::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 2px;
  margin: 50px -155px;
  background-color: var(--main-color);
}

.process .process-title p {
  color: var(--third-p-color);
  font-size: 1.125rem;
  margin: 40px auto;
  line-height: 1.8;
  width: 80%;
}

@media (max-width: 768px) {
  .process .process-title p {
    width: 100%;
  }
}

.process .process-components {
  padding-top: 5%;
}

.process .process-components .process-feat {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 10px;
}

.process .process-components .process-feat .num {
  margin-right: 25px;
}

.process .process-components .process-feat .num p {
  border: 3px solid var(--main-color);
  border-radius: 50%;
  font-size: 30px;
  font-weight: 600;
  width: 70px;
  height: 70px;
  line-height: 70px;
  color: var(--main-color);
  text-align: center;
}

.process .process-components .process-feat .process-feat-content h3 {
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: 500;
}

.process .process-components .process-feat .process-feat-content p {
  line-height: 1.8;
  font-size: 16px;
  text-align: left;
  color: var(--third-p-color);
}

/* End process */
</style>
