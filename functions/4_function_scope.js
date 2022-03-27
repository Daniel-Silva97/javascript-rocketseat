//Function scope
let subject = 'create video'

function createThink(subject) 
{
    subject = 'Study'
    return subject
}

console.log(subject)
console.log(createThink(subject))

/*
O Escopo da função no caso acima não fará com que o subject da função não sobrescreva o que definimos na variável, isso acontece porque na função criamos um parâmetro subject, que cria um novo escopo na função para que não afete a variável.

O subject dentro da função só substituiria o valor da variável se não informassemos o parâmetro na criação da função, por exemplo:
*/
let subject2 = 'High School'

function createThink2() {//Não passei parâmetros
    subject2 = 'Graduated'
    return subject2
}

console.log(subject2)//Antes de chamar a função
console.log(createThink2(subject2)) //Este console irá atualizar o valor da variável por não ter parãmetros na função
console.log(subject2)//Função alterou o valor
