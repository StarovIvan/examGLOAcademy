'use strict';

const slider = ()=> {
    const topSlider = document.querySelector('.top-slider'),
        slide = topSlider.querySelectorAll('.item'),
        table = document.querySelectorAll('.table');
    
    if(document.documentElement.clientWidth > 992){
        table.forEach((item)=> {
            item.style.visibility = 'visible';
            item.style.opacity = '1'; 
        });
    }


    let currentSlide = 0,
    interval; 

    const prevSlide = (item, index, strClass)=> {
        item[index].classList.remove(strClass);
    };

    const nextSlide = (item, index, strClass)=> {
        item[index].classList.add(strClass);
    };

    const autoPlaySlide = ()=> {
        slide[currentSlide].classList.remove('slide_active');
        slide[currentSlide].style.display = 'none';
        prevSlide(slide, currentSlide ,'slide_active');

        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0 ;
        }
        slide[currentSlide].classList.add('slide_active');
        slide[currentSlide].style.display = 'block';
        nextSlide(slide, currentSlide ,'slide_active');
    };

    const startSlide = (time = 1500)=> {
        interval = setInterval(autoPlaySlide, time);
    };
    startSlide();
};

export default slider;