function calcular(){
    var num1= document.getElementById('num1')
        var n1= Number(num1.value)
    var num2= document.getElementById('num2')
        var n2= Number(num2.value)
    var num3= document.getElementById('num3')
        var n3= Number(num3.value)
    var num4= document.getElementById('num4')
        var n4= Number(num4.value)
    var res = document.getElementById('res')
  
  if(n1 <= 0 || n2 <= 0 || n3 <= 0 | n4 <= 0){
        alert('erro')
  }else {
    let c = (n1+n2+n3+n4)/4
    if(c >= 7){
        res.innerHTML= `Parabens sua media é ${c} , voce passou!`
    } else {
        res.innerHTML= `sua media é ${c}, reprovado!`
    }
    }

    
  
}
