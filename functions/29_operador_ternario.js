// Operador condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes.

//Condição então Valor1, se não Valor2
//Condition ? Value1 : Value2

//Exemplos

//Café da manhã top
let pao = true
let queijo = true 

let niceBreakfast = pao && queijo ? 'Café Top' : 'Café Ruim'

/*
No Exemplo acima criei uma variável niceBreakfast, onde se tiver pao e queijo, o café será top, mas se não tiver um dos dois, o café será ruim.
 */


console.log(niceBreakfast) //pao e queijo = true, logo retornará no console.log como 'Café top'

queijo = false //alterei o valor da variavel
niceBreakfast = pao && queijo ? 'Café Top' : 'Café Ruim' //Refiz a operação

console.log(niceBreakfast) // pao = true e queijo = false, logo retornara no console como 'Café ruim'


/*
Funciona com os operadores lógico || (OR) e ! (NOT)  também, e a lógica irá se ajustar de acordo com o  operador utilizado
*/


//Maior de 18
let age = 16

let canDrive = age >= 18 ? 'Can Drive' : 'Cannot Drive'

console.log(canDrive)

age = 19
canDrive = age >= 18 ? 'Can Drive' : 'Cannot Drive'

console.log(canDrive)

/*
age >= 18   ?    'Can Drive'     :           'Cannot Drive'
    ↓       ↓        ↓           ↓                  ↓
Condição  então   Recebe1       Senão           Recebe2
*/