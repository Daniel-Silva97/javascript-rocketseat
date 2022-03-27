/*
Celsius to Fahrenheit

Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para a outra

C = (F - 32) * 5/9

F = C * 9/5 + 32

*/

 
function transformDegree(degree){ //Função para conversão
    const celsiusExists = degree.toUpperCase().includes('C') 
    /*
    Variável que vai identificar temperatura quando for celsius, usado toUpperCase para transformar c em C caso recebermos minusculo e sistema identificar mesmo assim que se trata de celsius.
    */
    const fahrenheitExists = degree.toUpperCase().includes('F')
    
//Condicional que valida se não foi digitado uma temperatura inválida, válido somente (F, f, C, c)
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }


    //Formula ideal de conversão de fahrenheit para Celsius

    //Criando variável para quando extrair o número da entrada recebida
    let updatedDegree = Number(degree.toUpperCase().replace( "F" , ""));


    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    //Criando variavel que vai armazenar 'C' para usarmos após a conversão
    let degreeSign = 'C'
    
    //Retornando o valor do calculo já convertido em Celsius concatenado com 'C'
    //return formula(updatedDegree) + degreeSign

    //Agora convertendo de Celsius para fahrenheit
    if(celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace( "C" , ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }


    return formula(updatedDegree) + degreeSign

}



try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
    transformDegree('50Z')
    }
catch(error){
    console.log(error.message)
}

