const texto = `
Leo esta jogando bolal
Antonio gosta de comprar casa
Sergio viu uma cobra fazer Psss
`
//vamos fazer uma expressão que extraia cada uma das frases...
console.log(texto.match(/\n/gi)) //Hmm... extraimos apenas os \n's
console.log(texto.match(/^(\w).+\1$/gi)) // vamos pegar os textos... UÉ, não funcionou!! Pois o texto está na segunda linha, e não foi possivel localizar.. precisamos usar a tag "m"
console.log(texto.match(/^(\w).+\1$/gim)) // essa expressão pode ser escrita: console.log(texto.match(/^(\w).+\w/gi)) e ira funcionar da mesma forma, note que usamos a tag "m"