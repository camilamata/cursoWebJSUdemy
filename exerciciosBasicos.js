//1) Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final

function saudacao(text) {
    console.log('Olá, ' + text + '!')
}
saudacao("Pessoa")

//2)Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias

function idadeEmDias(idade) {
    const dias = idade*365
    console.log('Sua idade é: ' + dias + ' dias')
}
idadeEmDias(24)

//3) Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído 30%, relativo a impostos.

function salarioLiquido(valorHora, quantidadeHoras) {
    const salarioFinal = (valorHora*quantidadeHoras*0.7).toFixed(2)
    console.log('Seu salário, com impostos descontados é: R$'+ salarioFinal)
}
salarioLiquido(12,136)