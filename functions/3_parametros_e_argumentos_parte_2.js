//Parametros e Argumentos parte 2

const sum = function(number1, number2)
{
    let total = number1 + number2
    return total // Ao finalizar a função, ao invés de retornar toda a função ou console.log por exemplo, ele irá retonar somente o valor resultante da soma e atribuido a variavel total dentro da função

}

//Passando argumentos com variáveis fora do escopo da função
let number1 = 50
let number2 = 25

//Mostrando no console
console.log(`O primeiro número é ${number1}`)
console.log(`O segundo número é ${number2}`)
console.log(`A soma dos valores é ${sum(number1,number2)}`)
//No exemplo acima se tivessemos usado a função no formato anterior, com console.log e não return teríamos problema no código acima, pois o console.log da soma retornaria undefined e não o calculo da soma.