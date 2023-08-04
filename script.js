let mark = document.querySelector(".mark");
let angela = document.querySelector(".angela");
let jacob = document.querySelector(".jacob");
let rizky = document.querySelector(".rizky-container");
let kimberly = document.querySelector(".kimberly");
let nathan = document.querySelector(".nathan");
let anna = document.querySelector(".anna");
let markAllAsRead = document.querySelector(".readAll");

let everyone = [mark, angela, jacob, rizky, kimberly, nathan, anna];

everyone.forEach((element) => {
  element.addEventListener("click", changeColor);
});

function changeColor() {
  this.style.backgroundColor = "white";
}

markAllAsRead.addEventListener("click", changeColorWrapper);

function changeColorWrapper() {
  mark.style.backgroundColor = "white";
  angela.style.backgroundColor = "white";
  jacob.style.backgroundColor = "white";
  rizky.style.backgroundColor = "white";
  kimberly.style.backgroundColor = "white";
  nathan.style.backgroundColor = "white";
  anna.style.backgroundColor = "white";
}
