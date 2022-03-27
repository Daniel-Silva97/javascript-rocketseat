//Throw

//Criando a função com throw para apontar um erro caso não informe o valor esperado
function sayMyName(name){
  
    if(name === ''){
        throw new Error('Nome é obrigatório') //Criando um objeto Error usando throw para mostrar uma mensagem de erro
    }

    console.log(name) //Se informar o nome retornará em tela aqui
}

//Com função criada usamos o try catch para capturar o erro e mostrar na tela se necessário



//Try ... Catch
try{
    sayMyName('') //Chamei a função com '' para forçar o erro
}
catch(Error){
    console.log(Error) //Quando acontece o erro, chamei o console.log para ver a mensagem
}

console.log('Após o try ... catch')