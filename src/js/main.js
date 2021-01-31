const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const body = document.querySelector("body");

function getScrollPercent() {
  const h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  percentage = Math.round(
    ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
  );
}
window.addEventListener("scroll", getScrollPercent);
window.addEventListener("onload", getScrollPercent);

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

// Scroll animations
// Percent of scrolled window for if statement in the next function
let percentage = 0;

function drawingAnimation() {
  const fObjsToAnimate = document.querySelectorAll(".decoration-separator__path-f");
  const cObjsToAnimate = document.querySelectorAll(".decoration-separator__path-c");
  const pathsToAnimate = document.querySelectorAll(".decoration-separator__path");
  const linesToAnimate = document.querySelectorAll(".decoration-separator__line");

  // Medium screens scroll percentage (less than 1001)
  if (window.innerHeight < 1001) {
    if (percentage >= 10 && window.screen.width >= 992) {
      fObjsToAnimate.forEach((item) => {
        item.style.animation = "f-animation linear 3s forwards";
      });
      cObjsToAnimate.forEach((item) => {
        item.style.animation = "c-animation linear 1s forwards";
      });
      pathsToAnimate.forEach((item) => {
        item.style.opacity = "1";
        item.style.strokeOpacity = "0.5";
      });
      linesToAnimate.forEach((item) => {
        item.style.animation = "lines-animation linear 2s forwards";
      });
    }
    // Large screens scroll percentage (more than 1001)
  } else if (window.innerHeight >= 1001) {
    if (percentage >= 9 && window.screen.width >= 992) {
      fObjsToAnimate.forEach((item) => {
        item.style.animation = "f-animation linear 3s forwards";
      });
      cObjsToAnimate.forEach((item) => {
        item.style.animation = "c-animation linear 2s forwards";
      });
      pathsToAnimate.forEach((item) => {
        item.style.opacity = "1";
        item.style.strokeOpacity = "0.5";
      });
      linesToAnimate.forEach((item) => {
        item.style.animation = "lines-animation linear 2s forwards";
      });
    }
  }
}
window.addEventListener("scroll", drawingAnimation);
