/* 
Exercícios

1 - Crie um algoritmo que transforme notas do sistema numérico para o sistema de caracteres tipo A B C

    * de 90 para cima -> A
    * Entre 80 - 89 -->  B
    * Entre 70 - 79 -->  C
    * Entre 60 - 69 -->  D
    * Menor que 60 --->  F
*/


function getScore(myScore){
    
let scoreA = myScore  >= 90 && myScore  <= 100
let scoreB = myScore  >= 80 && myScore  < 90
let scoreC = myScore  >= 70 && myScore  < 80
let scoreD = myScore  >= 60 && myScore  < 70
let scoreF = myScore  < 60 && myScore  >= 0
let scoreFinal


if (score = scoreA){
    scoreFinal = 'A'    
}
else if (score = scoreB){
    scoreFinal = 'B'
}
else if (score = scoreC){
    scoreFinal = 'C'
}
else if (score = scoreD){
    scoreFinal = 'D'
}
else if (score = scoreF){
    scoreFinal = 'F'
}
else{
    scoreFinal = 'Nota inválida'
}

return scoreFinal
}


console.log(getScore(100))
console.log(getScore(91))
console.log(getScore(89))
console.log(getScore(74))
console.log(getScore(65))
console.log(getScore(5))
console.log(getScore(-1))
console.log(getScore(101))
console.log(getScore(80))
console.log(getScore(70))
console.log(getScore(60))












