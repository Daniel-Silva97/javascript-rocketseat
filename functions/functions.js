/*
    Buscando e contando dados em Arrays

    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar os livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/


//Criando Array com os Objetos livros dentro dele
const booksByCategory = [
{
    category: "Riqueza",
    books:[
        {
            title: "Os segredos de uma mente milionária",
            autor: "T. Harv Eker",
        },
        {
            title: "O homem mais rico da Babilônia",
            author: "George S. Clason",
        },
        {
            title: "Pai rico, pai pobre",
            author: "Robert T. Kiyosaki e Sharon L. Lechter",
        },
    ],
},
{
    category: "Inteligência Emocional",
    books: [
        {
            title: "Você é insubstituível",
            author: "August Cury",
        },
        {
            title: "Ansiedade - Como enfrentar o mal do século",
            author: "August Cury",
        },
        {
            title: "Os 7  hábitos das pessoas altamente eficazes",
            author: "Stephen R. Covey",
        },
    ],
},
];

const total = booksByCategory.length //Contando quantas categorias temos no Array

console.log(`Total de Categorias: ${total}`) //Printando em tela
for( let category of booksByCategory){ 
    console.log("Total de livros de categorias:", category.category)
    console.log(category.books.length)
}
//For utilizado para contar quantos livros em cada categoria

function countAuthors(){
    let authors = []
    for ( let category of booksByCategory){ //Entra no array e verifica o objeto categorias 
        for( let book of category.books){ //Entra no objeto categorias e verifica os livros
            if(authors.indexOf(book.author == -1)) //Valida se o author está dentro do array, se não estiver, ele inclui
            {
                authors.push(book.author) //Incluindo o author no array
            }
        }
    }
      console.log(`Total de autores: ${authors.length}`)
}

countAuthors()



function booksOfAugustCury(){
    let books = [];
    for ( let category of booksByCategory){ //Entra no array e verifica o objeto categorias 
        for( let book of category.books){ //Entra no objeto categorias e verifica os livros
            if(book.author == "August Cury") 
            {
                books.push(book.title)
            }
        }
    }
      console.log(`Livros do autor: ${books.join(", ")}`)
}

booksOfAugustCury()