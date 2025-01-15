function calcular(){
    var nome = document.getElementById('nome')
    var alturaum = document.getElementById('alt')
    var altura = Number(alturaum.value)
    
    var pesoum = document.getElementById('peso')
    var peso = Number(pesoum.value)

    var imc= peso / (altura*altura) 

    if(imc < 18,5){
        
    }
}