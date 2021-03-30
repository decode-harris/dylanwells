// element [ down btn ]
const down = document.querySelector('.down');
// section [ introduction ]
const introduction = document.querySelector('#introduction');

// event [ down btn ]
down.addEventListener('click', ()=> {

    // navigates window to introduction section with applied behavior of smooth scrolling
    introduction.scrollIntoView( {ScrollBehavior: 'smooth'});
    

});
