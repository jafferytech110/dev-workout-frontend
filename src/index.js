import _ from "lodash";
import "./style.css";
import "./iStock-1144.jpg";
import "./iStock-1157.jpg";

//slideshow

//getting main slider element with .slider class
const slider = document.querySelector(".slider");
console.log(slider);

//setting time duration for slider image
//unit is in milli seconds
const timeDuration = 8000;

//image counter
let count = 1;

//images are stored in an array
let images = [];
images[0] = "./iStock-1144.jpg";
images[1] = "./iStock-1157.jpg";

//getting h1 of slider
const sliderh1 = document.querySelector(".slider-h1");
let text = ["we prefer pug over bug", "webpack for code packing"];

//setting initial image
slider.style.backgroundImage = `url(images/${images[0]})`;

//using setInterval function to keep calling slidingImage function after some duration
setInterval(slidingImage, timeDuration);

function slidingImage() {
  slider.style.backgroundImage = `url(images/${images[count]})`;
  sliderh1.textContent = text[count];
  if (count < images.length - 1) {
    count++;
  } else {
    count = 0;
  }
}
