const texto = "<b>destaque</b><strong>forte</strong><div>conteudo</div><tab></tab>"
let regexRetrovisor

regexRetrovisor = /<(\w+)>.*<\/\1>/gi // Quando criamos o conjunto (\w+), podemos usar ele novamente usando \(numero do conjunto, lembrando que a numeração faz parte da ordem em que foram criados)
console.log(texto.match(regexRetrovisor))