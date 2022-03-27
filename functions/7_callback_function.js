//Callback function

function sayMyName(name) 
{
    console.log('Antes de executar o callback')

    name()

    console.log('Após executar o callback')
}


sayMyName(() => {
    console.log('Aqui estou em callback')
})

/*
    O conceito de callback nos permite chamar uma função dentro de outra função, funciona assim:

    Criamos a função sayMyName e informamos o parâmetro name para ele.

    Apenas para visualização criei console.log que mostram o momento em que o callback é realizado.

    chamei a função que espero receber por meio do parâmetro name com name().

    Após terminar, chamei a função informando com dado uma arrow function como visto no código acima.

    O resultado no console deve ser assim:

    1 - Antes de executar o callback
    2 - Aqui estou em callback
    3 - Após executar o callback


    O JS ao invés de retornar a função na tela, a executa e apresenta o console.log dela como esperado.

*/