function verificar(){
   var data= new Date()
   var ano= data.getFullYear()
   var fano= document.getElementById('txtano')
    
   if(fano.value.length == 0 || Number(fano.value)> ano) {
    window.alert('[ERRO] reveja suas informaçoes.')  
   }
   else { 
    var sexo = document.getElementsByNamed('radsex')
    var idade=  ano - Number(fano.value)
    res.innerHTML = `idade é ${idade}`
    
    
}}
