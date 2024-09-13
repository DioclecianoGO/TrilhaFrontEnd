// 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

function transformaReal1(a){
    return console.log("R$ " + (a.toPrecision(2)))
}

transformaReal1(0.30000000000000004)


function transformaReal2(b,c){
    d = b + c
    console.log("R$ " + (d.toPrecision(2).toString().replace(".", ",")))
}

transformaReal2(0.1, 0.2)

console.log(0.523664.toPrecision(3))

// .toPrecision() é um metodo de números, tem de ser adicionado antes do numero ou da variavel que esta definida como um numero.

// .toString() é um metodo de números, ele retorna um número em uma string, podendo passar um parametro de substituição, como por exemplo o "." para uma ",". Usa se a virgula para separar os parametros.