/* ### Sistema de gastos familiares


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo 
*/

let balance = { //Objeto com arrays de receitas e despesas criadoscom alguns valores fictícios
    incomes:[10,19,15.50,1600,253.50, 4500],
    expenses:[500, 389.80,55,44.90, 35]
}
//Função que passar por cada array calculando o total de receitas e despesas
function sum(array){
    let total = 0;
    for( let value of array){
        total += value
    }


    return total

}

//Função que vai calcular o saldo e retornar se estamos com saldo positivo e negativo
function calculateBalance(){
    const calculateIncomes = sum(balance.incomes) // Criando váriavel que chama a função de soma para armazenar o total de receitas
    const calculateExpenses = sum(balance.expenses) // Criando váriavel que chama a função de soma para armazenar o total de despesas

    const total = calculateIncomes - calculateExpenses //Efetuando o calculo de receitas - despesas
    const itsOk = total >= 0 //Variavel para checar se o saldo está positivo

    let balanceText = 'negativo' //Padrão negativo, será alterado para positivo de acordo com a condicional abaixo

    if(itsOk){ //Se saldo for  >= 0 então altera a variável para positivo
        balanceText = 'positivo'
    }

    console.log(`Seu saldo é ${balanceText}, total de: ${total.toFixed(2)}`) //Retornando o resultado das funções
}

calculateBalance() //Chamei a função