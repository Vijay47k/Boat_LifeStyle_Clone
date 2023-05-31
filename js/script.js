const carousal = document.querySelector(".carousal");
const carousalItems = document.querySelectorAll(".item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

//! Adding events to buttons   - SECTION
let slidePosition = 0;
let totalsliders = carousalItems.length;

const dots = document.querySelectorAll(".dot");

prevBtn.addEventListener("click", () => {
  previous();
});
nextBtn.addEventListener("click", () => {
  next();
});

function upadteposition() {
  carousalItems.forEach((slide, ind) => {
    slide.classList.remove("active");
    slide.classList.add("hidden");
  });
  //          [0].active adding
  carousalItems[slidePosition].classList.add("active");

  // dots
  dots.forEach((dot) => {
    dot.classList.remove("dot-active");
  });

  dots[slidePosition].classList.add("dot-active");
}
// dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    slidePosition = index;
    upadteposition();
  });
});

function previous() {
  upadteposition();

  if (slidePosition == 0) {
    slidePosition = totalsliders - 1;
  } else {
    slidePosition--;
  }
}

function next() {
  upadteposition();

  if (slidePosition == totalsliders - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
}

//! Automatic slider

const Interval = setInterval(() => {
  upadteposition();
  next();
}, 3000);

// JQuery

$(document).ready(() => {
  $("#menu-btn").click(() => {
    $(".navtoggle").slideToggle();
  });

  $("#categories").click(() => {
    $(".scroll-list-categorie").slideToggle();
  });

  $("#more").click(() => {
    $(".scroll-list-more").slideToggle();
  });
});
