'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);

// Dropdown toggler
document.querySelectorAll("[data-dropdown-toggler]").forEach((toggler) => {
  toggler.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Toggle the dropdown menu
    const dropdownMenu = toggler.nextElementSibling;
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";

    // Toggle the "active" class for the clicked link
    toggler.classList.toggle("active");

    // Close other dropdowns if open and remove active class
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      if (menu !== dropdownMenu) {
        menu.style.display = "none";
      }
    });
    document.querySelectorAll("[data-dropdown-toggler]").forEach((link) => {
      if (link !== toggler) {
        link.classList.remove("active");
      }
    });
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.style.display = "none";
    });
    document.querySelectorAll("[data-dropdown-toggler]").forEach((link) => {
      link.classList.remove("active"); // Remove active state when clicking outside
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const plane = document.querySelector(".plane");
  let lastScrollPosition = 0;
  let planePosition = 0; // Initial position of the plane

  window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
      // Scrolling down
      planePosition += 10; // Move plane to the right
    } else {
      // Scrolling up
      planePosition -= 10; // Move plane to the left
    }

    // Apply position to the plane
    plane.style.left = `${planePosition}px`;

    // Update the last scroll position
    lastScrollPosition = currentScrollPosition;
    planePosition = Math.max(-300, Math.min(window.innerWidth, planePosition));

  });
});




// document.addEventListener("DOMContentLoaded", () => {
//   const plane = document.querySelector(".plane");
//   let lastScrollPosition = 0;
//   let planePosition = 0; // Initial position of the plane

//   window.addEventListener("scroll", () => {
//     const currentScrollPosition = window.scrollY;

//     if (currentScrollPosition > lastScrollPosition) {
//       // Scrolling down
//       planePosition += 10; // Move plane to the right
//     } else {
//       // Scrolling up
//       planePosition -= 10; // Move plane to the left
//     }

//     // Prevent the plane from moving beyond the screen boundaries
//     const maxPosition = window.innerWidth - plane.offsetWidth; // Right boundary
//     const minPosition = 0; // Left boundary

//     // Clamp the position to stay within bounds
//     planePosition = Math.max(minPosition, Math.min(maxPosition, planePosition));

//     // Apply position to the plane
//     plane.style.left = `${planePosition}px`;

//     // Update the last scroll position
//     lastScrollPosition = currentScrollPosition;
//   });
// });



document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  emailjs
    .sendForm("service_jx5vlml", "template_25jwzha", this, "zUrh3TGnznuGNYWap")
    .then(
      function () {
        alert("Your message has been sent successfully!");
      },
      function (error) {
        alert("Failed to send your message. Please try again.");
        console.error("EmailJS error:", error);
      }
    );
});




function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  const subject = 'New Inquiry';
  const body = `Hello,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;

  const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  window.location.href = mailtoLink;
}
