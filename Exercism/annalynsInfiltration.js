/*export*/ function canExecuteFastAttack(knightIsAwake) {
    if (knightIsAwake == true) {
      return false
    } else{
      return true
    }
  }
console.log(canExecuteFastAttack(true))
  
  
/*export*/ function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if (knightIsAwake == true || archerIsAwake == true || prisonerIsAwake == true) {
      return true
    } else {
      return false
    }
  }
  console.log(canSpy(false, true, false))
  
  
/*export*/ function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    if (archerIsAwake !== true && prisonerIsAwake == true) {
      return true
    } else {
      return false
    }
  }
  console.log(canSignalPrisoner(false, true))
  
  
/*export*/ function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
    if (petDogIsPresent == true && archerIsAwake !== true || petDogIsPresent !== true && prisonerIsAwake == true && knightIsAwake !== true && archerIsAwake !== true) {
      return true
    } else {
      return false
    }
  }
  console.log(canFreePrisoner(false, true, false, false))
