const textoQuebrado = `
mat 	he
u	  	s
`// Neste texto, vamos localizar a palavra, em seguida, vamos transforma-la bo que ela realmente é

console.log(textoQuebrado.match(/\nmat \the\nu\t  \ts\n/gi)) // Os texto esta quebrado, mas conseguimos localiza-lo
console.log(textoQuebrado.replace(/[\n \t]/gi,"")) // vamos substituir todo erro deste texto para termos o texto de fato