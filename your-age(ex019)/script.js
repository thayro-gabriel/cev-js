function verify() {
    var date = new Date()
    var current_year = date.getFullYear()
    var birth_year = window.document.querySelector('input#birth_year')
    var age_text = window.document.getElementById('age')
    var image = window.document.getElementsByTagName('img')[0]
    if (birth_year.value.length != 4 || birth_year.value > current_year) {
        window.alert('Please, type a valid birth year...')
    } else if (birth_year.value <= 1904) {
        window.alert("C'mon... Are you really this old?")
    } else {
        var your_age = current_year - Number(birth_year.value)
        var radsex = document.getElementsByName('radsex')
        if (radsex[0].checked) {
            var gender = 'man'
        } else if (radsex[1].checked) {
            var gender = 'woman'
        }
        age_text.innerHTML = `A ${your_age}-years-old ${gender}`
        if (gender == 'man') {
            if (your_age <= 5) {
                image.src = './img/man-baby.jpg'
            } else if (your_age <= 12) {
                image.src = './img/man-child.jpg'
            } else if (your_age <= 18) {
                image.src = './img/man-teenager.jpg'
            } else if (your_age <= 39) {
                image.src = './img/man-adult.jpg'
            } else if (your_age <= 59) {
                image.src = './img/man-baby.jpg'
            } else if (your_age >= 60) {
                image.src = './img/man-old.jpg'
            }
        } else if (gender == 'woman') {
            if (your_age <= 5) {
                image.src = './img/woman-baby.jpg'
            } else if (your_age <= 12) {
                image.src = './img/woman-child.png'
            } else if (your_age <= 18) {
                image.src = './img/woman-teenager.jpg'
            } else if (your_age <= 39) {
                image.src = './img/woman-adult.jpg'
            } else if (your_age <= 59) {
                image.src = './img/woman-middle-aged.jpg'
            } else if (your_age >= 60) {
                image.src = './img/woman-old.jpeg'
            }
        }
    }
}
