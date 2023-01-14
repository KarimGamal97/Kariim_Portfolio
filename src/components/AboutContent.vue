<template>
  <!-- Start About -->
  <div class="about" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-xs-12">
          <div
            class="about-img"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="2000"
          >
            <img
              src="@/assets/imgs/about-img.jpg"
              alt="About-image"
              title="I'm Karim Gamal"
            />
          </div>
        </div>
        <div class="col-lg-7 col-xs-12">
          <div
            class="about-content"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="2000"
          >
            <h2>About Me</h2>
            <h3>Hello!<span> I'm Karim Gamal</span></h3>
            <p>
              I combine our passion for design focused in people with advanced
              development technologies. <strong>150+ clients</strong> have
              procured exceptional results and happiness while working with me.
            </p>
            <p>
              Delivering work within <strong>time and budget</strong> which
              meets client’s requirements is our moto. when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book lorem Ipsum has been the industry's standard. Lorem Ipsum has
              been the industry's standard dummy text ever since.
            </p>
          </div>
          <!-- Features -->
          <div class="about-features">
            <div class="feat">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div class="feat">
              <h3>150+</h3>
              <p>Happy Clients</p>
            </div>
            <div class="feat last">
              <h3>75+</h3>
              <p>Projects Done</p>
            </div>
          </div>
          <!-- Features -->
          <!-- About Buttons -->
          <div class="about-buttons">
            <button class="about-btn">About more</button>
            <a href="#best">
              <button class="discover-btn">
                Discover My Work
                <i class="fas fa-long-arrow-alt-right"></i>
              </button>
            </a>
          </div>
          <!-- About Buttons -->
        </div>
      </div>
    </div>
  </div>

  <!-- End About -->
</template>

<script>
export default {
  name: "AboutContent",
};
</script>

<style scoped>
/* Start  About */

.about {
  background-color: var(--white-color);
  padding: 7% 0 7% 0;
}

.about .about-img img {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 50px -35px rgb(0 0 0 / 40%) !important;
}

@media (max-width: 992px) {
  .about .about-img {
    text-align: center;
  }
}

@media (max-width: 992px) {
  .about .about-img img {
    width: 80%;
  }
}

@media (max-width: 992px) {
  .about-content {
    text-align: center;
    margin-top: 5%;
  }
}

.about .about-content h2 {
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 20px;
}

.about .about-content h3 {
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 20px;
}

.about .about-content h3 span {
  color: var(--main-color);
}

.about .about-content p {
  color: var(--sec-p-color);
}

.about .about-features {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  position: relative;
  margin-top: 8%;
  text-align: center;
}

.about .about-features .feat {
  width: 33.3%;
}

.about .about-features .feat:not(.last) {
  border-right: 1px solid var(--form-color);
}

.about .about-features .feat h3 {
  color: var(--third-p-color);
  font-size: 32px;
}

.about .about-features .feat p {
  color: var(--sec-p-color);
}

@media (max-width: 768px) {
  .about .about-features .feat p {
    font-size: 14px;
  }
}

.about .about-buttons {
  margin-top: 8%;
  padding: 15px;
}

@media (max-width: 992px) {
  .about .about-buttons {
    text-align: center;
    margin-top: 5%;
  }
}

.about .about-buttons {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}

.about .about-buttons .about-btn {
  width: 180px;
  height: 55px;
  border-radius: 60px;
  font-weight: 500;
  border: none;
  background-color: var(--sec-p-color);
  color: var(--white-color);
  transition: all 0.3s ease-in-out;
}

.about .about-buttons .about-btn:hover {
  filter: brightness(0.9);
}

.about .about-buttons .discover-btn {
  width: 180px;
  height: 55px;
  border: none;
  background-color: transparent;
  color: var(--main-color);
  font-weight: 500;
  transition: all 0.3s ease-in-out;
}

.about .about-buttons .discover-btn:hover {
  text-decoration: underline;
}

/* End About */
</style>
