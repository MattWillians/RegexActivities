const texto = '<div>Texto Legal 1</div><div>Texto mais legal ainda!!!</div>'

//Nossa ideia é retirar cada uma das divs separadas... vamos ver se conseguimos
console.log(texto.match(/<div>.+<\/div>/gi)) //não deu certo! Retornou uma string só, por conta das divs...
console.log(texto.match(/<div>.+?<\/div>/gi)) //DEU CERTO!! colocando o "?" dizemos pra pegar o menor numero possivel de elementos entre as divs!!