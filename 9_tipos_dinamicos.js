/*
O JavaScript é uma linguagem fracamente tipada e dinâmica, ou seja:

- Variáveis não precisam ter um tipo previamente definido
- Podemos mudar o conteúdo da variável


Uma linguagem fortemente tipada e estática significa que você DEVE informar o tipo da variável e este tipo não será dinamico, ou seja, não alterará enquanto evoluimos com o código
 
Exemplo:

*/

// Criando uma variável fortemente tipada e estática (Não funcional em JS)

// let clima:String = "Chuvoso"

// Variável fracamente tipada e dinamica

let clima = "Chuvoso"

// Mostrando o tipo da variável

console.log(typeof clima)

// No Exemplo abaixo, o tipo da variável irá mudar apenas setando um novo valor

clima = 2

// Mostrando o tipo novamente

console.log(typeof clima)

// Alterando novamente

clima = true

// Mostrando em log

console.log(typeof clima)

/*
Então como mostrado acima, em JavaScript a variável se adapta conforme 
o valor que atribuímos a ela.
Sendo dinâmica de acordo com as modificações de valores da variável durante a execução do programa.
*/

