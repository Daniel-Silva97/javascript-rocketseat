//Manipulando Strings e Números

// Separe um texto que contém espaços em um novo array, onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
//Criando frase em uma variável
let phrase = "Eu quero viver o Amor!"
//Criando o Array para separar o conteúdo da variável em posições no Array
let myArray = phrase.split(" ")

/*
Com a propriedade split, podemos quebrar a frase em posições no array, temos apenas que determinar no parenteses onde o programa deve quebrar e iniciar uma nova posição, no exemplo a cima informei que por meio do espaço (SPACE) " " 
*/

//Visualizando o resultado
console.log(myArray)

// Criando variável para juntar os dados do Array separados por _

let phraseWithUnderscore = myArray.join("_")

/*
A propiedade join pede somente assim como a split qual caracterer deseja utilizar para unir as posições dentro array em uma String, que no caso será _
*/

//Visualizando o Resultado
console.log(phraseWithUnderscore)