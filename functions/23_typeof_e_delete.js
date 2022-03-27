//TypeOf  e Delete

/*
Operadores Unários

typeof
    Me mostra qual é o tipo de dado que estamos utilizando
delete
    Deleta uma propriedade dentro de um objeto desde que a propriedade exista.
*/

//Criando um objeto

const person = {
    name: 'Daniel',
    age: 24,
    weight: 90
}

//Exemplo typeof
console.log(typeof person.name)

//Exemplo delete
delete person.weight
console.log(person)



