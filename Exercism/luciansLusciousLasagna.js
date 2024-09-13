/* export*/ const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2;

/* export function remainingMinutesInOven(actualMinutesInOven) {
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven 
    } */

/* export*/ remainingMinutesInOven = (actualMinutesInOven) => EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
console.log(remainingMinutesInOven(30))

/* export function preparationTimeInMinutes(numberOfLayers) {
  return PREPARATION_MINUTES_PER_LAYER * numberOfLayers
} */

/* export*/ preparationTimeInMinutes = (numberOfLayers) => PREPARATION_MINUTES_PER_LAYER * numberOfLayers
console.log(preparationTimeInMinutes(2))

/* export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven
} */

/* export*/ totalTimeInMinutes = (numberOfLayers, actualMinutesInOven) => preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven
console.log(totalTimeInMinutes(3, 20))

// a execução no visual code studio não necessita exportar o arquivo, uma vez que estou executando ele no console. Diferentemente do teste feito no editor da plataforma do Exercism, onde o "arquivo" .js da lasagna é um e o arquivo que realiza o teste é outro, necessitando exportar/importar as funções e os parametros.

// aqui no editor, a função arrow funcionou, mas na plataforma Exercism não funcionou, acredito que na hora de invocar como função no teste, não foi possivel chamar, uma vez que com função arrow é necessario atribuir a uma variavel por ser anonima.