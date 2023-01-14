<template>
  <!-- Start Contact -->

  <div class="contact" id="contact">
    <div class="container">
      <div class="row">
        <div class="contact-title">
          <h3>Contact Us</h3>
          <p>Send me a note, and let’s get started on your project today!</p>
        </div>

        <!-- Contact Form -->
        <div class="contact-form">
          <div class="col-12">
            <div class="form-input">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your Name"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
          </div>

          <div class="col-12">
            <div class="textarea-form">
              <textarea
                name="overview"
                placeholder=" Tell us about your needs ....."
              ></textarea>
            </div>
          </div>

          <div class="col-12">
            <div class="button-form">
              <button class="contact-btn">Send Message</button>
            </div>
          </div>
        </div>
        <!-- Contact Form -->

        <!-- Contact Info -->

        <div class="contact-info">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-xs-12">
                <div class="info-box">
                  <font-awesome-icon
                    class="contact-icon"
                    :icon="['fas', 'map-marker-alt']"
                  />
                  <h3>VISIT US</h3>
                  <p>145 Murphy Canyon Rd.</p>
                  <p>Suite 100-18, San Diego CA 2028</p>
                </div>
              </div>

              <div class="col-md-4 col-xs-12">
                <div class="info-box">
                  <font-awesome-icon
                    class="contact-icon"
                    :icon="['fas', 'phone-alt']"
                  />
                  <h3>CALL US NOW</h3>
                  <p>Phone: (+020) 1094123678</p>
                  <p>Fax: (+060) 8898880088</p>
                </div>
              </div>

              <div class="col-md-4 col-xs-12">
                <div class="info-box last">
                  <font-awesome-icon
                    class="contact-icon"
                    :icon="['fas', 'envelope']"
                  />
                  <h3>INQUIRIES</h3>
                  <p class="info-box-email">kariimgamal1997@gmail.com</p>
                  <p>Mon to Fri (10 am – 8 pm)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Info -->
      </div>
    </div>
  </div>

  <!-- End Contact -->
</template>

<script>
export default {
  name: "ContactContent",
};
</script>

<style scoped>
/* Start Contact */

.contact {
  background-color: var(--white-color);
  padding: 6% 6%;
}

.contact .contact-title {
  text-align: center;
  position: relative;
}

.contact .contact-title h3 {
  color: var(--black-color);
  font-size: 32px;
  font-weight: 500;
}

.contact .contact-title h3::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 2px;
  margin: 50px -140px;
  background-color: var(--main-color);
}

.contact .contact-title p {
  color: var(--third-p-color);
  font-size: 1.125rem;
  margin: 40px auto;
  line-height: 1.8;
  width: 80%;
}

@media (max-width: 768px) {
  .contact .contact-title p {
    width: 100%;
  }
}

.contact .contact-form {
  padding-top: 3%;
  text-align: center;
}

.contact .contact-form input {
  width: 40%;
  height: 50px;
  margin: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid var(--form-color);
  caret-color: var(--main-color);
}

.contact .contact-form input:focus {
  outline: none;
}

@media (max-width: 991px) {
  .contact .contact-form input {
    width: 100%;
    margin: 10px auto;
  }
}

.contact .contact-form input::placeholder {
  color: var(--p-form-color);
  font-size: 18px;
}

.contact .contact-form .textarea-form {
  width: 83.5%;
  margin: 10px auto;
}

.contact .contact-form .textarea-form textarea:focus {
  outline: none;
}

@media (max-width: 991px) {
  .contact .contact-form .textarea-form {
    width: 100%;
  }
}

.contact .contact-form textarea {
  width: 100%;
  border-radius: 5px;
  border: 2px solid var(--form-color);
  height: 150px;
  padding: 10px;
  resize: none;
}

@media (max-width: 991px) {
  .contact .contact-form textarea {
    width: 100%;
  }
}

.contact .contact-form textarea::placeholder {
  color: var(--p-form-color);
  font-size: 18px;
}

.contact .contact-form .button-form {
  margin: 30px auto;
}

.contact .contact-form .button-form .contact-btn {
  width: 220px;
  height: 60px;
  line-height: 50px;
  border: none;
  font-size: 18px;
  border-radius: 60px;
  color: var(--white-color);
  background-color: var(--main-color);
  transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .contact .contact-form .button-form .contact-btn {
    width: 170px;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
  }
}

.contact .contact-form .button-form .contact-btn:hover {
  filter: brightness(0.9);
}

.contact-info {
  padding-top: 8%;
  text-align: center;
  position: relative;
}

.contact-info .info-box:not(.last) {
  border-right: 1px solid var(--form-color);
}

@media (max-width: 768px) {
  .contact-info .info-box:not(.last) {
    border-bottom: 1px solid var(--form-color);
    border-right: none;
  }
}

.contact-info .info-box {
  /* background-color: green; */
  padding: 20px;
}

.contact-info .info-box .contact-icon {
  font-size: 50px;
  margin-bottom: 30px;
  color: var(--form-color);
}

.contact-info .info-box h3 {
  font-size: 20px;
  margin-bottom: 20px;
  color: var(--sec-p-color);
}

.contact-info .info-box p {
  font-size: 16px;
  color: var(--third-p-color);
}

.contact-info .info-box .info-box-email {
  color: var(--main-color);
}

/* End Contact */
</style>
