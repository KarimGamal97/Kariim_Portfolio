<template>
  <!-- Start Footer -->
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-content">
          <div class="col-12">
            <div class="footer-links">
              <a href="https://twitter.com/Kariim_Gamal" target="_blank"
                ><i class="fab fa-twitter twitter"></i
              ></a>
              <a
                href="https://www.facebook.com/karim.elagawany/"
                target="_blank"
                ><i class="fab fa-facebook-f facebook"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/karem-gamal-415b45126/"
                target="_blank"
                ><i class="fab fa-linkedin-in linkedin"></i
              ></a>
              <a href="https://wa.me/+201094123678" target="_blank"
                ><i class="fab fa-whatsapp whats"></i
              ></a>
              <a href="https://github.com/KarimGamal97" target="_blank"
                ><i class="fab fa-github github"></i
              ></a>
            </div>
          </div>
          <div class="col-12">
            <div class="footer-copyright">
              <p>
                Copyright &copy; 2022 <span>Kariim</span> All Rights Reserved.
              </p>
            </div>
          </div>
          <div class="col-12">
            <div class="footer-terms">
              <a href="#">Terms & Policy</a>
              <a href="#"> Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Footer -->
</template>

<script>
export default {
  name: "FooterContent",
};
</script>

<style scoped>
/* Start Footer */

.footer {
  background-color: var(--footer-color);
  padding: 4% 0 6% 0;
}

.footer .footer-content .footer-links,
.footer .footer-content .footer-copyright,
.footer .footer-content .footer-terms {
  text-align: center;
  margin-top: 10px;
}

.footer .footer-content .footer-links i {
  font-size: 26px;
  margin: 10px;
  color: var(--p-form-color);
  transition: all 0.3s ease-in-out;
}

.footer .footer-content .footer-links .twitter:hover {
  color: #1da1f2;
}

.footer .footer-content .footer-links .facebook:hover {
  color: #4267b2;
}

.footer .footer-content .footer-links .linkedin:hover {
  color: #0077b5;
}

.footer .footer-content .footer-links .whats:hover {
  color: #25d366;
}

.footer .footer-content .footer-links .github:hover {
  color: #333;
}

.footer .footer-content .footer-copyright p {
  color: var(--p-form-color);
}

.footer .footer-content .footer-copyright p span {
  color: var(--main-color);
  font-weight: 600;
}

.footer .footer-content .footer-terms a {
  color: var(--white-color);
  text-decoration: none;
  margin: 10px;
}

.footer .footer-content .footer-terms a:hover {
  color: var(--p-form-color);
}

/* End Footer */
</style>
