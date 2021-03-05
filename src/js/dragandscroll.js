const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e)=> {
    isDown = true;

    slider.classList.add('active');
    
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    
    // console.log(startX);

});
slider.addEventListener('mouseleave', ()=> {
    isDown = false;

    slider.classList.remove('active');

});
slider.addEventListener('mouseup', ()=> {
    isDown = false;

    slider.classList.remove('active');

});
slider.addEventListener('mousemove', (e)=> {
    
    // stop the function from running
    if(!isDown) return; 

    // prevent default movement
    e.preventDefault();

    // calculate x pos minus slider width
    const x = e.pageX - slider.offsetLeft;
    // test x position
    console.log({x, startX});

    // calculate mouse drag distance
    const walk = ( x - startX ) * 3;
    console.log(walk);

    // init scroll inside slider element
    slider.scrollLeft = scrollLeft - walk;
    
});