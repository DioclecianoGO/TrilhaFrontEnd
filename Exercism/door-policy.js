/*export*/ function frontDoorResponse(line) {
    return line.at()
  }

/*export*/ function frontDoorPassword(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  }
  

/*export*/ function backDoorResponse(line) {
    // let espace = line.trim()
    // return espace.charAt(espace.length -1)
    return line.trim().slice(-1) // ao invés de usar charAt ou localizar a posição no [], slice extrai a parte -1(final) da string.
  }
  

/*export*/ function backDoorPassword(word) {
    return frontDoorPassword(word).concat(", please")
    // return frontDoorPassword(word) + ", please" 
    // concatenação com o sinal de adição tmb funciona!!!
  }


console.log(frontDoorResponse('Stands so high'))
console.log(frontDoorPassword('SHIRE'))
console.log(frontDoorPassword('shire'))
console.log(backDoorResponse('Stands so high'))
console.log(backDoorResponse('Stands so high     '))
console.log(backDoorPassword('horse'))