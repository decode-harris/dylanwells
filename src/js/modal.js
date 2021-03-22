let modal = document.querySelector('.modal');

// get the image and insert it into the modal || use alt text as caption
let img = document.querySelectorAll('img');
let modalImg = document.getElementById('img');
let text = document.getElementById('text');

img.forEach(element => {


    element.addEventListener('click', ()=> {
        modal.style.display = 'flex';
        modalImg.src = this.src;
        text.innerHTML = this.alt;

        console.log(img);
    });

    
});


