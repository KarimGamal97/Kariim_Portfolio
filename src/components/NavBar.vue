<template>
  <!-- Start Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top sticky">
    <div class="container">
      <!-- <router-link tag="li" to="/"
        ><a class="navbar-brand"
          ><h3><span>K</span>ariim</h3></a
        ></router-link
      > -->
      <a class="navbar-brand" href="#header">
        <h3><span>K</span>ariim</h3>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link tag="li" to="/"
            ><a class="nav-link">Home</a></router-link
          >
          <router-link tag="li" to="/about"
            ><a class="nav-link">About</a></router-link
          >
          <router-link tag="li" to="/services"
            ><a class="nav-link">Services</a></router-link
          >
          <router-link tag="li" to="/why"
            ><a class="nav-link">Why Choose</a></router-link
          >
          <router-link tag="li" to="/work"
            ><a class="nav-link">Portfolio</a></router-link
          >
          <router-link tag="li" to="/process"
            ><a class="nav-link">Process</a></router-link
          >
          <router-link tag="li" to="/clients"
            ><a class="nav-link">Clients</a></router-link
          >
          <router-link tag="li" to="/contact"
            ><a class="nav-link">Contact</a></router-link
          >
          <!-- <a href="#contact">
            <button class="nav-button">Contact</button>
          </a> -->
        </div>
      </div>
    </div>
  </nav>

  <!-- End Navbar -->
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    NavBar() {
      // start sticky navbar
      let bodyScroll = document.querySelector("html , body"),
        stickyNav = document.querySelector("nav");
      window.addEventListener("scroll", function () {
        // console.log(bodyScroll.scrollTop);
        if (bodyScroll.scrollTop > 50) {
          stickyNav.style.backgroundColor = "#0B0B0B";
        } else {
          stickyNav.style.backgroundColor = "transparent";
        }
      });
      // End Sticky Navbar
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.NavBar);
  },
};
</script>

<style scoped>
.navbar .navbar-brand h3 span {
  color: var(--main-color);
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.navbar .navbar-brand h3 span:hover {
  color: var(--white-color);
}

.navbar .navbar-brand h3 {
  color: var(--white-color);
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.navbar-dark .navbar-nav .nav-link.active {
  color: var(--main-color);
}
.navbar-dark .navbar-nav .nav-link {
  margin: 5px;
  font-weight: 500;
  font-size: 16px;
  color: var(--white-color);
  transition: all 0.2s ease-in-out;
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: var(--white-color);
}

@media (max-width: 991px) {
  .collapse {
    background-color: #090909;
    opacity: 0.88;
    padding: 10px;
    border-radius: 5px;
  }
}

/* Hover links of Navbar */

.navbar-dark .navbar-toggler-icon {
  background-image: url(../assets/imgs/navbar-toggler.png);
}

.nav-link {
  position: relative;
}

.nav-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 2px;
  background-color: var(--main-color);
  transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

@media (hover: hover) {
  .nav-link:not(.active):hover::before {
    left: 0;
    right: auto;
    width: 100%;
  }
}

/* Hover links of Navbar */

.navbar-dark .navbar-nav .nav-button {
  width: 140px;
  height: 45px;
  margin: 2px 0 0 15px;
  line-height: 39px;
  color: #fff;
  border: 2px solid var(--white-color);
  font-weight: 500;
  border-radius: 50px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  background-color: var(--sec-color);
}

.navbar-dark .navbar-nav .nav-button:hover {
  background-color: var(--white-color);
  border: 2px solid var(--white-color);
  color: var(--main-color);
}
.router-link-exact-active {
  background-color: var(--main-color);
  border-radius: 6px;
}
/* End Navbar  */
</style>
