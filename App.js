const END_DATE_1 = new Date(2020,11,15,0,0,0);   // Params: yyyy, mm, dd, hh, mm, ss
const END_DATE_2 = new Date(2020,11,17,0,0,0);   // Params: yyyy, mm, dd, hh, mm, ss
const END_DATE_3 = new Date(2020,11,25,0,0,0);   // Params: yyyy, mm, dd, hh, mm, ss
const END_DATE_4 = new Date(2021,00,01,0,0,0);   // Params: yyyy, mm, dd, hh, mm, ss
const END_DATE_5 = new Date(2021,00,08,0,0,0);   // Params: yyyy, mm, dd, hh, mm, ss
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

(function() {
    'use strict';

    let timer = setInterval(function() {

        let actualDate = new Date();
        let distance1 = END_DATE_1 - actualDate;
        let distance2 = END_DATE_2 - actualDate;
        let distance3 = END_DATE_3 - actualDate;
        let distance4 = END_DATE_4 - actualDate;
        let distance5 = END_DATE_5 - actualDate;

        showDataInPage(distance1, 'count1');
        showDataInPage(distance2, 'count2');
        showDataInPage(distance3, 'count3');
        showDataInPage(distance4, 'count4');
        showDataInPage(distance5, 'count5');

    }, 1000);

})();

function showDataInPage(distance, element) {

    if (distance < 0) {
        //clearInterval(timer);
        document.getElementById(element).innerHTML = 'EXPIRED!';
        return;
    }

    let days = Math.floor(distance / DAY);
    let hours = Math.floor((distance % DAY) / HOUR);
    let minutes = Math.floor((distance % HOUR) / MINUTE);
    let seconds = Math.floor((distance % MINUTE) / SECOND);

    if (days < 10) days = '0' + days;
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;        

    document.getElementById(element).innerHTML = (days + ":" + hours + ":" + minutes + ":" + seconds);

}
