//Este é um texto que passamos, queremos tirar as palavras "casa" dele
const texto = "Na minha CASA, há uma Casa de bonecas no quarto das crianças, uma casa de pássaros pendurada no jardim e uma casinha de cachorro no quintal."

//criamos um regex, passando as tags g / i que significa que vamos pegar TODA a string, e vamos ignorar diferenças camelCase
const regex = /casa/gi
console.log("Este é um regex usando variavel: " + texto.match(regex))
console.log("Este é um regex codado direto no método: " + texto.match(/casa/gi))