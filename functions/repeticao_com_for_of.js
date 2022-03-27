// for ...of


let name = 'Daniel'
let names = ['João', 'Paulo', 'Pedro']

for (let char             of         name)
/*      ↓                  ↓ 
Criando variável      Pegando de     Variável

*/
{
    console.log(char)
}

/*
Na repetição acima, ele vai pegar e imprimir um caractere do que está atribuido na variável nome e imprimir na tela separado.

let char - é a variável que vamos usar para imprimir no console

of - Siginifica que ele vai pegar o caractere de algum lugar

name - variavel que vamos olhar para pegar os caracteres.
*/


//Usando em Objetos

for(let name of names){
    console.log(name)
}

/*
Mesma lógica do primeiro exemplo, porém a variável de controle name agora,pega uma posição do objeto e mostra em tela por vez.

*/

