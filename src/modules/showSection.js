'use strict';

const moveToSection = () =>{
    const topMenu = document.querySelector('.top-menu'),
        arrowUp = document.querySelector('.up');

    if(document.documentElement.clientHeight > 1000){
        arrowUp.style.display = 'none';
    }

    const hideArrow = ()=> {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY < 550){
                arrowUp.style.display = 'none';
            } else if(window.scrollY > 550){
                arrowUp.style.display = 'block';
            }
        }); 
    };
    hideArrow();

    const scrollOne = (event)=> {
        event.preventDefault();

        let linkId = event.target.getAttribute('href');

        if(event.target.classList.contains('up')){
            linkId = '.main-wrapper';
            hideArrow();
        }

        document.querySelector(linkId).scrollIntoView({
            behavior: 'smooth',
            block:'start'
        });     
    };  

    topMenu.addEventListener('click', (event)=> {
        scrollOne(event);
    });

    arrowUp.addEventListener('click', scrollOne);
};

export default moveToSection;