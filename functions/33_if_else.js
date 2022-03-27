/*
Control Flow (Controle de Fluxo da aplicação)
*/

// if ... else


//Apicação que mede a febre da pessoa

let temperature = 38

//Criando as variáveis para usar na condicional
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37


if(highTemperature){
    console.log('Febre alta')
} 
else  if(mediumTemperature){
    console.log('Febre moderada')
}
else{
    console.log('Saudável')
}

/*
Dicas

Sempre deixe as condicionais como variaveis e não informe os valores direto na condicional
*/
