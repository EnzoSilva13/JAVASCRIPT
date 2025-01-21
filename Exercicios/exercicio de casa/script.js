function calcular(){
    var nome = document.getElementById('nome')
    var altura = document.getElementById('alt')
    var peso = document.getElementById('peso')
    var res = document.getElementById('res')

    if(altura.value.length == 0 || altura.value.length== 0){
        window.alert('erro')
    }else {
        let a = Number(altura.value)
        let p = Number(peso.value)
        let imc = p / (a*a)
        
        
        if( imc < 18.5){
            res.innerHTML = `seu é imc é ${imc}, portanto voce esta em Magreza (18,5) <strong>procure um medico</strong>` 
        } else if(imc < 25){
            res.innerHTML= `seu imc é ${imc}, portanto voce esta Normal(18,5 - 24,9)`

        } else if(imc < 30){
            res.innerHTML = `seu imc é ${imc}, portanto voce esta em Sobrepeso (25 - 29,9) <strong>Cuidado</strong>`
        
        } else if (imc < 40){
            res.innerHTML = `seu imc é ${imc}, portanto voce esta com Obesidade (30 - 39,9) <strong>Procure um medico</strong>`
        } else {
            res.innerHTML = `seu imc é ${imc}, portanto voce esta com OBESIDADE MORTAL <strong> PROCURE AGORA UM MEDICO OU IRA MORRER</strong>`
        }

     
    }    



}