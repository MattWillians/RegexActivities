const texto = "eu gosto de rir hehehehehehehehe, meus amigos falam que eu sou engraçado hahahahahahaha"

let regexConjuntos = /(he)/g; //ele da match em todos os "he" diferente dos [he] que da match por caractere
console.log(texto.match(regexConjuntos))

regexConjuntos = /(he)+/g; // usamos o + para pegar todos os he
console.log(texto.match(regexConjuntos))


regexConjuntos = /(he)+|(ha)+/g; // usamos o || para pegar todos os he e todos os ha
console.log(texto.match(regexConjuntos))