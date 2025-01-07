function carregar(){
    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data = new Date()
    //var hora= data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=5 && hora< 12)/*bom dia*/{
        img.scr = 'imagens/manha.png'        
    }else if(hora >=12 && hora < 17)/*boa tarde*/{
        img.scr = 'imagens/meiodia.png'
    }else if(hora >=17 && hora < 18)/*Boa tarde-tardecer*/{
        img.scr = 'imagens/tarde.png'
    }else
        img.scr = 'imagens/noite.png'

}