//Operadores de comparação
//Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

// ==   Igual
console.log(one == two)
console.log(one == '1') //Neste caso quando usamos os comparadores o js tentará converter para formato do valor a ser comparado, comoa variável one é um Number, o comparador converte o tipo de dado do '1' (String) para Number antes de comparar

// !=   Diferente
console.log(one != two)

// ===  Estritamente igual
console.log(one === '1') //Valida também o tipo de dado, logo retornara´false

// !==  Estritamente diferente
console.log(one !== two)

// >    Maior
console.log(one > two)

// >=   Maior igual
console.log(one >= two)

// <    Menor
console.log(one < two)

// <=   Menor igual
console.log(one <= two)