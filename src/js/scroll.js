// const env_ID = document.querySelector('#env_ID');
const tho_ID = document.querySelector('#tho_ID');
const bat_ID = document.querySelector('#bat_ID');
const fac_ID = document.querySelector('#fac_ID');
const des_ID = document.querySelector('#des_ID');
const mal_ID = document.querySelector('#mal_ID');

// env_ID.addEventListener('mousedown', horizontal, true);
// env_ID.addEventListener('mouseleave', horizontal, true);
// env_ID.addEventListener('mouseup', horizontal, true);
// env_ID.addEventListener('mousemove', horizontal, true);


// env_ID.forEach(element => {
//     element.addEventListener('mousedown', horizontal, true);
//     element.addEventListener('mouseleave', horizontal, true);
//     element.addEventListener('mouseup', horizontal, true);
//     element.addEventListener('mousemove', horizontal, true);
// });



function horizontal() {

    const env_ID = document.querySelector('#env_ID');



    // select the slide html element
    // const slider = document.querySelector('.wrapper');

    // declare function variables
    let isDown = false;
    let startX;
    let scrollLeft;

    // event [ mousedown ]
    // slider.addEventListener('mousedown', (e) => {

    env_ID.addEventListener('mousedown', (e) => {

        isDown = true;
        env_ID.classList.add('active');

        startX = e.pageX - env_ID.offsetLeft;
        scrollLeft = env_ID.scrollLeft;
    });

    // event [ mouseleave ]
    // env_ID.addEventListener('mouseleave', () => {

    env_ID.addEventListener('mouseleave', (e) => {
        
        isDown = false;
        env_ID.classList.remove('active');

    });

    // event [ mouseup ]
    // env_ID.addEventListener('mouseup', () => {

    env_ID.addEventListener('mouseup', () => {


        isDown = false;
        env_ID.classList.remove('active');
    });

    // event [ mousemove ]
    // env_ID.addEventListener('mousemove', (e) => {

    env_ID.addEventListener('mousemove', (e) => {
        
        e.preventDefault();
    
        if(!isDown) return;
        
        const x = e.pageX - env_ID.offsetLeft;

        const walk = (x - startX) * 3; //scroll-fast
        env_ID.scrollLeft = scrollLeft - walk;
        console.log(walk);

    });

}

// init [ horizontal ] function
// horizontal();




/*

    add onclick event for button    
    loop through project containers
    stop at each container
    cycle back to start position


*/
const env_ID = document.querySelector('#env_ID');
const left = document.querySelector('.left');

left.addEventListener('click', ()=> {

    env_ID.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',

    });


});



