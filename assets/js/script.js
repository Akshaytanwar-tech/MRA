var splide = new Splide("#feedback-crousel", {
  type: "loop",
  rewind: true,
  pagination: false,
});

splide.mount();

// search button popup

let popup = document.getElementById("searchPopup");
let overlay = document.getElementById("searchPopupOverlay");
let searchContainer = document.getElementById("search-cont");
function openSearchPopup() {
  overlay.style.display = "block";
  searchContainer.style.height = "100vh";
  setTimeout(() => {
    popup.classList.add("active");
  }, 10);
  document.body.style.overflow = "hidden";
}
function closeSearchPopup() {
  searchContainer.style.height = "0";
  popup.classList.remove("active");
  setTimeout(() => {
    document.getElementById("searchPopupOverlay").style.display = "none";
    document.body.style.overflow = "auto";
  }, 400);
}

// hamburger animation

$(document).ready(function () {
  $(".he-in-top-right").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".hamburger-in").toggleClass("ham-active");
    $("body").toggleClass("overflow-hidden");
    $(".hamburger").toggleClass("is-active");
  });
});
// $(".Hamburger-in").click(function () {
//   $(this).toggleClass("ham-active");
// });

var splide1 = new Splide("#explore-crousel", {
  type: "loop",
  perPage: 3,
  focus: "center",
  omitEnd: true,
  pagination: false,
  // padding: { right: "20%" },
  arrows: false,
  gap: "20px",
  breakpoints: {
    1250: {
      perPage: 2,
      padding: { left: "20%" },
    },
    768: {
      perPage: 1, // For screens smaller than 768px
      padding: { right: "20%", left: 0 },
    },
  },
});

splide1.mount();

var splide2 = new Splide("#avail-itm-crousel", {
  type: "loop",
  perPage: 3,
  focus: "center",
  omitEnd: true,
  pagination: false,
  // padding: { right: "20%" },
  arrows: false,
  gap: "20px",
  breakpoints: {
    1250: {
      perPage: 2,
      padding: { left: "20%" },
    },
    768: {
      perPage: 1, // For screens smaller than 768px
      padding: { right: "20%", left: 0 },
    },
  },
});

splide2.mount();
var splide3 = new Splide("#tt-slider", {
  type: "loop",
  perPage: 3,
  focus: "center",
  omitEnd: true,
  pagination: false,
  // padding: { right: "20%" },
  arrows: false,
  gap: "20px",
  breakpoints: {
    1250: {
      perPage: 2,
      padding: { left: "20%" },
    },
    768: {
      perPage: 1, // For screens smaller than 768px
      padding: { right: "20%", left: 0 },
    },
  },
});

splide3.mount();
