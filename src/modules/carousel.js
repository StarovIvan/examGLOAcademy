'use strict';

const playCarousel = ()=> {
    const main = document.querySelector('.services-elements'),
        wrap = document.querySelector('.services-carousel'),
        slides = document.querySelector('.services-carousel').children,
        prev = document.querySelector('.arrow-left'),
        next = document.querySelector('.arrow-right'),
        sliderWidth = Math.floor(100 / 2);
    let position = 0;
        
    const addToClass = ()=> {
        main.classList.add('slider');
        wrap.classList.add('slider-wrap');
        for (const item of slides){
            item.classList.add('slider-item');
        }
    };
        
    const prevButton = ()=> {
        if(position > 0){
            --position;
            wrap.style.transform = `translateX(-${position * sliderWidth}%)`; 
        }
    };
        
    const nextButton = ()=> {
        if(position < slides.length - 2){
            ++position;
            wrap.style.transform = `translateX(-${position * sliderWidth}%)`;
        }
                
    };
        
    const slideTracking = ()=> {
        prev.addEventListener('click', prevButton);
        next.addEventListener('click', nextButton);
    };

    const init = ()=> {
        addToClass();
        slideTracking();
    };
    init();
};

export default playCarousel;