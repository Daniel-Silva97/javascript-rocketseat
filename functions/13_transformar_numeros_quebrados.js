//Manipulando Strings e Números

//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let corrigirNumero = 345.33452345
console.log(corrigirNumero.toFixed(2))

/*
No console.log acima podemos ver que reduzi o número somente para duas casas decimais,usando a propriedade toFixed:
Dentro do parenteses ali no to toFixed informo quantos número ter após a virgula.
o toFixed retorna a solicitação em String



Mas podemos também mudar o ponto para virgula no mesmo console.log.

Por exemplo:
Por exemplo:
*/

console.log(corrigirNumero.toFixed(2).replace(".",","))

/*
Como visto acima podemos adicionar 2 ou mais propriedades ao conteúdo, basta separar por ".", inclui o replaced para substituir o ponto pro virgula.

*/