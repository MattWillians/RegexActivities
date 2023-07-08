const texto = "Olá\nMundo" // Texto com quebra de linha
console.log(texto.match(/Olá.Mundo/g)) // Veja que o regex não reconhece \n como um caractere, o "." reconhece caracteres literais somente!
console.log(texto.match(/Olá\sMundo/g)) // Já o \s é considerado ESPAÇO, e reconhece a quebra de linha