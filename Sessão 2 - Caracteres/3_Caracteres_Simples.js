// EX 1
const texto = "1,2,3,4,5,6,sdad,&3#$a,)(,7sd,8,f<>,9,10" // criamos uma string separada por virgula, nela temos varios caracteres
const regexSeparador = /,/ // dizemos que queremos separar os itens por virgula

let listaDeElementos = texto.split(regexSeparador) //jogamos os caracteres dentro de uma lista
console.log(listaDeElementos) // imprimimos a lista
