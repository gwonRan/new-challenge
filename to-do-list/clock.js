const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".js-title");

function getTime() {
    const date = new Date(); /*객체라고만 생각해*/
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`; /*객체 안에 텍스트를 넣기 위해서야*/
}

function init(){  
    getTime(); /*나눠서 문제를 해결하라는데 무슨 말일까?*/
}

init(); /*모든기능초기화*/