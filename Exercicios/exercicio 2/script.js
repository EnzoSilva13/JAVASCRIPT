function carregar(){
var msg= window.document.getElementById('msg')
var foto= window.document.getElementById('foto')

var anostrg = window.document.getElementById('txt')
var ano = Number(anostrg.value)
var anoatual = 2025
var idade = anoatual - ano

if(idade >= 0 && idade <= 12){
    msg.innerHTML = 'criança'
}
}
