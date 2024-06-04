let resposta = document.getElementById('resposta')

function calcula(){
    // leitura dos dados de entrada na caixa input chamada
    let base = Number (document.getElementById('base').value)
    console.log(base)

    let altura = Number (document.getElementById('altura').value)
    console.log(altura)



    // fazendo o calculo do circulo
    let area = base * altura / 2
    console.log("o valor da area é =",area)

    // mostrando o resultado para o usuario
    resposta.innerHTML = "O valor da área é = " + area.toFixed(2)
    resposta.style.fontSize = "2rem"

}