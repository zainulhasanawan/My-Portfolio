"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navUl = document.getElementById("navUl");
  const overlay = document.getElementById("overlay");

  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    navUl.classList.toggle("show");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", function () {
    burger.classList.remove("active");
    navUl.classList.remove("show");
    overlay.classList.remove("active");
  });

  const navLinks = document.querySelectorAll(".nav-links");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      burger.classList.remove("active");
      navUl.classList.remove("show");
      overlay.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var aboutTextParagraphs = document.querySelectorAll(".about-text");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    aboutTextParagraphs.forEach(function (paragraph) {
      if (isElementInViewport(paragraph)) {
        paragraph.classList.add("fade-in");
      }
    });

    if (
      Array.from(aboutTextParagraphs).every((p) =>
        p.classList.contains("fade-in")
      )
    ) {
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);

  handleScroll();
});
