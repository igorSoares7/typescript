"use strict";
function concatena(num, str, bln) {
    return `O valor numérico é ${num}, a string é ${str}, o valor booleano é ${bln} Retorno é uma string, mas poderia ser void caso fosse vazio.`;
}
console.log(concatena(1, 'Igor', false));
const meuNome = 'Igor';
const minhaIdade = 28;
const estudaTypescrit = true;
const dados = {
    nome: "TargetTrust",
    curso: "Typescript",
    professor: {
        nome: "Jefferson",
        idade: 30
    },
    modulo: 4,
    ativo: true,
    ola: (s) => { console.log(`Olá, ${s}`); }
};
console.log(typeof dados);
console.log(dados);
console.log(dados.professor.nome);
console.log(dados.modulo);
dados.ola("Jeff");
