let nList = []
let numb = window.document.getElementById('numba')

function isEmpty(n) {
    if (n.value.length == 0) {
        console.log("There's nothing typed")
        return true
    } else {
        console.log("There's something typed")
        return false
    }
}

function outofRange(n) {
    if (Number(n.value) >= 0 && Number(n.value) <= 100) {
        console.log("It's on range")
        return false
    } else {
        console.log("It's out of range!")
        return true
    }
}

function isAlreadyAdded(n, param) {
    for (let key in param) {
        if (Number(n.value) == param[key]) {
            console.log(`ALREADY TYPED!!! The current input number: ${Number(n.value)}; The number already added: ${param[key]}`)
            return true
        }
    }
    console.log('Not added yet!!!')
    return false
}

function addNumber(n, param) {
    let nToNumber = Number(n.value)
    let select = window.document.getElementById('tab')
    let tab = document.createElement('option')
    tab.text += `${nToNumber} added!`
    select.appendChild(tab)
}

function validating(n, param) {
    if (isEmpty(n) == true) {
        window.alert('Please, type something before trying to add!')
    } else if (outofRange(n) == true) {
        window.alert('Please, type some number between 0 and 100!')
    } else if (isAlreadyAdded(n, param) == true) {
        window.alert('That number is already added!')
    } else {
        addNumber(n)
        return param.push(Number(n.value))
    }
}

