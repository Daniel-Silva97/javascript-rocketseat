//Grouping operator ( )

let total = 2 + 3 * 5
//Aqui a prioridade será da multiplicação, então 2 + 15 = 17
console.log(total)

//Assim como na matemática, há precedências e prioridades de um operador sobre outro, Multiplicação/Divisão calcula antes da Soma/Subtração, para alterar a ordem dessa precedência podemos usar os () para dar prioridade aquele calculo antes de qualquer outro, por exemplo

let totalGrouping = (2 + 3) * 5
//Aqui diferente do primeiro exemplo, será calculado o que está entre parenteses primeiro, sendo assim: 5 * 5 = 25

console.log(totalGrouping)