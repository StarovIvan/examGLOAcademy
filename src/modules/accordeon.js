'use strict';

const accordeon = ()=> {
    const accordeon = document.querySelector('.accordeon'),
        element = accordeon.querySelectorAll('.element'),
        elementContent = accordeon.querySelectorAll('.element-content');
        
    element.forEach((item) => {
        item.addEventListener('click', (event) => {
            item.classList.toggle('active');
            item.querySelector('.element-content').style.display = 'block';

            if(!item.classList.contains('active')){
            item.querySelector('.element-content').style.display = 'none';
        }
        });
        
    });
    
};

export default accordeon;