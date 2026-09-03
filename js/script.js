/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
  document.querySelector(".menu-toggle");

const mainNav =
  document.querySelector(".main-nav");


if (menuToggle && mainNav) {

  menuToggle.addEventListener(
    "click",
    () => {

      mainNav.classList.toggle(
        "mobile-open"
      );

      menuToggle.classList.toggle(
        "active"
      );

    }
  );

}



/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const navLinks =
  document.querySelectorAll(
    ".main-nav a"
  );


navLinks.forEach((link) => {

  link.addEventListener(
    "click",
    () => {

      mainNav.classList.remove(
        "mobile-open"
      );

    }
  );

});



/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
  document.querySelector(".back-top");


if (backTop) {

  backTop.addEventListener(
    "click",
    (event) => {

      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
  document.querySelectorAll(
    `
    .project-card,
    .experiment-card,
    .testimonial,
    .life-image,
    .case-hero .reveal,
    .case-section .reveal,
    .case-image.reveal,
    .case-final .reveal,
    .case-outcome .reveal
    `
  );


const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "is-visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        }
      );

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach(
  (element) => {

    element.classList.add(
      "reveal"
    );

    observer.observe(
      element
    );

  }
);