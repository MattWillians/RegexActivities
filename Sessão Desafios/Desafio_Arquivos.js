//texto do desafio
const arquivos = "lista de arquivos mp3: Jazz.mp3, Rock.mp3, podcast.mp3, Blues.mp3"

//1. Obtenha todas as referências .mp3
const referenciasMp3 = arquivos.match(/\.mp3/g)

//2. Obtenha os arquivos MP3 
const arquivosMp3 = arquivos.match(/\w+\.mp3/g) //procura frases que estejam COLADAS a expressão ".mp3" (espaços não contam)

console.log("Referências MP3: "+ referenciasMp3)
console.log("Minhas musicas: "+ arquivosMp3)
