const textoDeUmaLinha = "Este é um texto com uma linha" //use aspas simples ou duplas, tanto faz. Não é possivel adicionar varias linhas
const textoComVariasLinhas = `
    Isto é um
    Texto com varias
    Linhas nele
` //Este texto tem várias linhas, e elas são consideradas!

console.log(textoDeUmaLinha)
console.log(textoComVariasLinhas)

//Agora, vamos ver o que acontece com a questão do TAB
const stringFeitaDeEspacos = "    " //Esta string é feita de 4 espaços
const stringFeitaDeTab = "	" //Esta String é feita de UMA Tab

const regex = /\s/g

console.log(stringFeitaDeEspacos.match(regex)) //foram reconhecidos 4 espaços
console.log(stringFeitaDeTab.match(regex)) // foi reconhecido UM tab