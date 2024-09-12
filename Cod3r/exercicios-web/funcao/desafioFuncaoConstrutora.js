function Pessoa(nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1.nome)

/*
function Pissoa(name) {
    this.name = name
    console.log(`Meu nome é ${this.name}`)
}

// p2 = new Pissoa("Dio")


console.log(Pissoa("Dio"))
*/