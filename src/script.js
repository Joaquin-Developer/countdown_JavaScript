// 'use strict'

// Params: yyyy, mm, dd, hh, mm, ss
const END_DATE_1 = new Date(2023, 04, 29, 11, 0, 0)
const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

const SHOW_DATES = [
    END_DATE_1
]

function showDataInPage(distance, element, nameData) {

    const htmlElement = document.getElementById(element)
    htmlElement.style.lineHeight = "15px"

    if (distance < 0) {
        //clearInterval(timer);
        htmlElement.innerHTML = 'END!'
        return
    }

    let days = Math.floor(distance / DAY)
    let hours = Math.floor((distance % DAY) / HOUR)
    let minutes = Math.floor((distance % HOUR) / MINUTE)
    let seconds = Math.floor((distance % MINUTE) / SECOND)

    if (days < 10) days = '0' + days
    if (hours < 10) hours = '0' + hours
    if (minutes < 10) minutes = '0' + minutes
    if (seconds < 10) seconds = '0' + seconds

    if (!nameData) {
        htmlElement.innerHTML = (days + ":" + hours + ":" + minutes + ":" + seconds)
    } else {
        htmlElement.innerHTML = (nameData + ": " + days + ":" + hours + ":" + minutes + ":" + seconds)
    }

}


addEventListener("load", () => {
    setInterval(() => {
        const actualDate = new Date()

        for (let index = 0; index < SHOW_DATES.length; index++) {
            let date = SHOW_DATES[index]
            let distance = date - actualDate
            showDataInPage(distance, `count_${index + 1}`, undefined)
        }
    }, 1000)

})
