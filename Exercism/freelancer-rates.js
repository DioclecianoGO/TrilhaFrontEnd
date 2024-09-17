/* export */ function dayRate(ratePerHour) {
    return ratePerHour * 8
  }

console.log(dayRate(89))


/* export */ function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / dayRate(ratePerHour))
}

console.log(daysInBudget(20000, 89))


/* export */ function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const daysBillable = 22
    const dayCostVar = dayRate(ratePerHour)
    let dayCostWithDescont = dayCostVar - (dayCostVar * discount)
    let monthBillable = Math.floor(numDays / daysBillable)
    let monthCostWithDescont = dayCostWithDescont * daysBillable
    let remaninderDays = numDays % daysBillable 
    
    return Math.ceil((monthBillable * monthCostWithDescont) + (remaninderDays * dayCostVar))
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42))
