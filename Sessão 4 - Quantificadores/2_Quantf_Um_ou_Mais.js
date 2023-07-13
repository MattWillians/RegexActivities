const texto = "O tema principal em Mateu é de que Jesus Cristo veio estabelecer Seu reino na Terra. Mateus mencionou “o reino dos céus” inúmeras vezes e ele é o único autor dos evangelhos a incluir ensinamentos de Jesusssssssssssssssssssssssssssssssssssss. Mateu era um dos discipulos de Jesusssssssssssssss." //Disclammer: Este texto foi tirado da internet, e é apenas usado para extrair palavras, nada alem disso.

console.log(texto.match(/Jesus+/gi)) // veja que no texto, o nome Jesus, contem varias letras S algumas vezes, mas mesmo assim, trazemos ele. Isso é devido ao fato que tornamos ""um ou mais"" apenas o s

texto2 = "Olhe meus numeros: 123456789. Agora, vou repetir eles vaaaarias vezes: 1111111222233344445567888999"

console.log(texto2.match(/[0-9]/gi)) //trazemos normalmente todos os numeros, separados
console.log(texto2.match(/[0-9]+/gi)) //trazemos normalmente todos os numeros MAS, dentro de conjuntos!