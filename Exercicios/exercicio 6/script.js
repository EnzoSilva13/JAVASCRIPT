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
    if (t.indexof(Number(num)) != -1){
        return true
    }else {
        return false
    }

}

function adicionar(){
    if(essenumero(num.value) && inTab(num.value, valores)){
        alert('tudo ok')

    }else {
        alert('valor nao encontrado ou ja na lista')
    }
}