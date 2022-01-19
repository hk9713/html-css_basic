const clockTitle = document.querySelector(".js-clock");

function calDay(){
    const date = new Date();
    const years = date.getFullYear();
    const today = date.getTime();
    const christmas = new Date(`DEC 25, ${years} 00:00:00`).getTime();

    const gap = christmas - today;
    const day = String(Math.ceil(gap / (1000*60*60*24)));
    const hour = String(Math.ceil((gap % (1000*60*60*24))/(1000*60*60))).padStart(2,"0");
    const min = String(Math.ceil((gap %(1000*60*60))/(1000*60))).padStart(2,"0");
    const sec = String(Math.ceil((gap%(1000*60))/1000)).padStart(2,"0");

    clockTitle.innerText=`${day}d ${hour}h ${min}m ${sec}s`;
}

calDay();
setInterval(calDay, 1000);