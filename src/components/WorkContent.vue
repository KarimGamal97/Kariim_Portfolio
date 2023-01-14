<template>
  <!-- Start Best Work -->

  <div class="best" id="best">
    <div class="container">
      <div class="row">
        <div class="best-title">
          <h3>Our Best Works</h3>
          <p>
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with Me.
          </p>
        </div>

        <div class="button-group filters-button-group">
          <button class="button is-checked" data-filter="*">All</button>
          <button class="button" data-filter=".webdesign">Web Design</button>
          <button class="button" data-filter=".lastwork">Last Work</button>
        </div>

        <section
          id="grid-container"
          class="transitions-enabled fluid masonry js-masonry grid"
        >
          <article class="webdesign all">
            <img src="../assets/imgs/axit-site.jpg" class="img-responsive" />
            <div class="hidden-info">
              <a href="https://karimgamal97.github.io/Axit/" target="_blank">
                <font-awesome-icon class="font-icon" :icon="['fas', 'link']"
              /></a>
              <p>
                <span>“Axit”</span> is a fully responsive web design Based on
                Materialize.
              </p>
            </div>
          </article>

          <article class="lastwork all">
            <img src="../assets/imgs/covid-site.jpg" class="img-responsive" />
            <div class="hidden-info">
              <a
                href="https://karimgamal97.github.io/Covid-19/"
                target="_blank"
              >
                <font-awesome-icon class="font-icon" :icon="['fas', 'link']"
              /></a>
              <p>
                <span>“Covid-19”</span> describes how Corona disease has been
                spread and how to protect yourself.
              </p>
            </div>
          </article>

          <article class="webdesign all">
            <img src="../assets/imgs/dog-site.jpg" class="img-responsive" />
            <div class="hidden-info">
              <a href="https://karimgamal97.github.io/Zocker/" target="_blank">
                <font-awesome-icon class="font-icon" :icon="['fas', 'link']"
              /></a>
              <p><span>“Zocker”</span> The Best Gamimg Website For All.</p>
            </div>
          </article>

          <article class="lastwork all">
            <img src="../assets/imgs/leon-site.jpg" class="img-responsive" />
            <div class="hidden-info">
              <a href="https://karimgamal97.github.io/Leon/" target="_blank">
                <font-awesome-icon class="font-icon" :icon="['fas', 'link']"
              /></a>
              <p>
                <span>“Leon”</span> is a Portfolio made with latest Technologies
                in web designing.
              </p>
            </div>
          </article>

          <article class="lastwork all">
            <img
              src="../assets/imgs/special_design.jpg"
              class="img-responsive"
            />
            <div class="hidden-info">
              <a
                href="https://karimgamal97.github.io/Special_Design/"
                target="_blank"
              >
                <font-awesome-icon class="font-icon" :icon="['fas', 'link']"
              /></a>
              <p>
                <span>“Special Design”</span> is a Landing page for a Company.
              </p>
            </div>
          </article>

          <article class="all webdesign">
            <img src="../assets/imgs/cat-06.jpg" class="img-responsive" />
            <div class="hidden-info">
              <a
                href="https://karimgamal97.github.io/Coozy-House/"
                target="_blank"
              >
                <font-awesome-icon class="font-icon" :icon="['fas', 'link']"
              /></a>
              <p>
                <span>“Coozy House”</span> is a site to search a shelter for
                dogs.
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  </div>

  <!-- End Best Work -->
</template>

<script>
export default {
  name: "WorkContent",
};
</script>

<style scoped>
/* Start Best Work */

.best {
  background-color: var(--white-color);
  padding: 8% 8%;
}

.best .best-title {
  text-align: center;
  position: relative;
}

.best .best-title h3 {
  color: var(--black-color);
  font-size: 32px;
  font-weight: 500;
}

.best .best-title h3::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 2px;
  margin: 50px -175px;
  background-color: var(--main-color);
}

.best .best-title p {
  color: var(--third-p-color);
  font-size: 1.125rem;
  margin: 40px auto;
  line-height: 1.8;
  width: 80%;
}

@media (max-width: 768px) {
  .best .best-title p {
    width: 100%;
  }
}

/* ------ Portfolio Gallery ------- */

.button {
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: 60px;
  background: transparent;
  font-size: 18px;
  width: 150px;
  cursor: pointer;
  border: 1px solid transparent;
  margin: 10px;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  background-color: var(--main-color);
  color: var(--white-color);
}

.button:active,
.button.is-checked {
  background-color: var(--main-color);
  outline: none;
  color: var(--white-color);
}

.button-group {
  margin: 20px 0;
  text-align: center;
}

.button-group:after {
  content: "";
  display: block;
  clear: both;
}

img {
  vertical-align: middle;
}

.img-responsive {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
}

/* @media (max-width:768px) {
    .grid{
        margin-left: 0;
    }
} */

.grid article {
  background-color: #ffffff;
  display: inline-flex;
  /* float: left; */
  margin: 1%;
  width: 30%;
  position: relative;
}

@media (max-width: 768px) {
  .grid article {
    margin-left: -12px !important;
  }
}

.grid article .hidden-info {
  background-color: var(--black-color);
  opacity: 0.85;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
  top: 0;
  left: 0;
  text-align: center;
  transition: all 0.3s ease-in-out;
  display: none;
}

.grid article:hover .hidden-info {
  display: block;
}

.grid article .hidden-info .font-icon {
  font-size: 45px;
  color: var(--white-color);
  transition: all 0.3s ease-in-out;
  margin: 50px auto;
}

.grid article .hidden-info .font-icon:hover {
  color: var(--main-color);
}

.grid article .hidden-info p {
  color: var(--white-color);
  margin-top: -30px;
  font-size: 15px;
}

.grid article .hidden-info p span {
  font-size: 22px;
  color: var(--main-color);
  font-weight: bold;
}

@media (max-width: 1024px) {
  .grid article {
    width: 32%;
  }
}

@media (max-width: 767px) {
  .grid article {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .grid article {
    margin: 2% 0;
    width: 100%;
  }
}

/* ------ Portfolio Gallery ------- */

/* End Best Work */
</style>
