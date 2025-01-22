function tabuada() {
    let num = document.getElementById('txtm')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        
        window.alert('reveja o numero e tente novamente')
    }else {
       let n = Number(num.value)
       let c = 1
       tab.innerHTML= " "
       while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
       }
    }
}