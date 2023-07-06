let textoBase = "Este é um texto base!"

let novoTexto = ""
novoTexto = textoBase.match(/te/) + textoBase.match(/xto/) + textoBase.match(/e/g) + textoBase.match(/e/gi)
console.log(novoTexto)