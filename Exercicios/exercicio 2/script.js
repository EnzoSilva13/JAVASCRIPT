function verificar(){
    var data = new Date()
    var anoatual = data.getFullYear()
    var anonas = document.getElementById('txtano')
    var anonas = Number(anonas.value)
    var msg = document.querySelector('msg')
    

    if(anonas.value.length == 0 || Number(anonas.value) > anoatual){
        window.alert('[ERRO] verifique seus dados e tente novamente')
    } else if {
        
        idade = anoatual - anonas
        msg.innerHTML=`sua idade é ${idade}` 

    }
}
