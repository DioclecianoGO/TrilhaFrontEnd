Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)


/* Ideia que me surgiu de como construir uma classe e objeto com construtor

class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.Nome = nome
        this.Sobrenome = sobrenome
        this.Idade = idade
    }
}

cadastro1 = new Pessoa()

cadastro1.nome = "Diocleciano"
cadastro1.sobrenome = "Gonçalves de Oliveira"
cadastro1.idade = 41


console.log("Seja bem vindo(a),")
console.log(cadastro1.nome + " " + cadastro1.sobrenome)
console.log("Você tem " + cadastro1.idade + " anos.")

console.log("---------------------------------------------")

cadastro2 = new Pessoa()

cadastro2.nome = "Biana"
cadastro2.sobrenome = "Gonçalves Domiciana Matucheski"
cadastro2.idade = 36


console.log("Seja bem vindo(a),")
console.log(cadastro2.nome + " " + cadastro2.sobrenome)
console.log("Você tem " + cadastro2.idade + " anos.")

*/