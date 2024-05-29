let num = [5,8,4]
num[3] = 6
num.push(9)
console.log(`o vetor tem ${num.length} posições!!!`)
console.log(`${num[0]} é o primeior valor!!!`)
console.log(`os elementos organizados em ordem ${num.sort()}`)

for (let pos in num) {
    console.log(num[pos])
}
console.log(num.indexOf(9))