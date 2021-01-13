
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");


// Hamburger menu handler and social links in mobile version
function handleClick() {
  hamburger.classList.toggle("hamburger--active");
  hamburger.setAttribute(
    "aria-expanded",
    hamburger.classList.contains("hamburger--active")
  );
  nav.classList.toggle("navigation--active");
}
hamburger.addEventListener("click", handleClick);