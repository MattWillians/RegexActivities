//Para este desafio você deve extrair estes numeros de dentro da lista de cobrança
const texto = `
Numeros de telefone para cobrança:

- 92067-2677
- (98) 93430-8241
- (91) 93602-4992
- 92356-8864
- 92094-6427
- (88) 93457-1783
- (85) 93624-6215
- (65) 93239-8729
- (68) 92846-8296
- 93990-6283
`//nenhum numero desses existe realmente.

const regexExtraiTel = /(\(\d+\))?\s?\d+-\d+/g
console.log(texto.match(regexExtraiTel))
