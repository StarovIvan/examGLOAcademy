'use strict';

const moveToSection = () =>{
    const topMenu = document.querySelector('.top-menu');

    const scrollBlock = (event)=> {
        event.preventDefault();

        const linkId = event.target.getAttribute('href').substr(1);
            
        document.getElementById(linkId).scrollIntoView({
            behavior: 'smooth',
            block:'start'
        });
            
    };    
    topMenu.addEventListener('click', (event)=> {
        scrollBlock(event);
    });
};

moveToSection();
export default moveToSection;