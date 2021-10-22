'use strict';
const showModal = ()=> {
    const header = document.querySelector('.header'),
    modalCallback = document.querySelector('.modal-callback'),
    modalClose = document.querySelector('.modal-close'),
    modalOverlay = document.querySelector('.modal-overlay'),
    buttonServices = document.querySelector('.button-services');
console.log(buttonServices);

    header.addEventListener('click', (event)=> {
        if(event.target.classList.contains('callback-btn')){
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';   
        }
    });

    buttonServices.addEventListener('click', (event)=> {
        // if(event.target.classList.contains('callback-btn')){
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';
        // }
    });

    modalClose.addEventListener('click', ()=> {
        modalCallback.style.display = 'none';
        modalOverlay.style.display = 'none';
    });

    modalOverlay.addEventListener('click', ()=> {
        modalCallback.style.display = 'none';
        modalOverlay.style.display = 'none';
    });
};


export default showModal;