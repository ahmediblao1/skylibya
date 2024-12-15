{/* <script>
document.addEventListener("DOMContentLoaded", () => {
  const languageBtn = document.getElementById("language-btn");
  const languageMenu = document.getElementById("language-menu");

  // Toggle language dropdown visibility
  languageBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event bubbling to the document
    languageMenu.classList.toggle("active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!languageMenu.contains(e.target) && !languageBtn.contains(e.target)) {
      languageMenu.classList.remove("active");
    }
  });
});

// Language switching function
async function changeLanguage(lang) {
  const response = await fetch("./assets/translations/translations.json");
  const translations = await response.json();
  const elements = document.querySelectorAll("[data-translate]");

  elements.forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update the `lang` and `dir` for the main content but not the header
  const mainContent = document.querySelector("main");
  document.documentElement.lang = lang;
  if (lang === "ar") {
    mainContent.setAttribute("dir", "rtl");
  } else {
    mainContent.setAttribute("dir", "ltr");
  }
}

</script> */}