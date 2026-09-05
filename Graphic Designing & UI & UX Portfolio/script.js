/* ==================================================
   MOBILE NAVIGATION
================================================== */

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }

    });


    // Close menu after clicking a link

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuButton.textContent = "☰";

        });

    });

}


/* ==================================================
   SCROLL REVEAL ANIMATION
================================================== */

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .service-card, .contact-box"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    observer.observe(element);
});


/* ==================================================
   NAVBAR SCROLL EFFECT
================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(8, 8, 12, 0.92)";

        navbar.style.boxShadow =
            "0 15px 40px rgba(0,0,0,0.25)";

    } else {

        navbar.style.background =
            "rgba(12, 12, 18, 0.78)";

        navbar.style.boxShadow = "none";

    }

});


/* ==================================================
   CURRENT YEAR
================================================== */

const year = new Date().getFullYear();

const footerText = document.querySelector("footer div");

if (footerText) {

    footerText.textContent =
        `© ${year} Hamza Ghulam Rasool`;

}
