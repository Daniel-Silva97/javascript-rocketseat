/*
Cria um loop em cima de um objeto pegando as propiedades do objeto.
*/
//Criando o objeto
let person = {
    name: 'Daniel',
    age: 24,
    weight: 90.4
}

for(let property in person){ 
    //Repetição com variavel extraindo cada propiedade do objeto e imprimindo em tela
    console.log(property)
    console.log(person[property])
}