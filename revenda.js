

//Entradas:
let campoModelo = document.querySelector("#modelo")
let campoAno = document.querySelector("#ano")
let campoPreco = document.querySelector("#preco")
let botaoCalcular = document.querySelector("#calcular")
let saida = document.querySelector("#saida")


    //Função para classificar pelo ano do carro se ele é Novo, Seminovo ou usado.
function classificarCarro (ano) {
    let data = new Date()
    let anoatual = data.getFullYear()
    
    //Se o modelo do carro é do ano atual ou do futuro então é novo:
    if (ano >= anoatual) {
        return "Novo"

    //Se o modelo do carro tem até dois anos de uso então é seminovo:
    } else if (ano >= anoatual-1) {
        return "Seminovo"

    //Se o modelo do carro tem mais de dois anos de uso então é usado:
    } else return "Usado"
}


    //Função para calcular o preço da entrada de acordo com o tipo do carro.
const calcularEntrada = (preco, tipo) => {
    
    //Se o tipo do carro é novo é necessário uma entrada de 50%:
    if (tipo === "Novo") {
        return preco*0.5
    
    //Se o tipo do carro é seminovo ou usado então é necessário uma entrada de 30%:
    } else return preco*0.3
}

    // função para calcular o valor da parcela do carro e imprimir na tela.
    //Para isso a função precisa chamar as funções anteriores primeiro.
const calcularParcela = () => {
    let modelo = (campoModelo.value === "")? "Digite o modelo": campoModelo.value
    campoModelo.value = "Digite o modelo"

    let ano = (campoAno.value === "")? "0": campoAno.value
    campoAno.value = "0"
    ano = Number(ano)

    let preco = (campoPreco.value === "")? "0": campoPreco.value
    campoPreco.value = "0"
    preco = Number(preco)

    let tipo = classificarCarro(ano)
    let entrada = calcularEntrada(preco, tipo)
    let parcela = (preco - entrada) / 10

    saida.innerHTML = `${modelo} - ${tipo}<br>
    Entrada R$: ${entrada.toFixed(2)}<br>
    +10x de R$: ${parcela.toFixed(2)}<br>`
}

botaoCalcular.addEventListener("click", calcularParcela)
