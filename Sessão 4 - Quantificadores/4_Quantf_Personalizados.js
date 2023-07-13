const palavras = 
`
Abobrinhas
Quarentenados
Trapalhadas
Paralelepipedo
Bagunçadeira
Escangalhados
Peraltices
Espetacularia
Lambisgoia
Pernalongas
Balburdiantes
Cabecudinhos
Desastrados
Fanfarronices
Geringoncas
`

console.log(palavras.match(/\w{7}/gi))// Puxamos as 7 primeiras letras

const numeros = `
56
83
22
47
91
15
68
33
74
42
79
26
63
18
55
`

console.log(numeros.match(/[0-6]{2}/g)) //Puxamos numeros de 2 digitos que vão de 0 a 6