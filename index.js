var nome = window.prompt('digite seu nome')
window.alert(`Obrigado ${nome}`)
//document.write(`Ola meu guri ${nome}. Seu nome tem ${nome.length} letras Mas nao sei ${nome}
    //voce parece ser Estranho <br/>`) //Mostra as informações na tela(background)
//document.write(`Seu nome em letras maisculas fica ${nome.toUpperCase()} <br/>`)
// document.write(`Seu nome em letras minusculas fica ${nome.toLowerCase()}`)
var n1 = 1523.5;

document.getElementById("resultado").innerHTML = n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
var calculo = window.prompt('Digite a operação (+, -, *, /, %, **):')
var n1 = Number.parseFloat(window.prompt('Digite o primeiro numero'))
var n2 = Number.parseFloat(window.prompt('Digite o segundo numero'))
var result

switch (calculo) {
    case '+':
         result= n1 + n2
        break
    case'-':
        result=n1 - n2
        break
    case '*':
        result=n1 * n2
        break
    case '/':
        result=n1 / n2
        break
    case '%':
        result=n1 % n2
        break
    case '**':
        result-n1 ** n2
        break
}
window.alert(`O resultado do calculo setado é: ${result}`)
//window.document.write(window.navigator.appName)
//window.document.write(window.document.URL)
var p1 = window.document.getElementsByTagName('p')[2]
window.document.write('Esta escrito assim ' + p1.innerText)
p1.style.color = 'blue'
window.alert(p1.innerHTML)
var d = window.document.getElementById('msg')

window.confirm("Esta de acordo com o site?")

function pesquise(){
    var input = document.getElementById('pesquisar').value
    input = input.toLowerCase()
    var x = document.getElementsByClassName('comidas')

    for (i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none"
        }else{
            x[i].style.display = "block"
        }
    }
}