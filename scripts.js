// 1 - Declare uma variável de nome Weight
//let weight

// 2 - Que tipo de variável acima?
//console.log(typeof weight)


/*
    3 - Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: boolean
*/
/*
const person = {
    name: 'Daniel',
    age: 24,
    stars: 3.4,
    isSubscribed: true
}
*/

// OU

//let name = 'Daniel';
//let age = 24;
//let stars = 3.4;
//let isSubscribed = true


/*
    4 - A variável student abaixo é de que tipos de dados?

    4.1 - Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 - Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção substitua <name><age><weight> pelos valores de cada propriedade do objeto.
*/
//Resposta 4 - é um objeto

//Resposta 4.1
let student = {
    name: 'Daniel',
    age: 24,
    weight: 82.6,
    isHuman: true
}

//Resposta 4.2
console.log(student.name + ' de idade ' + student.age + ' pesa ' + student.weight + ' kg')

//OU

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/*
    5 - Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = []


/*
    6 - Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.
    (Não copiar e colar o objeto mas usar o objeto criado e inserir ele no Array)
*/

students = [
{
    student
}
]

console.log(students)

/*
    7 - Coloque no console o valor da posição zero do Array acima
*/
console.log(students[0])

/*
    8 - Crie um novo student e coloque na posição 1 do Array students
*/
//Criando o Objeto

const mom = {
    name: 'Sandra',
    age: 40,
    weight: 88.8,
    isHuman: true
}

//Atribuindo ao Array
/*

students = [
    student,
    mom
]

*/
//Podemos atribuir desta forma também
students[1] = mom

console.log(students[1])

/*
    9 - sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se acertou.
    
    console.log(a)
    var a = 1
*/

/*
    Resposta da questão

    Neste caso o console identificaria que existe uma váriável a, porém ainda não conseguiria acessar o seu valor, pois foi declarada e atribuida após console.log que usamos para visualizar.
    console irá retornar undefined
    Acontece o que chamamos de Hoisting
    var a
    console.log(a)
    a = 1
*/

console.log(a)
var a = 1