/*export*/ function needsLicense(kind) {
    return (kind === 'car' || kind === 'truck')
}
  
/*export*/ function chooseVehicle(option1, option2) {
    /*if (option1 > option2){
        return `${option2} is clearly the better choice.`
    } else
    return `${option1} is clearly the better choice.`
    */
   
    return option1 < option2 ? option1 + " is clearly the better choice." : option2 + " is clearly the better choice." // achei essa solução mais elegante

    // return {option1, option2}.sort()[0] + " is clearly the better choice."     // Essa solução não funcionou no VSCode
}

/*export*/ function calculateResellPrice(originalPrice, age) {
    if (age < 3){
        return originalPrice * 0.8
    } else if (age > 10){
        return originalPrice * 0.5
    } else
        return originalPrice * 0.7
}

console.log(needsLicense('truck'))
console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'))
console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'))
console.log(calculateResellPrice(1000, 1))
console.log(calculateResellPrice(1000, 5))
console.log(calculateResellPrice(1000, 15))
  