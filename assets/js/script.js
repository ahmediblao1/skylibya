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
      link.classList.remove("active");
    });
  }  
});
// Function to change the website's language
async function changeLanguage(lang) {
  try {
    // Fetch the translations
    const response = await fetch("./assets/translations/translations.json");
    const translations = await response.json();

    // Update elements with the appropriate translations
    document.querySelectorAll("[data-translate]").forEach((el) => {
      const key = el.getAttribute("data-translate");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update HTML "lang" attribute for accessibility
    document.documentElement.lang = lang;

    // Set direction (RTL for Arabic) for the entire document
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
    // Save the selected language to localStorage
    localStorage.setItem("preferredLanguage", lang);
  } catch (error) {
    console.error("Error loading translations:", error);
  }
}

smoothScrollEffect();
if (condition) {
  smoothScrollEffect ();
  then (result => {
    // Do something with the result
  }
  ).catch (error => {
    // Handle the error
  });
} else {
  console.error("Condition not met");
}

// Add event listeners to language buttons
document.querySelectorAll(".dropdown-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLang = button.textContent.trim() === "English" ? "en" : "ar";
    changeLanguage(selectedLang);

    // Close the dropdown menu after selecting
    const dropdownMenu = button.closest(".dropdown-menu");
    dropdownMenu.style.display = "none";
  });
});

// Load saved language on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLanguage") || "en"; // Default to English
  changeLanguage(savedLang);
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



// document.getElementById("contact-form").addEventListener("submit", function (e) {
//   e.preventDefault(); // Prevent the default form submission

//   emailjs
//     .sendForm("service_jx5vlml", "template_25jwzha", this, "zUrh3TGnznuGNYWap")
//     .then(
//       function () {
//         alert("Your message has been sent successfully!");
//       },
//       function (error) {
//         alert("Failed to send your message. Please try again.");
//         console.error("EmailJS error:", error);
//       }
//     );
// });



///// email handle ///////

// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('contactForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form from reloading the page

//     sendEmail();
//   });
// });

// function sendEmail() {
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const phone = document.getElementById('phone').value;
//   const message = document.getElementById('message').value;

//   const subject = 'New Inquiry';
//   const body = `Hello,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;

//   const mailtoLink = `mailto:info@skylibya.net?subject=${encodeURIComponent(subject)}&body=${body}`;
//   window.location.href = mailtoLink;
// }






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




const planeContainer = document.querySelector('.plane-container');
let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
let currentPosition = 0; // Current position of the plane
let targetPosition = 0; // Target position for smooth transition
const speed = 0.1; // Adjust the smoothness (lower is smoother)
let isPlaneVisible = false; // Track if the plane is visible

function smoothScrollEffect() {
  if (isPlaneVisible) {
    // Gradually interpolate the current position to the target position
    currentPosition += (targetPosition - currentPosition) * speed;

    // Apply the smooth movement to the plane
    planeContainer.style.transform = `translate(calc(-50% + ${currentPosition}px), -50%)`;
  }

  // Continue the animation
  requestAnimationFrame(smoothScrollEffect);
}

// Update the target position based on scroll
window.addEventListener('scroll', () => {
  if (isPlaneVisible) {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const direction = currentScroll > lastScrollTop ? 1 : -1; // Down (-1) or up (+1)

    // Update the target position gradually
    targetPosition += direction * 10; // Adjust 10 for sensitivity

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
  }
});

// Observe when the plane container becomes visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      isPlaneVisible = entry.isIntersecting; // Update visibility status
    });
  },
  { threshold: 0.1 } // Trigger when 10% of the plane is visible
);

// Attach the observer to the plane container
observer.observe(planeContainer);

// Start the smooth scroll animation
smoothScrollEffect();



class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	
}

new StickyNavigation();





// Get the form element
const form = document.getElementById("contactForm");

// Add an event listener for the form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  const formData = new FormData(form); // Collect the form data
  const data = {};

  // Convert FormData to a plain object
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Submit the data using Fetch API
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.success) {
        alert("Your message has been sent successfully!");
      } else {
        alert("Failed to send your message. Please try again.");
      }
    })
    .catch((error) => {
      console.error("An error occurred!", error);
      alert("An error occurred. Please try again.");
    });

  // Reset the form fields
  form.reset();
});






// loader function





document.addEventListener("DOMContentLoaded", function () {
  const splash = document.getElementById("splash");
  if (!sessionStorage.getItem("visited")) {
      // Show loader on the first visit
      splash.style.display = "block";
      setTimeout(() => {
          splash.style.display = "none";
          sessionStorage.setItem("visited", "true");
      }, 3000); // Loader duration in milliseconds
  } else {
      splash.style.display = "none";
  }
});





