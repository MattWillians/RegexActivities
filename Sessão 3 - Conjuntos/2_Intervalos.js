const letrasAlfabetoUpper = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z'
const letrasAlfabetoLower = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z'

const regexLetrasLower = /[a-z]/g //definimos um regex que vai pegar um intervalo de letras
const regexLetrasLower2 = /[c-h]/g // podemos definir um conjunto menor

console.log(letrasAlfabetoLower.match(regexLetrasLower))
console.log(letrasAlfabetoLower.match(regexLetrasLower2))

const regexLetrasUpper = /[A-Z]/g //definimos um regex que vai pegar um intervalo de letras
const regexLetrasUpper2 = /[C-H]/g // podemos definir um conjunto menor

console.log(letrasAlfabetoUpper.match(regexLetrasUpper))
console.log(letrasAlfabetoUpper.match(regexLetrasUpper2))

//Vamos fazer o mesmo com numeros...
const numeros = '1,2,3,4,5,6,7,8,9,0'

console.log(numeros.match(/[1-7]/g))

//agora vamos misturar as strings e ver se conseguimos localizar 2 conjuntos

const mistura = numeros +", "+letrasAlfabetoLower

console.log(mistura.match(/[1-7a-f]/g)) // declaramos os 2 conjuntos juntos
