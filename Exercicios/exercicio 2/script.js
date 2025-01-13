function carregar(){
var msg= window.document.getElementById('msg')
var foto= window.document.getElementById('foto')

var data = new Date()
var ano = window.document.getElementById('txt')
var ano = Number(ano.value)


msg.innerHTML= `sua idade é ${ano} anos`
}
