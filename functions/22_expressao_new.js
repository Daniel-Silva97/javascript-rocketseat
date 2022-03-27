/*
Expressão new
    * left-hand-side Expression
    * Criar um objeto
*/

//Exemplo

let name = new String('Daniel')
//Criando um novo objeto name do tipo String, onde vou conseguir ver a cadeia de caracteres do valor informado

let age = new Number(23)
//Criando um novo objeto do tipo Number

console.log(name, age)

//New vai fazer da variável um objeto usando as propriedades padrões do que já temos dentro do JS, como por exemplo o __proto__