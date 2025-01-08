function carregar(){
    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data = new Date()
    var hora= data.getHours()
    

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=5 && hora< 12)/*bom dia*/{
        img.src = 'imagens/manha.png'
        document.body.style.background = '#fef4d1'        
    }else if(hora >=12 && hora < 17)/*boa tarde*/{
        img.src = 'imagens/meiodia.png'
        document.body.style.background = '#89a4c6'
    }else if(hora >=17 && hora < 18)/*Boa tarde-tardecer*/{
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#c25616'
    }else
        img.src = 'imagens/noite.png'
        document.body.style.background = '#011842'

}