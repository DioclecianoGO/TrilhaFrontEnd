const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))


// Desafio 1: Todos os alunos são bolsistas?

/*

const bolsitas = aluno => aluno.bolsista
console.log((alunos.filter(bolsitas) == alunos.length) ? "Todos os alunos são bolsistas" : "Nem todos os alunos são bolsistas")

*/

/*

const bolsistas = alunos.map(a => a.bolsista)
const verdadeOuFalso = bolsistas => bolsistas.bolsista === false

*/

/*

const todosBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) { 
    if (atual === false) {
        acumulador++
    }
    return acumulador // USAR UM .filter PARA RETORNAR FALSO OU VERDADEIRO
}, 0)

console.log(todosBolsista)

*/

// Desafio 2: Algum aluno e bolsista?

/*

const numBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) { 
    if (atual === true) {
        acumulador++
    }
    return acumulador
}, 0)

console.log(`Ao todo, são ${numBolsista} alunos bolsistas`)

/*

/*

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  console.log(`Esse é o total${total}`)
  console.log(`Esse é o valor${value}`)
  console.log(`Esse é o indice${index}`)
  console.log(`Esse é o conjunto${array}`)
}
console.log(numbers)

*/

