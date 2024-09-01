/*Sempre por a variável em camelcase, depois seleciona a classe dela do html*/

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');





const getTime = () => {
    const date = new Date();

    return {
        hours: date.getUTCHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };  
}
