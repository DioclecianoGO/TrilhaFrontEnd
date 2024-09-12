// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function ssmd(a, b) {
    return console.log(`
        Soma: ${a + b}
        Subtração: ${a - b}
        Multiplicação: ${a * b}
        Divisão: ${a / b}`)
}

ssmd(2, 2)