// Operadores lógicos ( logical operators )

// 2 Valores booleanos, quando verificados
// Resultará em verdadeiro ou falso

let pao = true
let queijo = true

// AND &&
console.log( pao && queijo )

/*
Para este operador, retornará os seguintes valores:

true + true = true
true + false = false
false + true = false
false + false = false

Necessários que todos sejam true para retornar true como resposta
*/

// OR ||
console.log( pao || queijo)
/*
Para este operador, os retornos serão:

true + true = true
true + false = true
false + true = true
false + false = false


Para ele, há a necessidade somente de 1 dos valores como true para retornar verdadeiro na operação
*/


// NOT !
console.log( !pao )


/*
Serve para negar alguma coisa.

Por exemplo se pao é verdadeiro, nega-lo e apresentar false, basta usar o exemplo acima.

Então:

Se pao = true, logo !pao = false
Se pao = false, logo !pao = true
*/

