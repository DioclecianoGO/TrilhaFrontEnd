// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).

var registro = "10 20 20 8 25 3 0 30 1"

function recordes(nota) {
    let notas = nota.match(/\d+/g)
    let notanum = notas ? notas.map(Number) : []
    let melhor = 0
    let recorde = 0
    let piorPlacar = 0
    let piorJogo = 0
    let retorno = []
    for(let i = 1; i < notanum.length; i++) {
        if (notanum[i] > melhor) {
            melhor = notanum[i]
            recorde += 1
        }
        if (notanum[i] <= piorPlacar){
            piorPlacar = notanum[i]
            piorJogo = i + 1 
        }
    }
    retorno.push(recorde)
    retorno.push(piorJogo)
   

    return retorno
}

console.log(recordes(registro))