'use strict';

const accordeonPlay = ()=> {
    const accordeon = document.querySelector('.accordeon'),
        element = accordeon.querySelectorAll('.element'),
        elementContent = accordeon.querySelectorAll('.element-content');
    
        accordeon.addEventListener('click', (event)=> {
            const target = event.target;

            elementContent.forEach((item)=> {
                item.style.display = 'none';
            });

            element.forEach((item)=> {
                item.classList.remove('active');
            });
            target.parentNode.classList.add('active');
            target.parentNode.lastElementChild.style.display = 'block';
        });
};

export default accordeonPlay;