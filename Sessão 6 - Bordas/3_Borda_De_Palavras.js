const texto = `
cordial
perfidia
mediante
primordial
repudiar
cordialidade
custodia
ousadia
entediado
diante
`

console.log(texto.match(/\w*dia\w*/gim)) // podemos pegar as palavras desta forma ou usando bordas
console.log(texto.match(/dia/gim))
