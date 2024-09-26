/*export*/ function timeToMixJuice(name) {
    switch(name){
        case "Pure Strawberry Joy":
            return 0.5
        case "Energizer":
        case "Green Garden":
            return 1.5
            
        case "Tropical Island":
            return 3
            
        case "All or Nothing":
            return 5
            
        default:
            return 2.5
            
    }
  }

// console.log(timeToMixJuice('Tropical Island'))
// console.log(timeToMixJuice('Berries & Lime'))


/*export*/ function limesToCut(wedgesNeeded, limes){

if (limes.length === 0) {
    return 0;
}

let wedgesHave = 0
let numberCuts = 0

const conjuntoString = limes
const conjuntoNumber = conjuntoString.map(transformStringToNumber)

function transformStringToNumber(value){
    switch(value){
        case "small":
            return 6
        case "medium":
            return 8
        case "large":
            return 10
    }
}
let i = 0
while (wedgesNeeded > wedgesHave && i < conjuntoNumber.length) {
    wedgesHave += conjuntoNumber[i]
    numberCuts++
    i++
}

return numberCuts
}


console.log(limesToCut(80, ['small', 'large', 'large', 'medium', 'small', 'large', 'large']))
//console.log(limesToCut(4, ['medium', 'small']))
//console.log(limesToCut(10, []))




/*export*/ function remainingOrders(timeLeft, orders){

    let timeControl = timeLeft
    const conjuntoString = orders
    let conjuntoSobra = conjuntoString
    const conjuntoNumber = conjuntoString.map(transformStringToNumber)

    function transformStringToNumber(value){
        switch(value){
            case "Pure Strawberry Joy":
                return 0.5
            case "Energizer":
            case "Green Garden":
                return 1.5
            case "Tropical Island":
                return 3
            case "All or Nothing":
                return 5
            default:
                return 2.5       
        }
    }
    let i = 0
    while (timeControl > 0 && i < conjuntoNumber.length) {
      timeControl = timeControl - conjuntoNumber[i]
      conjuntoSobra.shift()
      i++
    }
    return conjuntoSobra
}

// console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']))