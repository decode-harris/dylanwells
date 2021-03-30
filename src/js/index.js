// const thouse_render = document.querySelector('#thouse_render');
// console.log(thouse_render);

// const workingDrawing = document.querySelectorAll('.working-drawing');

// // console.log(project_thouse);


// // everist center render selectors
// const everist_render_01 = document.querySelector('#everist_render_01');
// const everist_render_02 = document.querySelector('#everist_render_02');

// const project_everist = document.querySelector('#project_everist');
// const everist_containers = document.querySelectorAll('#project_everist .working-drawing-container');

// console.log('everist containers : ' + everist_containers);

// const images = document.querySelectorAll('img');
// console.log(images);


// const thouse_images = document.querySelectorAll('#project_thouse img');
// const thouse_containers = document.querySelectorAll('#project_thouse .working-drawing-container');


// const praxis_images = document.querySelectorAll('#project_praxis img');
// const praxis_containers = document.querySelectorAll('#project_praxis .working-drawing-container');

// const section_x = document.querySelectorAll('.section-x');

// let icons = document.querySelectorAll('.icon');






// // // function [ mql ] : media query listener
// window.onload = mql = (e)=> {
    
//     // media query [ mq ] variable for devices greater than 700px
//     let mq = window.matchMedia('(min-width: 700px)');

//     // assign event [ e ] to match media [ mq ] value
//     e = mq;

//     // validate if page matches media query [ mq ]
//     if (e.matches) {

        
        
//         // // moreEnviron.style.display = 'none';
//         // // moreThouse.style.display = 'none';
//         // // moreBath.style.display = 'none';
//         // // moreEverist.style.display = 'none';
//         // // moreFacility.style.display = 'none';
//         // // moreMalt.style.display = 'none';
        
//         // // thouse_render.setAttribute('src', 'src/assets/images/T_House/render-desktop.jpg');
        
//         // thouse_containers.forEach(element => {

//         //     // remove global styles from image element for specific width properties
//         //     element.removeAttribute('style', 'max-width: 100vw, max-height: 100vh');
//         //     element.setAttribute('style', 'min-width: 100vw');

//         //     // test
//         //     console.log('thouse styles applied to mobile');
            
//         // });

//         // everist_containers.forEach(element => {

//         //     // remove global styles from image element for specific width properties
//         //     element.removeAttribute('style', 'max-width: 100vw, max-height: 100vh');
//         //     element.setAttribute('style', 'min-width: 100vw');

//         //     // test
//         //     console.log('everist styles applied to mobile');
            
//         // });
        
//         images.forEach(element => {

//             // remove global styles from image element for specific width properties
//             element.removeAttribute('style', 'max-width: 100vw, max-height: 100vh');
            
//             // test
//             console.log('images removed from mobile');
            
//         });
//         icons.forEach(element => {
//             element.setAttribute('style', 'max-width: 100px; max-height: 100px');
//         });
        
//         // test image
//         // console.log(thouse_render.src);

//         // test media query
//         console.log('[ mql ] : desktop media query');

//     }
//     // default functions for switching to non matched media query [ mobile ]
//     else {

        
//         // thouse_render.setAttribute('src', 'src/assets/images/T_House/render-mobile.jpg');

//         // test image
//         // console.log(thouse_render.src);

//         icons.forEach(element => {
//             element.setAttribute('style', 'max-width: 100px; max-height: 100px');
//         });

        
        
//         // test
//         console.log('[ mql ] : mobile media query');

//     }

//     // event [ mq ] listener, run mql function on [ mq ] change
//     mq.addEventListener('change', mql);
    
// };



// element [ down btn ]
const down = document.querySelector('.down');
// section [ introduction ]
const introduction = document.querySelector('#introduction');

// event [ down btn ]
down.addEventListener('click', ()=> {

    // navigates window to introduction section with applied behavior of smooth scrolling
    introduction.scrollIntoView( {ScrollBehavior: 'smooth'});
    
    // test
    console.log('btn clicked');


});



// const email = document.querySelector('#email');

// email.addEventListener('click', ()=> {

//     email.setAttribute('src', 'mailto:dylanwells@hotmail.com');

//     console.log('email ev ' + email.src);

// });


// function touch2Mouse(e)
// {
// var theTouch = e.changedTouches[0];
// var mouseEv;

// switch(e.type)
// {
//     case "touchstart": mouseEv="mousedown"; break;  
//     case "touchend":   mouseEv="mouseup"; break;
//     case "touchmove":  mouseEv="mousemove"; break;
//     default: return;
// }


// // depricated function parameteres [ change below ]
// var mouseEvent = document.createEvent("MouseEvent");
// mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
// theTouch.target.dispatchEvent(mouseEvent);

// e.preventDefault();

// console.log('touch2mouse active');
// }






















// touch events [ desktop ]

// environmental_ID.addEventListener('touchstart', process_touchstart, false);

// someElement.addEventListener('touchmove', process_touchmove, false);

// someElement.addEventListener('touchcancel', process_touchcancel, false);

// someElement.addEventListener('touchend', process_touched, false);


// function [ process_touchstart ]
// function process_touchstart(e) {

//     // prevent default actions
//     e.preventDefault();

//     // test
//     console.log('touchstart : ' + 'element one');
    

// }



