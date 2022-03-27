//Function Hoisting

sayMyName()

function sayMyName() 
{
    console.log('Heisenberg')    
}

/*
No caso acima, haverá o hoisting porque a função neste formato não está ligada a nenhuma variável no código, então o sistema retornará Heisenberg sem problemas.

Abaixo um exemplo em que o Hoisting não acontecerá.
*/

sayMyName2()

const sayMyName2 = function()
{
 console.log('Heisenberg')   
}

/*
No caso acima teremos um erro informando que não é possível chamar uma função antes de ela ser iniciada, isso ocorre porque criamos a função dentro de uma variável const, então o hoisting da função deixará de existir, isso vale também para outros tipos de variáveis como var, let, etc.
*/
