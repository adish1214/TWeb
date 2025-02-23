const exploreBtn=document.querySelector('.explore-btn');
function rippleGenerator(e){
  let x = e.clientX - e.target.offsetLeft;
  let y=e.clientY - e.target.offsetTop;


  let ripples = document.createElement('span');
  ripples.style.left = x+'px';
  ripples.style.top = y+'px';
  this.appendChild(ripples);

  setTimeout(()=>{
    ripples.remove()}
    ,5000)
}
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
exploreBtn.addEventListener('mouseenter',rippleGenerator)
exploreBtn.addEventListener('click',rippleGenerator);

