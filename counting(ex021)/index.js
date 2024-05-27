function contar() {
    var beginning = Number(window.document.getElementById('begin').value)
    var end = Number(window.document.getElementById('end').value)
    var hop = Number(window.document.getElementById('hop').value)
    var number_cell = window.document.getElementsByClassName('number_cell')[0]
    if (beginning >= end || hop >= end || hop.length == 0) {
        window.alert('ERROR! PLEASE TYPE VALID NUMBERS!')
    } else {
        for (beginning; beginning <= end; beginning += hop){
            number_cell.innerHTML += ` ${beginning} `
        }
    }
}