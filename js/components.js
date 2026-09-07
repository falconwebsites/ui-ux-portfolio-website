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


          <a
            href="mailto:hello@example.com"
            class="contact-link"
          >

            Let's talk

            <span>
              ↗
            </span>

          </a>


          <div class="contact-bottom">


            <p>

              Open to product design roles,
              interesting collaborations and
              conversations about design.

            </p>


            <div class="social-links">


              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>


              <a
                href="mailto:falconwebsites.in@gmail.com"
              >
                Email ↗
              </a>

              <a href="https://wa.me/918828060253">
                WhatsApp ↗
              </a>


              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
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


          <div>

            <a
              href="index.html"
              class="logo"
            >
              SJ<span>.</span>
            </a>


            <p>
              UI/UX Designer crafting thoughtful
              digital experiences.
            </p>

          </div>


          <span>
            © 2026 Swapnil Jadhav
          </span>


          <a
            href="#"
            class="back-top"
          >
            Back to top ↑
          </a>


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