/*
Scope let e const

Const e Let são locais e só funcionam no escopo onde foi criada

 */


// Exemplo base para explicação

console.log('> Existe y?', y) // Aqui não funcionará pelo fato do console estar antes do bloco e a variável ser let, que não é GLOBAL e sim LOCAL

{ // Inicio do bloco
    console.log('> Agora existe y?', y) // Aqui ele identificará que existe a variável, mas como o console está vindo antes da declaração, apresentará erro, pois o JS ainda não consegue acessar a variável neste momento
    let y = 0 // Declaração da Variável
    console.log('> Agora tem que ter o y, né?', y) // Este é o uso correto no caso de variáveis locais, após ter declarado a variável e dentro do mesmo bloco, ela será entendida e interpretada corretamente no código
} // Fim do bloco

console.log('> Aqui ele ainda funciona?', y) // Aqui apresentará erro, pelo fato deste console não estar no mesmo bloco em que a variável foi declarada



//Navegando entre escopos com essas variáveis

let y = 1 //Declaração da variável

{ //Inicio do bloco
    y=0 //Atribui um valor a y sem declarar
    console.log('Valor de y: ', y) // Mostrando valor de y
} //Fim do bloco

console.log('Valor de y: ', y) //Mostrando o valor de y

/*
No caso acima os dois console.log irão retornar 0 e não 1.

Isso porque quando abri um bloco e atribui o valor a y, o JS subiu o escopo e identificou que eu tinha criado uma 
variável y com valor 1, então ele atribuiu 0 a ela, agregando os dois escopos (dentro e fora do bloco).

Por isso os dois consoles sairam zerados.

*/