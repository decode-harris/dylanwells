// // select the slide html element
// const slider = document.querySelector('.wrapper');

// // declare function variables
// let isDown = false;
// let startX;
// let scrollLeft;

// // event [ mousedown ]
// slider.addEventListener('mousedown', (e) => {

//     isDown = true;
//     slider.classList.add('active');

//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// });

// // event [ mouseleave ]
// slider.addEventListener('mouseleave', () => {
    
//     isDown = false;
//     slider.classList.remove('active');

// });

// // event [ mouseup ]
// slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// // event [ mousemove ]
// slider.addEventListener('mousemove', (e) => {
    
//     e.preventDefault();
  
//     if(!isDown) return;
    
//     const x = e.pageX - slider.offsetLeft;

//     const walk = (x - startX) * 3; //scroll-fast
//     slider.scrollLeft = scrollLeft - walk;
//     console.log(walk);

// });

var swiper = new Swiper('.swiper-container', {

  // default parameters
  slidesPerView: 1,
  spaceBetween: 10,

  freemode: true,

  breakpoints: {

    600: {

      slidesPerView: 2,
      spaceBetween: 10,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    

  },

  
  
  scrollbar: {

    el: '.swiper-scrollbar',
    hide: true,
    
  },

  navigation: {

    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

var swiperWide = new Swiper('.swiper-container-wide', {

  // default parameters
  slidesPerView: 1,
  spaceBetween: 0,

  freemode: true,

  breakpoints: {

    600: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    960: {
      slidesPerView: 'auto',
      spaceBetween: 0,

      
    },
  },

  scrollbar: {

    el: '.swiper-scrollbar',
    hide: true,
    
  },

  navigation: {

    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
  

  
});




















































// const slider = document.querySelector('.wrapper');

// slider.forEach(element => {
//     element.addEventListener('mousedown', (e) => {

//         isDown = true;
//         slider.classList.add('active');
    
//         startX = e.pageX - slider.offsetLeft;
//         scrollLeft = slider.scrollLeft;
//     }); 
// });


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