const texto = "Pelé começou como um bom jogador de Football.\nMas hoje, é um politico de respeito"

console.log(texto.match(/^pe/gi)) // usando o ^ pegamos "o começo" da frase... se fosse dentro de um [] (conjunto) seria um conjunto negado

console.log(texto.match(/to$/gi)) //usando a tag $ pegamos o FINAL do texto!