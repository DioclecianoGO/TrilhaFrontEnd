// 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.



// nessa solução eu não considerei que tem de ser a menor que 3 pontos a diferença entre a nota e o próximo multiplo de 5, dessa forma 52 mesmo não devendo, avaba sendo arredondado

function calculoDeNotas(nota) {
    let valor = 0
    let resultado = ""
    if(nota + 3 < 40){
        valor = nota
        resultado = " Reprovou"
    }else {
        for(let i = 0; i < nota;) {
            i += 5 
            if((nota + 3) >= i) {
            valor = i          
            } else {
                valor = nota
            }
        }
        resultado = " Aprovou"
    }
    return valor + resultado
}

console.log(calculoDeNotas(51))
console.log(calculoDeNotas(52))
console.log(calculoDeNotas(53))
console.log(calculoDeNotas(54))
console.log(calculoDeNotas(38))
console.log(calculoDeNotas(84))
console.log(calculoDeNotas(29))

// Nesse algoritmo, além de corrigir, consegui reduzir a expressão, usando função arrow e invocação imediata da função no operador ternario

const calculoDeNotas2 = (nota) => {
    return (nota + 3 < 40) ? {Nota: nota, Status: "Reprovado"} : (() => {if (nota % 5 < 3){return{Nota: nota, Status: "Aprovado"}}return {Nota: nota + (5 - (nota % 5)), Status: "Aprovado"}})()}




console.log(calculoDeNotas2(51))
console.log(calculoDeNotas2(52))
console.log(calculoDeNotas2(53))
console.log(calculoDeNotas2(54))
console.log(calculoDeNotas2(38))
console.log(calculoDeNotas2(84))
console.log(calculoDeNotas2(29))

resul = 51 % 5 
    console.log(resul)