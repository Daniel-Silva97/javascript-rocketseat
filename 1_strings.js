/* String */

/* 
Cadeia de caractereces 

"" Aspas duplas
'' Aspas simples
`` Template literais ou template strings
*/

console.log('Daniel') // Posso usar aspas simples
console.log("Daniel") // Posso usar aspas duplas


/* 
Nos exemplos acima, como podemos ver o Javascript entende a String tanto em aspas simples como em aspas duplas, este uso é para casos em que podemos querer usar estes acentos dentro da conteúdo, por exemplo:

O Daniel tirou um "Parabéns" como nota da prova

*/

console.log('O Daniel tirou um "Parabéns" como nota da prova') 
//Neste caso, como tem aspas duplas na frase o correto será usar aspas simples que não haverá erros


console.log("O Daniel tirou um "Parabéns" como nota da prova") 
//Usando aspas duplas, o código encontrará este problema na hora de interpretar, já que ele não sabe onde Abre / Fecha o conteúdo deste console LOG 

/*
Aspas simples e Aspas duplas trabalham no formato monolinha, então o console log tera problemas em casos que o texto ocupe mais que uma linha, por exemplo
*/

console.log(' Teste
com
mais
de uma linha
')

/*
No exemplo acima, com aspas simples tentei informar um texto que ocupasse mais de uma linha e o VS code entendeu que as linhas subsequentes eram funções assim como o console.log e não contéudo, logo teríamos problemas para o navegador interpretar

Neste caso, para que o código conseguisse interpretar corretamente, temos de usar a CRASE (` `) para dar certo, por exemplo
*/

console.log(`Teste
com
mais
de uma linha
`)

/* 
Perceba que agora o VS Code interpretou corretamente que todo o texto que inseri são contéudo do console log e não novas funções.

A CRASE é usada também para expressões regulares, pois com aspas simples e duplas teríamos o mesmo problema que mostrei no caso de multilinhas, por exemplo:

*/

console.log(`O resultado da soma 1+1 é: ${1 + 1}`)


