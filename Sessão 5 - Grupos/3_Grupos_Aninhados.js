const texto = `
mercado
supermercado
hipermercado
megamercado
plusmercado
gigamercado
`
console.log(texto.match(/(super|hiper|mega|plus|giga)?mercado/gi)) // criamos um grupo que recebe uma condição de escolher alguns tipos de mercado > super|hiper|mega|plus|giga
//podemos fazer o mesmo usando um subgrupo
console.log(texto.match(/((su|hi)per|mega|plus|giga)?mercado/gi)) // agrupamos super|hyper transformando em (su|hy)per