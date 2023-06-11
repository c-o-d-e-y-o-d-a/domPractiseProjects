var modal = document.getElementById("modalWindow");

var btn = document.getElementById("button1");

var span = document.getElementsByClassName("exitButton")[0];

var body = document.querySelector('body');

btn.onclick = function() {
    if(modal.style.display = "none"){
        modal.style.display = "block";
    }
    
  
}



span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    
    if (event.target !== modal && event.target !== btn) {
        modal.style.display = "none";
      }
      
  
}

 function fn(){
    modal.style.display=="none";
}

document.body.addEventListener('click', fn, true);