'use strict';

const validator = ()=> {
    const formGroup = document.querySelectorAll('.form-group');
    formGroup.forEach((item)=> {
        item.addEventListener('click', (event)=> {

            if(event.target.placeholder === 'Ваше имя'){
                item.addEventListener('keydown', (event)=> {
                    if(!/[а-яё]/i.test(event.key)){
                        return event.preventDefault();
                    }
                });
            }

            if(event.target.placeholder === 'Телефон*'){

                const stopPasteNumber = (input)=> {
                    item.addEventListener('keydown', (event)=> {
                        if(!/[0-9\+]/i.test(event.key)){
                            return event.preventDefault();
                        }
                        if(input){
                            return event.preventDefault();
                        }
                    });
                };

                item.addEventListener('input', (event)=> {
                    const targetLength = event.target.value.match(/[\d\+]/g).length;
                    if(targetLength >= 20){
                        stopPasteNumber(targetLength === 20);
                    }
                });

                item.addEventListener('keydown', (event)=> {
                    if(!/[0-9\+]/i.test(event.key)){
                        return event.preventDefault();
                    }
                });
            }
        });
    });
};

export default validator;

