//Manipulando Strings e Números

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

//Contando letras
let word = "Daniel"
console.log(word.length)

//contando números
let numbers = 1234
console.log(numbers.lenght)
//Como o Number não recebe a propriedade lenght, precisamos fazer uma conversão pra string para conseguimos ter o resultado esperado

console.log(String(numbers).length)