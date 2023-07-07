const texto = "Eu amo programar em Java, POO é divertido!" //Um texto simples

const regexPonto = /Eu...o/g // estamos pedindo para o sistema pegar algo que começe com "Eu", tenha 3 caracteres e termine com "o"
const regexVariosPontos = /p...............a/g  // estamos pedindo para o sistema pegar algo que começe com "p", tenha 15 caracteres e termine com "a"

console.log(texto.match(regexPonto))
console.log(texto.match(regexVariosPontos))

const notasAluno = "9.9,6.7,8.7,10.0,3.4,8.6,6.5,9.0.6.9"
const regexNotas = /9../g // estamos pegando notas com 9 e suas respectivas 2 casas
const regexNotasAll = /.\../gi // não conseguimos pegar a nota 10, ela veio como 0.0

console.log(notasAluno.match(regexNotas))
console.log(notasAluno.match(regexNotasAll))