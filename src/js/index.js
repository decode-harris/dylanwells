// element [ down btn ]
const down = document.querySelector('.down');
// section [ introduction ]
const introduction = document.querySelector('#introduction');

// event [ down btn ]
down.addEventListener('click', ()=> {

    // navigates window to introduction section with applied behavior of smooth scrolling
    introduction.scrollIntoView( {ScrollBehavior: 'smooth'});
    

});


let analysis_bath = document.querySelector('#analysis-bath');
let analysis_envi = document.querySelector('#analysis-envi');

analysis_bath.addEventListener('click', ()=> {

    // select pdf
    let pdf = 'src/assets/documents/Analysis-BathHouse.pdf';

    // open pdf
    window.open(pdf);

});

analysis_envi.addEventListener('click', ()=> {

    // select pdf
    let pdf = 'src/assets/documents/Analysis-Environment.pdf';

    // open pdf
    window.open(pdf);

});

