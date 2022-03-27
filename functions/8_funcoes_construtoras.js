//Function Constructor

/*
    * Expressão new
    * Criar um novo objeto
    *  This keyword

    Com a expressão new criamos uma função objeto, logo conseguimos armazenar vários dados como o objeto nos permite.
    Para criar um novo objeto podemos fazer isso usando variáveis por exemplo, criando a variável e setando a função o valor a armazenar.
    This nos permite que todos os objetos chamados criados pela função tenham as mesmas propriedades
*/

function Person(name) //Criando a função
{
    this.name = name    //this nos permite que todos os objetos chamados criados pela função tenham as mesmas propriedades
}


const daniel = new Person('Daniel')
const sandra = new Person('Sandra')
const claudimir = new Person('Claudimir')
const danilo = new Person('Danilo')
//Instanciando novos onjetos acima

console.log(daniel)
console.log(sandra)
console.log(claudimir)
console.log(danilo)
//Mostrando o resultado