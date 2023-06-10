const body = document.querySelector('body');
const modalBox = document.querySelector('.modal');

const button = document.querySelector('.button1');





button.addEventListener('hover',showModal);

function showModal(){
    if(modalBox.style.display===none){
        modalBox.style.display='inline-block';

    }
    body.style.opacity=0.7;


}

body.addEventListener('click',removeModal);

function removeModal(){
    body.style.opacity=1;

}
