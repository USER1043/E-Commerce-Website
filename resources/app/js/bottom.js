document.addEventListener("DOMContentLoaded", function() {
  const createNav = () => {
      let nav = document.querySelector('.footer');

      nav.innerHTML = `
      <div class="footer-content">
          <div class="footer-section">
              <h2>About Us</h2>
              <p>Welcome to Learning Tree, your one-stop e-commerce solution for all school stationery needs. We specialize in providing a wide range of high-quality stationery items tailored for school students. Our platform is designed with a user-friendly interface to ensure a seamless shopping experience. Please note that only authorized sellers are permitted to sell on our platform to maintain the quality and authenticity of the products. Dive into our diverse collection and find everything your school-going child needs, all under one roof.</p>
          </div>

          <div class="footer-section">
              <h2>Help</h2>
              <p>Phone Number:94886 43163</p>
              <p>Email ID: learningtree@gmail.com</p>
          </div>

          <div class="footer-section">
              <h2>Take me to</h2>
              <p><a href="../Stationary/homepage.html">Home Page</a></p>
              <p><a href="../Home/homebooks.html">Books</a></p>
              <p><a href="../Stationary/Stationeries.html">Stationeries</a></p>
              <p><a href="../Stationary/payment.html">Purchase page</a></p>
          </div>

          <div class="footer-section">
              <h2>Follow Us</h2>
              <div class="social-media">
                  <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="Instagram logo"></a>
                  <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/3536/3536479.png" alt="Whatsapp logo"></a>
                  <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" alt="Facebook logo"></a>
                  <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" alt="X logo"></a>
              </div>
          </div>

          <div class="footer-section-logo">
              <img src="../../images/logo.jpg" alt="Learning Tree Logo">
          </div>
      </div>
      `;
  }
  createNav();
});
