document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("mobile-nav");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
    menuToggle.classList.toggle("open");
  });
});
