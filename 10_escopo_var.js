/*
Scope

- Escopo determina a visibilidade de alguma variável no JS

Block statement - Declaração de um bloco

O bloco também criará um novo escopo. Chamamos de 'block-scoped'

*/

//Iniciando um bloco
{
    //Aqui dentro é um bloco e posso colocar qualquer código
    // let x = 0
    // console.log(x)
} // Aqui fechamos o bloco



// VAR

//VAR é global e poderá funcionar fora de um escopo de bloco

console.log('> existe x antes do bloco?', x)

{
    var x = 0
}

console.log('> existe x depois do bloco?', x) 

/*
No Exemplo acima ocorreu o seguinte retorno no console:

> existe x antes do bloco? undefined
> existe x depois do bloco? 0

O JS funciona na lógica de cima para baixo, então não deveria 
apresentar 'undefined' na primeira mensagem, porque criei a variável depois.

Mas por se tratar de VAR e ela ser uma variavel global, o JAVASCRIPT atua da seguinte forma:

var x //O JS cria a variável aqui, mas não atribui valor pra ela, deixando-a como undefined.

console.log('> existe x antes do bloco?', x)  //Aqui portanto a verá como undefined e retornará na tela

{
   x  = 0 //Aqui ele atribui o valor zero para variável
}

console.log('> existe x depois do bloco?', x) //Aqui ele mostrará a variável como 0



Então é por isso que mesmo nós criando a variável após o primeiro console.log ele consegue enxerga-la mas como undefined


O termo para isso é Hoisting.
*/