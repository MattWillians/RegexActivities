const texto = "1,2,3,4,5,6,7,dfsd.çl ew!?we[df";

//vamos definir um conjunto usando os [] (ou Colchetes)
const regexNumerosPares = /[246]/g // significa que queremos os caracteres dentro deste conjunto
console.log(texto.match(regexNumerosPares))

//agora, vamos fazer o mesmo com letras
const regexLetras = /[dsçw]/g
console.log(texto.match(regexLetras))

//é possivel loxalizar os simbolos?
const regexSimbolos = /[\.!\?\[]/g
console.log(texto.match(regexSimbolos))

//é possivel encontrar caracteres seguidos de sequencias?
const texto2 = "Um jogador não sabe nada sobre nadar, dois jogadores sabem nadar."

const regexLetraConjunto = /n[aã]/gi
console.log(texto2.match(regexLetraConjunto))

const regexConjuntoMeta = /a[dr]/g
console.log(texto2.match(regexConjuntoMeta))