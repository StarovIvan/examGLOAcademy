'use strict';
const showModal = ()=> {
    const header = document.querySelector('.header'),
        modalCallback = document.querySelector('.modal-callback'),
        modalClose = document.querySelector('.modal-close'),
        modalOverlay = document.querySelector('.modal-overlay'),
        buttonServices = document.querySelector('.button-services'),
        sliderItem = document.querySelector('.services-carousel').children;
        
    let set = new Set();

    set.add(modalClose);
    set.add(modalOverlay);

    const openModal = ()=> {
        modalCallback.style.display = 'block';
        modalOverlay.style.display = 'block';   
    };

    header.addEventListener('click', (event)=> {
        if(event.target.classList.contains('callback-btn')){
            openModal();
        }
    });

    buttonServices.addEventListener('click', ()=> {
        openModal();
    });

    for(const item of sliderItem){
        item.addEventListener('click', ()=> {
            openModal();
        });
    }

    set.forEach((item)=> {
        item.addEventListener('click', ()=> {
            modalCallback.style.display = 'none';
            modalOverlay.style.display = 'none';   
        });
    });
};
export default showModal;