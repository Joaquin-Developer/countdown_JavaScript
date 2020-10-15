/* setInterval */

(function() {
    'use strict';

    const END_DATE = new Date(2020,11,4,0,0,0);   // Params: yyyy, mm, dd, hh, mm, ss
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    var timer = setInterval(function() {

        var actualDate = new Date();
        var distance = END_DATE - actualDate;
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('count1').innerHTML = 'EXPIRED!';
            return;
        }

        var days = Math.floor(distance / DAY);
        var hours = Math.floor((distance % DAY) / HOUR);
        var minutes = Math.floor((distance % HOUR) / MINUTE);
        var seconds = Math.floor((distance % MINUTE) / SECOND);

        if (days < 10)
            days = '0' + days;

        if (hours < 10)
            hours = '0' + hours;

        if (minutes < 10)
            minutes = '0' + minutes;
        
        if (seconds < 10)
            seconds = '0' + seconds;

        document.getElementById('count1').innerHTML = (days + ":" + hours + ":" + minutes + ":" + seconds);

    }, 1000);

})();