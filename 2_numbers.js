// Number

/*

Números

33 // inteiros
12.5 // Reais - FLOAT
NoN // Not a Number
Infinity // Infinito

 */


console.log(33)
// Neste exemplo ele exibirá o número inteiro sem problemas, pode ser positivo ou negativo, o sistema entenderá


console.log(12.5)
//Números reais igual o caso acima também funcionam normalmente usando o ponto como separador das casas decimais

/*
Podemos usar expressões também com os números, por exemplo
*/

console.log(12.5 + 12.5)

/*
Quando usamos expressões incorretamente, onde o resultado não é um número ou não existe, o JavaScript retorna NoN - Not a Number, por exemplo:
*/

console.log(12.5 / 'abc')

/*
Para validar se o número é infinito ou não, temos a expressão inifinity que quando tentamos igualar um valor a essa expressão, retornará true ou false para infinito ou não, por exemplo
*/

console.log(12 == Infinity)