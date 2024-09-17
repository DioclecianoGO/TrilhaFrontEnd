// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.

function desafioSete(a,b,c) {
    let resultados = []
    let discriminante = (b ** 2) - (4 * a * c)
    if(discriminante < 0){
        return "Delta é negativo"
    }
    let x1 = (-b + Math.sqrt(discriminante))/(2 * a)
    let x2 = (-b - Math.sqrt(discriminante))/(2 * a)
    resultados.push(x1)
    resultados.push(x2)
    return resultados
}

console.log(desafioSete(3,-5,12))
console.log(desafioSete(1,3,2))
console.log(desafioSete(3, 1, 2))