function multiply() {
    var numba = Number(window.document.getElementById('numba').value)
    if (numba == 0 || numba.length == 0) {
        window.alert('please, type a valid number!!!')
    } else {
        var table = window.document.getElementById('tab')
        for (c=1;c<=10;c+=1) {
            let tabl = window.document.createElement('option')
            var res = numba * c
            tabl.text += `${numba} * ${c} = ${res}`
            table.appendChild(tabl)
        }
    }
}

