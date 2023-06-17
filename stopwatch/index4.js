let time = document.querySelector('.time');

const startStopButt = document.querySelector('.run');

const restartButt = document.querySelector('.resetButton');

    let minutes = 0;
    let seconds = 0;
    let hours   = 0;


ButtonDoesWhat = 'play';



function iterateTime(){

    if(ButtonDoesWhat==='play'){
        seconds++;
        if(seconds%60 === 0){
            minutes++;
            seconds=0;
    
            if(minutes%60===0){
                minutes=0;
                hours++
            }
        }
    
    
        if(seconds<10){
            secondValue= '0'+ seconds;
        }
        else{
            secondValue = seconds;
        }
    
        if(minutes<10){
            minuteValue= '0'+ minutes;
        }
        else{
            minuteValue = minutes;
        }
    
        if(hours<10){
            hourValue= '0'+ hours;
        }
        else{
            hourValue = hours;
        }
    
       let currentTime = hourValue + ':' + minuteValue + ':' + secondValue;
       time.innerHTML=currentTime;
       ButtonDoesWhat = 'stop';   

     


    

    }
    else {
        ButtonDoesWhat = 'play';
        clearInterval(intervalId);
        

    }




}
    

    


startStopButt.onclick =function(){
    intervalId = setInterval(iterateTime,1000);
} ;


restartButt.onclick=() => {
    clearInterval(intervalId);
    time.innerHTML='00:00:00';
    seconds=0;
    minutes=0;
    hours=0;
    ButtonDoesWhat = 'play';
    

    
}


