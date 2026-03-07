function atualizarDataHora(){

let agora = new Date()

let dia = String(agora.getDate()).padStart(2,'0')
let mes = String(agora.getMonth()+1).padStart(2,'0')
let ano = agora.getFullYear()

let hora = String(agora.getHours()).padStart(2,'0')
let minuto = String(agora.getMinutes()).padStart(2,'0')
let segundo = String(agora.getSeconds()).padStart(2,'0')

document.getElementById("data").innerText = "Data: " + dia + "/" + mes + "/" + ano
document.getElementById("hora").innerText = "Hora: " + hora + ":" + minuto + ":" + segundo

}

atualizarDataHora()
setInterval(atualizarDataHora,1000)



function calcular(){

let agora = new Date()

let dia = agora.getDate()
let mes = agora.getMonth()+1

let senha = (dia + 20) + "" + (mes + 11)

document.getElementById("resultado").innerText = senha

}



function mostrarCampo(){

let area = document.getElementById("outraData")

if(area.style.display === "block"){
area.style.display = "none"
}else{
area.style.display = "block"
}

}



function calcularOutra(){

let valor = document.getElementById("dataEscolhida").value

if(valor === ""){
alert("Selecione uma data")
return
}

let partes = valor.split("-")

let dia = parseInt(partes[2])
let mes = parseInt(partes[1])

let senha = (dia + 20) + "" + (mes + 11)

document.getElementById("resultadoOutra").innerText = senha

}