const texto = `
Lista de sites:
    https://www.google.com/ 
    app.photoroom.com 
    www.ahgora.com.br 
    colorhunt.co
    http://127.0.0.1
`
let regexSeparaLink

regexSeparaLink = /((http)s?\:\/\/[\w\.]+)+?|\w+\.[\w\.]+/gi
console.log(texto.match(regexSeparaLink))