import {locations} from '../scripts/locations.js'
let travelCardContainer = document.querySelector('.travel-cards')

locations.forEach((el) => {
  console.log(el.location)
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

    `
});

let scrollContainer=document.querySelector(".third-page-gallery-container");
let lScrollBtn=document.querySelector(".lbtn");
let rScrollBtn=document.querySelector(".rbtn");
console.log(scrollContainer.clientWidth)

scrollContainer.addEventListener(("wheel"),(evt)=>{
  evt.preventDefault();
  scrollContainer.scrollLeft += 1.2*evt.deltaY;
})

lScrollBtn.addEventListener('click',()=>{
  scrollContainer.scrollLeft -= scrollContainer.clientWidth
  wait(500)
})
rScrollBtn.addEventListener('click',()=>{
  scrollContainer.scrollLeft += scrollContainer.clientWidth
  console.log(scrollContainer.clientWidth)
})
