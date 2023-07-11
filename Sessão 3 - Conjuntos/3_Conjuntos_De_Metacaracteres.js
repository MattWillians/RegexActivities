const metacaracteres = '.$+*-?'

console.log(metacaracteres.match(/[.$+*-]/g)) //Usamos metacaracteres, mas em conjuntos são considerados literais (NÃO SÃO TODOS)
console.log(metacaracteres.match(/[$-?]/g)) //Já aqui, temos um intervalo válido