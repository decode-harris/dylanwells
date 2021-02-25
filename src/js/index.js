const thouse_render = document.querySelector('#thouse_render');
console.log(thouse_render);

const workingDrawing = document.querySelectorAll('.working-drawing');

// console.log(project_thouse);


// everist center render selectors
const everist_render_01 = document.querySelector('#everist_render_01');
const everist_render_02 = document.querySelector('#everist_render_02');


const images = document.querySelectorAll('img');
console.log(images);


const thouse_images = document.querySelectorAll('#project_thouse img');
const thouse_containers = document.querySelectorAll('#project_thouse .working-drawing-container');


const praxis_images = document.querySelectorAll('#project_praxis img');
const praxis_containers = document.querySelectorAll('#project_praxis .working-drawing-container');

const section_x = document.querySelectorAll('.section-x');

// // function [ mql ] : media query listener
window.onload = mql = (e)=> {
    
    // media query [ mq ] variable for devices greater than 700px
    let mq = window.matchMedia('(min-width: 700px)');

    // assign event [ e ] to match media [ mq ] value
    e = mq;

    // validate if page matches media query [ mq ]
    if (e.matches) {
        
        // section_x.removeAttribute('style', 'min-width: 50vw');

        thouse_render.setAttribute('src', 'src/assets/images/T_House/render-desktop.jpg');
        thouse_render.setAttribute('style', 'width: 100vw');
        
        images.forEach(element => {

            // remove global styles from image element for specific width properties
            element.removeAttribute('style', 'max-width: 100vw, max-height: 100vh');
            
        });        
        
        // praxis_containers.forEach(element => {
        //     element.setAttribute('style', 'max-width: 80vw');

        //     // test
        //     console.log(element);
        // });

        // praxis_images.forEach(element => {
        //     element.setAttribute('style', 'width: 100%');
        // });

        

        // thouse_render.style.minWidth = '200vw';
        
        // test image
        console.log(thouse_render.src);

        // test media query
        console.log('[ mql ] : desktop media query');

    }
    // default functions for switching to non matched media query [ mobile ]
    else {

        thouse_render.setAttribute('src', 'src/assets/images/T_House/render-mobile.jpg');

        // test image
        console.log(thouse_render.src);
        
        // test
        console.log('[ mql ] : mobile media query');

    }

    // event [ mq ] listener, run mql function on [ mq ] change
    mq.addEventListener('change', mql);
    
};