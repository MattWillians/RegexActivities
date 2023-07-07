const texto = "1*2,3,4?5,6,sdad,&3#$a,)(,7sd,8,f<.>,9,10"
const regexPonto = /\./g //Neste regex, estamos buscando pelo "." dentro do texto, porem o ponto é parte das expressões regulares, então, temos de encontra-lo usando "\.", o \ nesse caso diz ao Regex que estamos tratando o ponto como valor literal.

console.log(texto.match(regexPonto))

const regexSeparaSimbolos = /\*|\?|,|\$|\./g
console.log(texto.split(regexSeparaSimbolos))