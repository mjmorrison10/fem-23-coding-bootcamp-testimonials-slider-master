const Arrows = document.querySelectorAll(".arrow");
const Slide1 = document.querySelector(".slide-1");
const Slide2 = document.querySelector(".slide-2");

Arrows.forEach((arrow) => {
  arrow.addEventListener("click", function () {
    console.log("test");
    Slide1.style.display = Slide1.style.display == "none" ? "flex" : "none";
    Slide2.style.display = Slide2.style.display == "flex" ? "none" : "flex";
  });
});
