//Manipulando Arrays

let techs = ['html' , 'css' , 'js']

//Adicionar um item no fim
techs.push('nodeJs')
/*
push é o método que sabe qual o último elemento do array e inclui o que você passar sempre na última posição
*/

//Adicionar no começo
techs.unshift('sql')

//Remover do fim
//techs.pop()

//Remover do começo
//techs.shift()

//pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
/*
no slice informamos a posição inicial e final que queremos visualizar do array ficando assim:

console.log(techs.slice(posicaoinicial , posicaofinal))

*/

//Remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 1)

/*
o splice funciona com dois parametros (index, quantos elementos após ele remover)

exemplo:

splice(1,1)

['html' , 'css' , 'js']
Neste array removeria somente css

splice(1,2)
['html' , 'css' , 'js']
Neste caso, removeria css e js.
*/


//Encontrar uma posição de um elemento no Array

//Criando variavel para armazenar o valor do index do elemento css
let index = techs.indexOf('css')
//exemplo de splice usando variável
techs.splice(index,1)









console.log(techs)