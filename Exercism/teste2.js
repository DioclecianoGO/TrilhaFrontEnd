function remainingOrders(timeLeft, orders){

    timeLeft = 5
    orders = ['Energizer', 'All or Nothing', 'Green Garden']
    console.log(orders)
    
    
    const wedgesHave = 0
    console.log(wedgesHave)
    
    const conjuntoString = orders
    console.log(conjuntoString)
    
    
    const conjuntoNumber = conjuntoString.map(returnTimeSubTimeRemaining)
    console.log(conjuntoNumber)
    
    
    
    function returnTimeSubTimeRemaining(value){
        console.log("função")
        switch(value){
            case "Pure Strawberry Joy":
                console.log("case1")
                return 0.5
            case "Energizer":
            case "Green Garden":
                console.log("case2")
                return 1.5
            case "Tropical Island":
                console.log("case3")
                return 3
            case "All or Nothing":
                console.log("case4")
                return 5
            default:
                console.log("case5")
                return 2.5       
        }
    }
    // return conjuntoNumber
    }
    
    /*
    while (limes > wedgesHave) {
        for(let i = 0; i < conjuntoNumber.length; i++) {
            if(limes > wedgesHave){
                wedgesHave += conjuntoNumber[i]
            } 
        }
    }
    return wedgesHave
    }
    */
    
    //console.log(conjuntoNumber)
    console.log(conjuntoString)
    