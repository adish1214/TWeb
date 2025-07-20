import { locations } from "../scripts/locations.js";
import { galleryImages } from "./gallery.js";
let travelCardContainer = document.querySelector(".travel-cards");

locations.forEach((el) => {
  travelCardContainer.innerHTML += `
    <div class="card">
                <img src="images/Location Cards/${el.location}.jpg" />
                <div class="info">
                  <h1>${el.location}</h1>
                  <p>
                    ${el.locationInfo}
                  </p>
                </div>
              </div>

    `;
});

let galleryContainer = document.querySelector(".third-page-gallery-container");
galleryImages.forEach((image) => {
  console.log(image.id)
  galleryContainer.innerHTML += `
  <div class="image-container image-container-${image.id}">
  <img src="${image.image}" />
  </div>
  `;
});

let scrollContainer = document.querySelector(".third-page-gallery-container");
let lScrollBtn = document.querySelector(".lbtn");
let rScrollBtn = document.querySelector(".rbtn");
let imageContainer = document.querySelectorAll(".image-container");
console.log(imageContainer)
const containerWidth = scrollContainer.getBoundingClientRect().width;
scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += 1.6*evt.deltaY;
});

lScrollBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= containerWidth;
  wait(500);
});
rScrollBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += containerWidth
});

