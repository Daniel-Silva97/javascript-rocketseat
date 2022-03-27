// Switch

/*
switch(aqui vai uma expressão){
    case 'A':
            *código*
            break (Indica que este caso acabou)
    
    case 'B': .... Posso fazer quantos casos eu quiser
    
    default: Se não cumpriu nenhum dos casos anteriores para a condicional aqui.
}
*/

/*
let expression = 'c'

switch(expression){
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    default:
        console.log('default')
        break        
}
*/


//Exemplo de uma calculadora

function calculate(number1, operator, number2){
    let result

    switch (operator){
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('Não implementado')
            break
    }
    return result
}




console.log(calculate(10, '+' , 10))