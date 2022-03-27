//Manipulando Strings e Números

// Verificar se o texto contém a palavra Amor

let phrase = "Eu quero viver!"

//Verificar se tem Amor na frase
console.log(phrase.includes("Amor"))
/*
No console acima irá retornar false pois "Amor" que passei na propriedade includes não tem na variável phrase
*/

let phrase2 = "Eu quero viver o amor!"
//Verificar se tem Amor na frase
console.log(phrase2.includes("Amor"))

/*
No caso acima, também retornará FALSE, isso devido ao case sensitive, onde na propriedade includes passamos Amor e na variável está como amor.
 */

let phrase3 = "Eu quero viver o Amor!"
//Verificar se tem Amor na frase
console.log(phrase3.includes("Amor"))

//Retorno TRUE