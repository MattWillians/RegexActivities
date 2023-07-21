
// FAÇA UMA EXPRESSÃO REGULAR QUE EXTRAIA O CPF DO ALUNO, E FORMATE ELE PARA PASSAR AO SISTEMA

const texto = `
Lista de CPF dos alunos aprovados:

- 505.234.645-98
- 234.534.745-76
- 543.764.233-65
- 123.321.234-12
- 443.456.678-98
- 456.128.746-99
- 546.345.876-67

`;// NENHUM DESTES CPF's SÃO REAIS

//Solução 1
const regexExtraiCPF = /\d{3}.+-\d{2}/g
const listaDeCpf = texto.match(regexExtraiCPF)

console.log(listaDeCpf)

let cpfsFormatados = [];

listaDeCpf.forEach(cpf => {
    cpf = cpf.replace(/[\.-]/g, "");
    cpfsFormatados.push(cpf);
});

console.log(cpfsFormatados)

