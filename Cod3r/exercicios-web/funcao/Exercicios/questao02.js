// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

function classificandoTriangulos(a, b, c) {
    if (a == b && b == c){
        return console.log("Esse é um triângulo equilátero, pois todos os lados possuem a mesma medida.")
    } else if (a == b || b == c || c == a) {
        return console.log("Esse é um triângulo isósceles, pois dois dos lados possuem a mesma medida.")
    } else if (a !== b && b !== c) {
        return console.log("Esse é um triângulo escaleno, pois dois dos lados possuem a mesma medida.")
    } else {
        return console.log("Isso não é um triângulo!")
    }
}

console.log("Equiláteros:")
classificandoTriangulos(2,2,2)
classificandoTriangulos(3,3,3)
classificandoTriangulos(4,4,4)

console.log("Isósceles:")
classificandoTriangulos(3,2,2)
classificandoTriangulos(2,3,2)
classificandoTriangulos(2,2,3)

console.log("Escaleno:")
classificandoTriangulos(2,3,4)
classificandoTriangulos(3,2,4)
classificandoTriangulos(4,3,2)
classificandoTriangulos(3,4,2)
classificandoTriangulos(4,2,3)
classificandoTriangulos(2,4,3)
