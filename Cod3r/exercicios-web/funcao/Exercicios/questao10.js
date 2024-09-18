// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.

// primeiro criei o algoritmo para ver a logica e se funciona
function divisivel(inteiro) {
    return inteiro % 3 === 0
}
// depois aprimorei com uma função arrow. Acho que to pegando o esquema
const divisivel2 = (inteiro) => inteiro % 3 === 0

console.log(divisivel(2))
console.log(divisivel2(9))