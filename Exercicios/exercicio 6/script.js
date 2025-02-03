let num= document.getElementById('txtn1')
let tab= document.querySelector('select#tab')
let res= document.querySelector('div#res')
let valores = []

function essenumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else {
        return false
    }

}
function inTab(n, t) {
    if (t.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }

}

function adicionar(){
    if(essenumero(num.value) && !inTab(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `o valor ${num.value} foi adicionado.`
        tab.appendChild(item)

    }else {
        alert('valor nao encontrado ou ja na lista')
    }
    num.value =''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        alert('adicione um valor para começar.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }    
            
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p> ao todo temos ${tot} numeros cadastrados`
        res.innerHTML += `<p> o maior valor informado foi ${maior}`
        res.innerHTML += `<p> o menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> a soma de todos os valores é ${soma}`
        res.innerHTML += `<p> a media dos valores é ${media}`
    }
}