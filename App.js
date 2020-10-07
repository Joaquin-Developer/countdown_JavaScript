/**
 * CountDown in JavaScript.-
 */
const end_date = new Date('10/06/2020 11:46 PM');
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//var timer = setTimeout(updateCountDown(), 1000);

function updateCountDown() {
    var actualDate = new Date();
    var distance = end_date - actualDate;
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('paragraph').innerHTML = 'EXPIRED!';
        return;
    }

    var days = Math.floor(distance / day);
    var hours = Math.floor((distance % day) / hour);
    var minutes = Math.floor((distance % hour) / minute);
    var seconds = Math.floor((distance % minute) / second);

    var stringData = days + ":" + hours + ":" + minutes + ":" + seconds;
    console.log(stringData);
    document.getElementById('paragraph').innerHTML = stringData;

}
//window.onload = setInterval(updateCountDown(), 1000);   // dada 1s se ejecuta esta funcion

function repetir() {
    setTimeout(updateCountDown(), 1000);
}

/**
 * EN chromium no funciona el setInterval ni el setTimeout :/
 */

window.onload = repetir();
