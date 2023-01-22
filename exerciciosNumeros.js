//1)Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês

const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"
]

function monthNumber(number) {
    const index = number - 1
    console.log(months.at(index))
}
monthNumber(4)

//2)Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar números de strings.

function maiorOuIgual(num1,num2) {
    if (typeof num1 != typeof num2) {
        console.log(false)
    }

   console.log(num1 >= num2) 
}
maiorOuIgual("3",4) 

//3) Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ..."

function inverseByType (param) {
    let type = typeof param
    //console.log(type)
    if(type == "number") {
        console.log(-param)
    } 
    else if (type == "boolean") {
        console.log(!param)
    }
    else
        console.log(  `boolean or number expected, but the parameter is a ${type} `)

      
}
inverseByType(3)