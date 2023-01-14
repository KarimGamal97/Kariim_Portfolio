<template>
  <!-- Start Skills -->
  <div class="our-skills" id="our-skills">
    <div class="skills-title">
      <h3>My Skills</h3>
    </div>
    <div class="container">
      <div class="skills">
        <div class="skill">
          <h3>Web Designing (Html5, Css3, JavaScript) <span>90%</span></h3>
          <div class="the-progress">
            <span style="width: 0" data-width="90%"></span>
          </div>
        </div>
        <br />
        <div class="skill">
          <h3>FrameWorks (Bootstrap ,Tailwind) <span>80%</span></h3>
          <div class="the-progress">
            <span style="width: 0" data-width="80%"></span>
          </div>
        </div>
        <br />
        <div class="skill">
          <h3>Versions Control Systems (Git ,GitHub) <span>85%</span></h3>
          <div class="the-progress">
            <span style="width: 0" data-width="85%"></span>
          </div>
        </div>
        <br />
        <div class="skill">
          <h3>JavaScript Libraries (Jquery, Vue.js)<span>75%</span></h3>
          <div class="the-progress">
            <span style="width: 0" data-width="75%"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Skills -->
</template>

<script>
export default {
  name: "SkillsContent",
  methos: {
    Skills() {
      let progressSpans = document.querySelectorAll(".the-progress span");
      let section = document.querySelector(".our-skills");
      let nums = document.querySelectorAll(".stats .number");
      let statsSection = document.querySelector(".stats");
      let started = false; // Function Started ? No
      let startCount;

      window.onscroll = function () {
        // Skills Animate Width
        if (window.scrollY >= section.offsetTop - 20) {
          progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
          });
        }
        // Stats Increase Number
        if (window.scrollY >= statsSection.offsetTop) {
          if (!started) {
            nums.forEach((num) => startCount(num));
          }
          started = true;
        }
      };
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.Skills);
  },
};
</script>

<style scoped>
/* Start Skills */

.our-skills {
  padding-top: 8%;
  padding-bottom: 8%;
  position: relative;
  background-color: var(--section-color);
}

.our-skills .skills-title {
  text-align: center;
  position: relative;
}

.our-skills .skills-title h3 {
  color: var(--black-color);
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 60px;
}

.our-skills .skills-title h3::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 2px;
  margin: 50px -120px;
  background-color: var(--main-color);
}

.our-skills .container {
  display: flex;
  align-items: center;
}

@media (max-width: 991px) {
  .our-skills img {
    display: none;
  }
}

.our-skills .skills {
  flex: 1;
}

.our-skills .skill h3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
}

.our-skills .skill h3 span {
  font-size: 12px;
  border: 1px solid #ccc;
  padding: 3px 5px;
  border-radius: 4px;
  color: var(--main-color);
}

.our-skills .skill .the-progress {
  height: 30px;
  background-color: #eee;
  position: relative;
  border-radius: 3px;
}

.our-skills .skill .the-progress span {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: var(--main-color);
  transition: width 1.5s linear;
  border-radius: 3px;
}

/* End Skills */
</style>
