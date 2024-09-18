/*export*/ function totalBirdCount(birdsPerDay) {
    /*
    let totalBirds = 0
    for (let i = 0; i < birdsPerDay.length; i++){
        totalBirds += birdsPerDay[i]  
    }
    return totalBirds
    */
    return birdsPerDay.reduce((result, dayCount) => result + dayCount, 0);
}

/*export*/ function birdsInWeek(birdsPerDay, week) {
    /*
    let weekCount = 0
    let birdsCount = 0

    for(let i = 0; i < week; i++){
        weekCount += 7
    }
    birdsCount = totalBirdCount(birdsPerDay.slice(weekCount - 7, weekCount))
    return birdsCount
    */ 
   return birdsCount = totalBirdCount(birdsPerDay.slice((week - 1) * 7, week * 7)) // Isso é muita sacanagem =D
}

/*export*/ function fixBirdCountLog(birdsPerDay) {
    /*
    let birdsPerDayFixed = birdsPerDay
    for(let i = 0; i < birdsPerDay.length; i++){
        if(i % 2 == 0)
            birdsPerDayFixed[i]++
    }
    return birdsPerDayFixed
    */
   birdsPerDay.map((day, index) => index % 2 === 0 ? day : day++)
   return birdsPerDay // Ta na hora de começar a pensar em refatorar as expressões e consultar mais a documentação. Embora o desafio era usar o laço "for"
}

console.log(totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]))
console.log(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1, 5, 3, 3, 8, 4, 5, 9, 2, 5, 7, 8], 3))
console.log(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 2))
console.log(fixBirdCountLog([2, 5, 0, 7, 4, 1]))