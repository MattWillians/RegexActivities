const perigo = 'ABC [abc] a-c 1234'

console.log(perigo.match(/[a-c]/gi)) //puxa todas as letras necessarias
console.log(perigo.match(/a-c/g)) //puxa apenas o a-c

//como podemos puxar os metas?
console.log(perigo.match(/[a-c1-4\[]/gi)) // conseguimos puxar os colchetes usando o \ (escape)
console.log(perigo.match(/[A-Z]/gi)) // trazemos TODAS as letras
console.log(perigo.match(/[A-z]/g)) //trazemos... colchetes?? Isso é por que na tabela ASCII entre o A...z existem outros caracteres!!