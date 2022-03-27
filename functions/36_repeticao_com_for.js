// Estrutura de repetição
// for


for(let i = 0;              i < 10;                i++){
/*       ↓                    ↓                     ↓
      Criando             Condição            Incrementando +1
Variável de controle    para repetição       na variável de controle
                       Continuar rodando 
*/
    console.log(i) //Retorna i enqunato a condição acima for verdadeira

}


for(let i = 0;              i < 10;                i++){
    if(i === 5){ //Criando uma condicional que informa, se o resultado for igual a 5, a repetição termina.
        break //quebrou a repetição aqui
    }
    console.log(i)
}


for(let i = 0;              i < 10;                i++){
    if(i == 5){ //Criando uma condição que quando i for igual a 5, ele pula essa repetição e segue para próximo ciclo
        continue //pulou aqui
    }
    console.log(i)
}