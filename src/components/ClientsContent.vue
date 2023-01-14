<template>
  <!-- Start Clients -->
  <div class="client" id="client">
    <div class="container">
      <div class="row">
        <div class="client-title">
          <h3>Our Clients</h3>
          <p>
            See what my happy clients say about me. I'm proud to have my
            clients.
          </p>
        </div>
        <!-- ---------- Carousel Testimonials ------------ -->
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-center m-auto">
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Carousel -->
                <div class="carousel-inner">
                  <div class="item carousel-item active">
                    <div class="img-box">
                      <img src="https://i.ibb.co/9GhtWR1/Team-6.jpg" alt="" />
                    </div>
                    <p class="testimonial">
                      Easy to use, reasonably priced simply dummy text of the
                      printing and typesetting industry. Quidam lisque persius
                      interesset his et, in quot quidam possim iriure. simply
                      dummy text of the printing and typesetting industry.”
                    </p>
                    <p class="overview">
                      <b>Jennifer Smith</b> ,<span> Athelete</span>
                    </p>
                  </div>
                  <div class="item carousel-item">
                    <div class="img-box">
                      <img src="https://i.ibb.co/5FF1vqz/img2.jpg" alt="" />
                    </div>
                    <p class="testimonial">
                      Easy to use, reasonably priced simply dummy text of the
                      printing and typesetting industry. Quidam lisque persius
                      interesset his et, in quot quidam possim iriure. simply
                      dummy text of the printing and typesetting industry.”
                    </p>
                    <p class="overview">
                      <b>Jennifer Smith</b> , <span> Athelete</span>
                    </p>
                  </div>
                  <div class="item carousel-item">
                    <div class="img-box">
                      <img src="https://i.ibb.co/87KGZNQ/Team-8.jpg" alt="" />
                    </div>
                    <p class="testimonial">
                      “Easy to use, reasonably priced simply dummy text of the
                      printing and typesetting industry. Quidam lisque persius
                      interesset his et, in quot quidam possim iriure. simply
                      dummy text of the printing and typesetting industry.”
                    </p>
                    <p class="overview">
                      <b>Hellen Wright</b> , <span> Athelete</span>
                    </p>
                  </div>
                </div>
                <!-- Carousel Controls -->
                <a
                  class="carousel-control left carousel-control-prev"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <i class="fa fa-angle-left"></i>
                </a>
                <a
                  class="carousel-control right carousel-control-next"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- --------------- Carousel Testimonials ----------------- -->
      </div>
    </div>
  </div>

  <!-- End Clients -->
</template>

<script>
export default {
  name: "ClientsCotent",
};
</script>

<style scoped>
/* Start Clients */

.client {
  background-color: var(--white-color);
  padding: 8% 8%;
}

.client .client-title {
  text-align: center;
  position: relative;
}

.client .client-title h3 {
  color: var(--black-color);
  font-size: 32px;
  font-weight: 500;
}

.client .client-title h3::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 2px;
  margin: 50px -140px;
  background-color: var(--main-color);
}

.client .client-title p {
  color: var(--third-p-color);
  font-size: 1.125rem;
  margin: 40px auto;
  line-height: 1.8;
  width: 80%;
}

@media (max-width: 768px) {
  .client .client-title p {
    width: 100%;
  }
}

/* -------  Carousel Testimonials  ------------- */

.col-center {
  margin: 0 auto;
  float: none !important;
}

.carousel {
  margin: 50px auto;
  padding: 0 70px;
}

.carousel-item {
  color: var(--third-p-color);
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  min-height: 290px;
}

.carousel .item .img-box {
  width: 135px;
  height: 135px;
  margin: 0 auto;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 50%;
}

.carousel .img-box img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}

.carousel .testimonial {
  padding: 30px 0 10px;
}

.carousel .overview {
  font-style: italic;
}

.carousel .overview b {
  text-transform: uppercase;
  color: var(--main-color);
}

.carousel .overview span {
  font-size: 14px;
  font-weight: bold;
  color: var(--black-color-color);
}

.carousel .carousel-control {
  width: 40px;
  height: 40px;
  margin-top: -20px;
  top: 50%;
  background: none;
}

.carousel-control i {
  font-size: 68px;
  line-height: 42px;
  position: absolute;
  display: inline-block;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: 0 3px 3px #e6e6e6, 0 0 0 #000;
}

.carousel .carousel-indicators {
  bottom: -40px;
}

.carousel-indicators li,
.carousel-indicators li.active {
  width: 10px;
  height: 10px;
  margin: 1px 3px;
  border-radius: 50%;
}

.carousel-indicators li {
  background: var(--black-color);
  border-color: transparent;
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.2);
}

.carousel-indicators li.active {
  background: #555;
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* --------  Carousel Testimonials  ------------ */

/* End Clients */
</style>
