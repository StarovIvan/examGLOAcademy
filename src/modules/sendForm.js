'use strict';

const sendForm = ()=> {
    const errorMessage = 'Ошибка',
        loadedMessage = 'Идёт отправка...',
        successMessage = 'Отправлено';

    const selectorForm = document.getElementById('callback'),
        fromInput = selectorForm.querySelector('form'),
        titleForm = selectorForm.querySelector('.title-h2'),
        span = selectorForm.querySelector('p'),
        formControl = selectorForm.querySelectorAll('.form-control');

    const blockInfo = document.createElement('div');
            

    const createBlockInfo = (info , selector = 'text_info')=> {
        blockInfo.classList.add(selector);
        blockInfo.textContent = info;
        titleForm.appendChild(blockInfo);
    };

    const dataPreparation = (form)=> {
        form.addEventListener('submit', (event)=> {
            event.preventDefault();
            
            const formData = new FormData(form);
            const body = {};

            
            formData.forEach((elem, key)=> {
                body[key] = elem;
            });

            postData(body, ()=> {
                createBlockInfo(successMessage, 'success_form');
                
            }, (error)=> {
                createBlockInfo(errorMessage, 'error_form');
            });

        });
    };
    dataPreparation(fromInput);

    const postData = (body, success, error)=> {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', ()=> {
            createBlockInfo(loadedMessage, );

            if(request.readyState !== 4){
                return;
            }
            if(request.status === 200){
                success();

            } else{
                error(request.status);
            }

        });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(body));
    };
};
export default sendForm;