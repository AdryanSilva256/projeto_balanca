function atualizarRelogio(){

let agora = new Date() 

let dia = String(agora.getDate()).padStart(2,"0")
let mes = String(agora.getMonth()+1).padStart(2,"0")
let ano = agora.getFullYear()

let hora = String(agora.getHours()).padStart(2,"0")
let minuto = String(agora.getMinutes()).padStart(2,"0")
let segundo = String(agora.getSeconds()).padStart(2,"0")

document.getElementById("data").innerText =
dia + "/" + mes + "/" + ano
document.getElementById("hora").innerText =
hora + ":" + minuto + ":" + segundo

}

setInterval(atualizarRelogio,1000)
atualizarRelogio()

function calcularSenha(){

let campo = document.getElementById("senha")

if(campo.innerText !== ""){
campo.innerText = ""
return
}

let agora = new Date()
let dia = agora.getDate()
let mes = agora.getMonth()+1
let senha = (dia + 20) + "" + (mes + 11)

campo.innerText = senha

}

function mostrarOutraData(){
let area = document.getElementById("areaData")
if(area.style.display === "block"){
area.style.display = "none"
}else{
area.style.display = "block"

}

}

function calcularOutraData(){
let valor = document.getElementById("dataEscolhida").value
if(valor === ""){
alert("Selecione uma data")
return

}

let partes = valor.split("-")
let dia = parseInt(partes[2])
let mes = parseInt(partes[1])
let senha = (dia + 20) + "" + (mes + 11)
document.getElementById("senhaOutra").innerText = senha

}
function fazerLogin(){

    let user = document.getElementById("usuario").value
    let senha = document.getElementById("senhaLogin").value
    let erro = document.getElementById("erroLogin")

    let usuarios = [
        { user: "Loja", senha: "2026" },
        { user: "Admin", senha: "admin" },
        { user: "admin", senha: "admin" },
        { user: "Adryan", senha: "2026" }
    ]

    let acessoLiberado = false

    for(let i = 0; i < usuarios.length; i++){
        if(user === usuarios[i].user && senha === usuarios[i].senha){
            acessoLiberado = true
            break
        }
    }

    if(acessoLiberado){
        document.getElementById("loginTela").style.display = "none"
        document.getElementById("sistema").style.display = "flex"
    }else{
        erro.innerText = "Usuário ou senha incorretos"
    }

}