const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const headerContent = document.querySelector(".header-content");
const goToTop = document.querySelector(".go-to-top");
const body = document.querySelector("body");
const nav = document.querySelector("nav");

hamburgerIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  headerContent.classList.add("menu-open");
});

nav.addEventListener("click", (e) => {
  e.stopPropagation();
});

closeIcon.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});

goToTop.addEventListener("click", () => {
  body.scrollTo(0, 0);
});

window.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});
