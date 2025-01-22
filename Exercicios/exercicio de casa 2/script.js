var foto = document.getElementById('foto')
var img = document.createElement('img')
img.src = 'desligada.jpg'
foto.appendChild(img)

function ligar(){
    
    var img = document.createElement('img')
    img.src = 'ligada.jpg'
    foto.appendChild(img)
}    

