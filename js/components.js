/* =====================================================
   SHARED PORTFOLIO COMPONENTS

   Header + Contact + Footer
   Works locally with file://
===================================================== */


document.addEventListener("DOMContentLoaded", function () {


  /* =====================================================
     HEADER
  ===================================================== */

  const header = document.getElementById("site-header");


  if (header) {

    header.innerHTML = `

      <header class="site-header">

        <div class="container nav-wrapper">

          <a href="index.html" class="logo">
            Swapnil J<span>.</span>
          </a>


          <nav class="main-nav">

            <a href="index.html#work">
              Work
            </a>

            <a href="index.html#experiments">
              Projects
            </a>

            <a href="index.html#life">
              Life
            </a>

            <a href="index.html#contact">
              Contact
            </a>

          </nav>


          <a
            href="mailto:falconwebsites.in@gmail.com"
            class="nav-cta"
          >

            Let's talk

            <span>↗</span>

          </a>


          <button
            class="menu-toggle"
            aria-label="Open navigation menu"
          >

            <span></span>
            <span></span>

          </button>

        </div>

      </header>

    `;

  }



  /* =====================================================
     CONTACT SECTION
  ===================================================== */

  const contact = document.getElementById("site-contact");


  if (contact) {

    contact.innerHTML = `

      <section
        class="contact-section"
        id="contact"
      >

        <div class="container">


          <span class="eyebrow">
            05 / Start a conversation
          </span>


          <h2>

            Have something
            <br>
            interesting in mind?

          </h2>

 <div style="display:flex; gap:24px;">
          <a href="tel:+918828060253" class="contact-link">Call: +91 8828 060 253</a>
          <a href="mailto:falconwebsites.in@gmail.com" class="contact-link">

            Email

          </a>
        </div>

          <div class="contact-bottom">


            <p>

              Open to paid product design roles, projects, and consulting.

            </p>

  <div class="social-links">

            <a href="https://www.linkedin.com/in/swapnil-jadhav-2b11a6337/" target="_blank">
              LinkedIn ↗
            </a>

            <a href="mailto:falconwebsites.in@gmail.com" target="_blank" rel="noopener noreferrer">
              Email ↗
            </a>
            <a href="https://wa.me/918828060253" target="_blank" rel="noopener noreferrer">
              WhatsApp ↗
            </a>

            <a href="Swapnil Jadhav UI UX Designer Sep 2026.pdf" target="_blank" rel="noopener noreferrer">
              Resume ↗
            </a>

          </div>

          </div>


        </div>

      </section>

    `;

  }



  /* =====================================================
     FOOTER
  ===================================================== */

  const footer = document.getElementById("site-footer");


  if (footer) {

    footer.innerHTML = `

      <footer class="site-footer">

        <div class="container footer-inner">


         


          <span>
            © 2026 Swapnil Jadhav
          </span>




        </div>

      </footer>

    `;

  }



  /* =====================================================
     BACK TO TOP
  ===================================================== */

  document.addEventListener("click", function (event) {

    const backTop =
      event.target.closest(".back-top");


    if (!backTop) return;


    event.preventDefault();


    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  });



  /* =====================================================
     MOBILE MENU
  ===================================================== */

  document.addEventListener("click", function (event) {

    const menuToggle =
      event.target.closest(".menu-toggle");


    if (!menuToggle) return;


    const header =
      document.querySelector(".site-header");


    if (!header) return;


    header.classList.toggle("menu-open");

  });


});