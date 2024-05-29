let amigo = {nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }
}
console.log(`${amigo.nome} pesa ${amigo.peso}`)
amigo.engordar(3.55)
console.log(`mas ${amigo.nome} comeu muito, e agora ele tá ${amigo.peso}`)