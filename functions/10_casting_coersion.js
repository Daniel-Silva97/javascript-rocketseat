/*
Os dois termos abaixo estão relacionados a conversão de um tipo de dado dentro do JS.

Type Conversion ou Type Casting - é a conversão explicita feito dentro do código.
Type Coersion - é a conversão que o próprio JS faz as vezes até mesmo usando do Type casting para isso.

*/

//Exemplo de Coersion no JS

console.log('9' + 5)

/* 
No caso acima, o resultado no console será 95, isso porque o + no JS serve tanto para calculos de adição como para concatenação de valores, o que o JS fez foi o seguinte:

console.log('9' + '5')

Ele converteu forçadamente o 5 a uma String, gerando a concatenação do resultado conforme falado.
*/

//Exemplo de Casting

console.log(Number('9' + 5))

/*
No caso do Casting, a conversão pode ser forçada pelo programador como o exemplo acima, ai o resultado mostrado será 14 pois forçei a conversão da String '9' para número, fazendo assim com que o programa some os valores e não concatene.

*/