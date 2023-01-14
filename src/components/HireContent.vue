<template>
  <!-- Start Hire Me -->
  <div class="hire">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="hire-content">
            <p>I am Available for Freelancer.</p>
            <h2>Start a project with Me today!</h2>
            <button class="hire-btn">
              <a href="#contact">Hire Me</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Hire Me -->
</template>

<script>
export default {
  name: "HireContent",
};
</script>

<style scoped>
/* Start Hire Me */

.hire {
  background-color: var(--main-color);
  padding: 9% 9%;
  text-align: center;
}

.hire .hire-content p {
  color: var(--white-color);
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 25px;
}

.hire .hire-content h2 {
  font-size: 2.5rem;
  color: var(--white-color);
  margin-bottom: 25px;
}

@media (max-width: 768px) {
  .hire .hire-content h2 {
    font-size: 2.25rem;
  }
}

.hire .hire-content .hire-btn {
  width: 150px;
  height: 50px;
  line-height: 50px;
  border: none;
  border-radius: 60px;
  transition: all 0.3s ease-in-out;
}

.hire .hire-content .hire-btn a {
  text-decoration: none;
  font-size: 16px;
  color: var(--main-color);
}

.hire .hire-content .hire-btn:hover {
  filter: brightness(0.9);
}

/* End Hire Me */
</style>
