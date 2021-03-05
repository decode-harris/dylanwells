const thouse_render = document.querySelector('#thouse_render');
console.log(thouse_render);

const workingDrawing = document.querySelectorAll('.working-drawing');

// console.log(project_thouse);


// everist center render selectors
const everist_render_01 = document.querySelector('#everist_render_01');
const everist_render_02 = document.querySelector('#everist_render_02');

const project_everist = document.querySelector('#project_everist');
const everist_containers = document.querySelectorAll('#project_everist .working-drawing-container');

console.log('everist containers : ' + everist_containers);

const images = document.querySelectorAll('img');
console.log(images);


const thouse_images = document.querySelectorAll('#project_thouse img');
const thouse_containers = document.querySelectorAll('#project_thouse .working-drawing-container');


const praxis_images = document.querySelectorAll('#project_praxis img');
const praxis_containers = document.querySelectorAll('#project_praxis .working-drawing-container');

const section_x = document.querySelectorAll('.section-x');

let icons = document.querySelectorAll('.icon');

let hidden = document.querySelectorAll('.text-hidden');




// // function [ mql ] : media query listener
window.onload = mql = (e)=> {
    
    // media query [ mq ] variable for devices greater than 700px
    let mq = window.matchMedia('(min-width: 700px)');

    // assign event [ e ] to match media [ mq ] value
    e = mq;

    // validate if page matches media query [ mq ]
    if (e.matches) {

        hidden.forEach(element => {
            element.style.display = 'flex';
        });
        
        moreEnviron.style.display = 'none';
        moreThouse.style.display = 'none';
        moreBath.style.display = 'none';
        moreEverist.style.display = 'none';
        moreFacility.style.display = 'none';
        moreMalt.style.display = 'none';
        
        thouse_render.setAttribute('src', 'src/assets/images/T_House/render-desktop.jpg');
        
        thouse_containers.forEach(element => {

            // remove global styles from image element for specific width properties
            element.removeAttribute('style', 'max-width: 100vw, max-height: 100vh');
            element.setAttribute('style', 'min-width: 100vw');

            // test
            console.log('thouse styles applied to mobile');
            
        });

        everist_containers.forEach(element => {

            // remove global styles from image element for specific width properties
            element.removeAttribute('style', 'max-width: 100vw, max-height: 100vh');
            element.setAttribute('style', 'min-width: 100vw');

            // test
            console.log('everist styles applied to mobile');
            
        });
        
        images.forEach(element => {

            // remove global styles from image element for specific width properties
            element.removeAttribute('style', 'max-width: 100vw, max-height: 100vh');
            
            // test
            console.log('images removed from mobile');
            
        });
        icons.forEach(element => {
            element.setAttribute('style', 'max-width: 100px; max-height: 100px');
        });
        
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

        icons.forEach(element => {
            element.setAttribute('style', 'max-width: 100px; max-height: 100px');
        });

        
        
        // test
        console.log('[ mql ] : mobile media query');

    }

    // event [ mq ] listener, run mql function on [ mq ] change
    mq.addEventListener('change', mql);
    
};

// element [ more-environment btn ]
let moreEnviron = document.querySelector('#more-environment');
let environText = document.querySelector('#more-environment-text');
moreEnviron.style.display = 'flex';


// event [ more-environment btn ]
moreEnviron.addEventListener('click', ()=> {

    if (environText.style.display != 'flex') {
        environText.style.display = 'flex';
        moreEnviron.innerHTML = 'less';
    }
    else {
        environText.style.display = 'none';
        moreEnviron.innerHTML = 'more';
    }

});

// element [ more-facility btn ]
let moreFacility = document.querySelector('#more-facility');
let facilityText = document.querySelector('#more-facility-text');

moreFacility.addEventListener('click', ()=> {

    if (facilityText.style.display != 'flex') {
        facilityText.style.display = 'flex';
        moreFacility.innerHTML = 'less';
    }
    else {
        facilityText.style.display = 'none';
        moreFacility.innerHTML = 'more';
    }

});

// element [ more-malt btn ]
let moreMalt = document.querySelector('#more-malt');
let maltText = document.querySelector('#more-malt-text');

moreMalt.addEventListener('click', ()=> {

    if (maltText.style.display != 'flex') {
        maltText.style.display = 'flex';
        moreMalt.innerHTML = 'less';
    }
    else {
        maltText.style.display = 'none';
        moreMalt.innerHTML = 'more';
    }

});

// element [ more-everist btn ]
let moreEverist = document.querySelector('#more-everist');
let everistText = document.querySelector('#more-everist-text');

moreEverist.addEventListener('click', ()=> {

    if (everistText.style.display != 'flex') {
        everistText.style.display = 'flex';
        moreEverist.innerHTML = 'less';
    }
    else {
        everistText.style.display = 'none';
        moreEverist.innerHTML = 'more';
    }

});


// element [ more-thouse btn ]
let moreThouse = document.querySelector('#more-thouse');
let thouseText = document.querySelector('#more-thouse-text');

// event [ more-bath btn ]
moreThouse.addEventListener('click', ()=> {

    if (thouseText.style.display != 'flex') {
        thouseText.style.display = 'flex';
        moreThouse.innerHTML = 'less';
    }
    else {
        thouseText.style.display = 'none';
        moreThouse.innerHTML = 'more';
    }

});

// element [ more-bath btn ]
let moreBath = document.querySelector('#more-bath');
let bathText = document.querySelector('#more-bath-text');

// event [ more-bath btn ]
moreBath.addEventListener('click', ()=> {

    if (bathText.style.display != 'flex') {
        bathText.style.display = 'flex';
        moreBath.innerHTML = 'less';
    }
    else {
        bathText.style.display = 'none';
        moreBath.innerHTML = 'more';
    }

});

// element [ down btn ]
const down = document.querySelector('.down');
// section [ introduction ]
const introduction = document.querySelector('#introduction');

// event [ down btn ]
down.addEventListener('click', ()=> {

    // navigates window to introduction section with applied behavior of smooth scrolling
    introduction.scrollIntoView( {behavior: 'smooth'});
    
    // test
    console.log('btn clicked');


});




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



