// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(C,i,t){
    return console.log("R$ " + (C + (C * i * t)).toPrecision(6).toString().replace(",", "."))
}



function jurosCompostos(C,i,t){
    return console.log("R$ " + (C * (1 + i) ** t).toPrecision(6).toString().replace(".", ","))
}

jurosSimples(1000, 0.02, 6)
jurosCompostos(1000,0.05,6)