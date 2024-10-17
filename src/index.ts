//Crie uma função com parâmetros tipados (number, string, boolean, etc.).

function concatena(num: number, str: string, bln: boolean): string {
    return `O valor numérico é ${num}, a string é ${str}, o valor booleano é ${bln} Retorno é uma string, mas poderia ser void caso fosse vazio.`
}

console.log(concatena(1, 'Igor', false))

//Defina variáveis com os tipos string, number e boolean e um objeto qualquer.
//Chame a função criada e mostre o resultado no console.
//Compile o código criado



const meuNome: string = 'Igor';

const minhaIdade: number = 28;

const estudaTypescrit: boolean = true

const dados = {
    nome: "TargetTrust",
    curso: "Typescript",
    professor: {
        nome: "Jefferson",
        idade: 30
    },
    modulo: 4,
    ativo: true,
    ola:(s:string) =>{console.log(`Olá, ${s}`)}
}

console.log(typeof dados)
console.log(dados)
console.log(dados.professor.nome)
console.log(dados.modulo)
dados.ola("Jeff")
