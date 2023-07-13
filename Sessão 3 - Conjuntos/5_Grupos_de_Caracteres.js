const text = "143sdgf12gd423jdf4j5h2k??????_+_+++13lgjh \n\t		     lk5çjlç645hkl3çhjkç764asd53"

console.log(text.match(/\d/g)) // a expressão \d significa digito [0-9]
console.log(text.match(/\D/g)) // a expressão \D significa NÃO É digito [^0-9]
console.log(text.match(/\w/g)) // a expressão \w significa todos os caracteres (a-z, A-Z, 0-9 e "_" )
console.log(text.match(/\W/g)) // a expressão \W significa todos os caracteres, MENOS: (a-z, A-Z, 0-9 e "_" )
console.log(text.match(/\s/g)) // a expressão \s Encontra os espaços
console.log(text.match(/\S/g)) // a expressão \S Encontra COISAS QUE NÃO SÃO espaços