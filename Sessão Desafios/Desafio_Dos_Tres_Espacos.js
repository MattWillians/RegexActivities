//Dado este texto...
const textoEspaco = "gffdggd a   b agfsfd"

//Encontre formas de extrair o campo "a   b".
console.log(textoEspaco.match(/a   b/))
console.log(textoEspaco.match(/a...b/))
console.log(textoEspaco.match(/a\s\s\sb/))

console.log(textoEspaco.match(/a\s+b/)) // \s+ significa que podem haver 1 ou mais espaços
console.log(textoEspaco.match(/a {3}b/)) // {3} siginifica que estamos procurando 3 espaços.