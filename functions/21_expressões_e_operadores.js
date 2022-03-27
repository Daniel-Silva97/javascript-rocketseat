//Expressões e Operadores

/*

Expressions
Operators
    Binary
    Unary
    Ternary

*/


//Expresões são tudo que resolve coisas dentro do JS, por exemplo abaixo defini a váriável number que estará como undefined no retorno, isso é uma expressão. toda expressão pode ou não terminar com ';'

let number

//Exemplo que que ; é obrigatório


//Criei a variável e atribui um valor pra ela 
let numbers = 5

//Função auto-executável que mostrará no console a palavra alô
(function() {
    console.log('Alô')
})()

/*
Se mantermos no formato acima, o JavaScript terá uma problema ao executar pois ele entenderá que a função faz parte da declaração da variável numbers, desta forma

let numbers = 5 ()()

Fazendo com que gere o erro, para corrigir informar ; após a criação da variável.


let numbers = 5;

(function() {
    console.log('Alô')
})()

Corrigido!!

*/


//Operadores

//Binary

/*
Operador Binario é quando tenho dois valores entre o operador para um calculo.

Por exemplo:
*/


//Primeiro valor
let number1 = 1

console.log(number + 1)
//Operação com valor 1 (number1) e valor 2 (1) mais o operador binário (+) que estava entre os dois valores.

//Unary

/*
Operador Unário é quando temos um valor para realizar a operação/calculo.

Por exemplo, temos duas possibilidades:
*/

//Incremento, quando adicionamos +1 para o valor
console.log(++number1)


//Decremento, quando tiramos 1 do valor
console.log(--number1)


//Ternary
/*
Para operador Ternário ele vai receber uma expressão, que terá 3 valores para obter um resultado.

Por exemplo:
 */

console.log(true ? 'Alô' : 'Nada')
//            1       2       3    valores da expressão, tornado-a um operador ternário.