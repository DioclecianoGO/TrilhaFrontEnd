function remainingOrders(timeLeft, orders){

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

    while (timeControl > 0) {
        for(let i = 0; i < conjuntoNumber.length; i++) {
            if(timeControl > 0){
                timeControl = timeControl - conjuntoNumber[i]
                conjuntoSobra.shift()
            } 
        }
    }
    return conjuntoSobra
}

console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']))
