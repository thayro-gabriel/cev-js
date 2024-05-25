var time_f = new Date()
var hour = time_f.getHours()
var minutes = time_f.getMinutes()
var header = window.document.getElementsByClassName('title')[0]
var time_text = window.document.getElementById('time')
var contain = window.document.getElementsByClassName('container')[0]
var back = window.document.getElementById('back')
var picture = window.document.getElementById('image')
var credits = window.document.getElementsByClassName('credits')[0]
var pic = window.document.getElementById('image')

function morning() {
    header.style.color = 'white'
    time_text.innerHTML = `The time right now is ${hour}:${minutes}. Good morning!`
    back.style.background = '#008ccf'
    contain.style.background = 'white'
    pic.src = './img/morning.jpg'
}

function dawn() {
    header.style.color = 'white'
    time_text.innerHTML = `The time right now is ${hour}:${minutes}. What are you doing up so late?`
    back.style.background = '#14144b'
    contain.style.background = '#1c1c68'
    contain.style.color = 'white'
    credits.style.color = 'white'
    pic.src = './img/before-dawn.jpg'
}

function afternoon() {
    header.style.color = 'white'
    time_text.innerHTML = `The time right now is ${hour}:${minutes}. Have a nice day!`
    back.style.background = '#ffae00'
    contain.style.background = '#ff7300'
    contain.style.color = 'white'
    credits.style.color = 'white'
    pic.src = './img/afternoon.jpg'
}

function night() {
    header.style.color = 'white'
    time_text.innerHTML = `The time right now is ${hour}:${minutes}. Good evening, my dear!`
    back.style.background = '#14144b'
    contain.style.background = '#1c1c68'
    contain.style.color = 'white'
    credits.style.color = 'white'
    pic.src = './img/night.jpg'
}

if (hour >= 0 && hour <= 4) {
    dawn()
} else if (hour >= 5 && hour < 12) {
    morning()
} else if (hour <= 18) {
    afternoon()
} else {
    night()
}

