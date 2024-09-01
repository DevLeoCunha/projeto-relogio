/*Sempre por a variável em camelcase, depois seleciona a classe dela do html*/
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const getTime = () => {
    const date = new Date();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    } 
}

setInterval(() => { 
    const { seconds, minutes, hours } = getTime();  /* a variavel const para retirar o retorno da função do gettime acima que é um objeto, neste caso retiramos os segundos da função gettime*/ 

    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;
}, 1000);

