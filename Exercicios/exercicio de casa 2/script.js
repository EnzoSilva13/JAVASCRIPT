var img = document.getElementById('img')

function ligar(){
    
    if(img.src = 'desligada.jpg'){
        img.src = 'ligada.jpg'
    }
}
function desligar(){
    if(img.src = 'ligada.jpg'){
        img.src =  'desligada.jpg'
    }
}
function quebrar(){
    if(img.src = 'ligada.jpg' || img.src == 'desligada.jpg'){
        img.src = 'quebrada.jpg'
    }
}


