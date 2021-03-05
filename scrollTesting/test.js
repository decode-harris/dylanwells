// select the slide html element
const slider = document.querySelector('.wrapper');

// declare function variables
let isDown = false;
let startX;
let scrollLeft;

// event [ mousedown ]
slider.addEventListener('mousedown', (e) => {

    isDown = true;
    slider.classList.add('active');

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

// event [ mouseleave ]
slider.addEventListener('mouseleave', () => {
    
    isDown = false;
    slider.classList.remove('active');

});

// event [ mouseup ]
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

// event [ mousemove ]
slider.addEventListener('mousemove', (e) => {
    
    e.preventDefault();
  
    if(!isDown) return;
    
    const x = e.pageX - slider.offsetLeft;

    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);

});




// const slider = document.querySelector(".wrapper");
// const preventClick = (e) => {
//   e.preventDefault();
//   e.stopImmediatePropagation();
// }
// let isDown = false;
// let isDragged = false;
// let startX;
// let scrollLeft;

// slider.addEventListener("mousedown", e => {
//   isDown = true;
//   slider.classList.add("active");
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });
// slider.addEventListener("mouseup", (e) => {

//     e.preventDefault();
//   isDown = false;
//   const elements = document.querySelectorAll("a");
//   if(isDragged){
//       for(let i = 0; i<elements.length; i++){
//             elements[i].addEventListener("click", preventClick);
//       }
//   }
//   else{
//       for(let i = 0; i<elements.length; i++){
//             elements[i].removeEventListener("click", preventClick);
//       }
//   }
//   slider.classList.remove("active");
//   isDragged =  false;
// });
// slider.addEventListener("mousemove", e => {
//   if (!isDown) return;
//   isDragged =  true;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 2;
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });