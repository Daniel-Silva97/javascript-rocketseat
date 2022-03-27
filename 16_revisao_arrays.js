//Arrays

const animals = [
    'Lion',
    'Monkey',
    'Cat'
]

//Acessar valores dentro do Array
console.log(animals)

//Acessar uma posição específica dentro do Array
console.log(animals[0])
//Este número 0 foi retirado da visualização do array completo no primeiro console.log acima, lá todos os valores do array são ordenados por números, o 0 por exemplo está ligado ao 'Lion' no 

//Para ver o tamanho do array
console.log(animals.length)



//Criando Objetos dentro de Arrays

const people = [
    {
        name: 'Daniel',
        age: 24,
        Weight: 82.5
    },

    {
        name: 'Sandra',
        age: 40,
        weight:85
    }
]

//Mostrando todo o Array no Console
console.log(people)

//Mostrando dados de um objeto em específico
console.log(people[1])

//Mostrando um valor do objeto em específico
console.log(people[1].name)

//Concatenando esse objeto que está no Array
console.log('O ' + people[0].name + ' tem ' + people[0].age + ' anos, enquanto sua mãe ' + people[1].name + ' tem ' + people[1].age + ' anos.')


//Interpolando o Objeto do Array

console.log(`O ${people[0].name} tem ${people[0].age} anos, enquanto sua mãe ${people[1].name} tem ${people[1].age} anos.`)





