//Objects

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

//Mostrar todo o objeto
console.log(person)

//Mostrando um dado somente do objeto, como nome por exemplo
console.log(person.name)

//concatenando valores do objeto
console.log('O ' + person.name + ' tem ' + person.age + ' anos e pesa ' + person.weight + ' quilos.' )

//Interpolando valores com objeto
console.log(`O ${person.name} tem ${person.age} anos e pesa ${person.weight} quilos.`)