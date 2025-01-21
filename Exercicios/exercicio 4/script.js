function confirmar(){

    let min = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(min.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('erro')
    } else {
        res.innerHTML= 'contando: '
        let i = Number(min.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
    }

       
            for(c = i; c <= f; c += p){
            res.innerHTML += `${c}  \u{1F449} `
        }
         res.innerHTML += `\u{1F3C1}`
        }
       
            


