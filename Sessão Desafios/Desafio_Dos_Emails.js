//Extraia os emails desta lista
let texto = `
Lista de emails premiados:

- mariaclaramelo_carvalho@yahoo.com
- carlasilva35@live.com
- isabelamartins14@hotmail.com
- pablopereira.franco40@bol.com.br
- laurabarros.albuquerque@hotmail.com
- dsfggsfdgelsiomoraes_moreira@yahoo.respsdgfostas.com.br
`// todos os emails são falsos

let regexPuxaEmail = /\w+@\w+\.[\w+\.]+/gi
console.log(texto.match(regexPuxaEmail))
