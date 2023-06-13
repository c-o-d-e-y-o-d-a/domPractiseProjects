const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');

const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');

const image = document.getElementById('Img');

q1.onclick= (() => {

    if(a1.style.display=='none'){
        a1.style.display= 'block';
        

    }
    else{
        a1.style.display='none';
    }
})


q2.onclick= (() => {
    if(a2.style.display=='none'){
        a2.style.display= 'block';

    }
    else {
        a2.style.display='none';
    }
})


q3.onclick= (() => {
    if(a3.style.display=='none'){
        a3.style.display= 'block';

    }
    else{
        a3.style.display='none';
    }
})




