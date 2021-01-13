const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const body = document.querySelector("body");

// Hamburger menu handler and social links in mobile version
function handleClick() {
  hamburger.classList.toggle("hamburger--active");
  hamburger.setAttribute(
    "aria-expanded",
    hamburger.classList.contains("hamburger--active")
  );
  nav.classList.toggle("navigation--active");
  disableScroll();
}
hamburger.addEventListener("click", handleClick);

function disableScroll() {
  if (hamburger.classList.contains("hamburger--active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "unset";
  }
}
