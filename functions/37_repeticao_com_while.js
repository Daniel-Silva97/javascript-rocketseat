//Estrutura de repetição
//While

let i = 0 //Criando o inicializador (Variável de controle)

while(i < 10){
    console.log(i)
    i++
}

/*
Quando usar While ou for?

Usamos while geralmente quando não sabemos quando a condição irá terminar, então ele ficará fazendo a repetição até que a condição se concretize

Já o for utilizamos sempre que sabemos quando a repetição termina.

*/

//Exemplo de uma repetição que não sabemos quando acaba

let inicializador = 328468923462389

while (inicializador > 10){
    console.log(inicializador)
    i /= 10000
}