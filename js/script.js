// função que realiza a soma de dois numeros
const soma = () => {
 // declara uma variável e atribui valor
let numero1 = prompt('Digite o primeiro numero')

let numero2 = prompt('Digite o segundo numero')

let soma = parseFloat(numero1) + parseFloat(numero2)

alert(soma)   
}

const soma2 = (numero1,numero2) => {
    let soma = numero1 + numero2
    alert(soma)
} 

// Função que soma 2 numeros digitados pelo usuário em um form
const somaNumeros = () => {
    // Cria uma var e captura o valor do input com id = numero1
    let numero1 = document.getElementById('numero1').value

    let numero2 = document.getElementById('numero2').value

    let soma = parseFloat(numero1) + parseFloat(numero2)

    // Exibe a soma dentro div resultado
    document.getElementById('resultado').innerHTML = `
    Resultado da soma é ${soma}
    `
}