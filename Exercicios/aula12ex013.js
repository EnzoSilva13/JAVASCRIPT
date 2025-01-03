var agora= new Date()
var diaSem= agora.getDay()

/* para o JAVASCRIPT:

0- DOMINGO
1-SEGUNDA
2-TERÇA
3-QUARTA
4-QUINTA
5-SEXTA
6-SABADO*/ 
console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda-feira')
        break   
    case 2:
        console.log('terça-feira')
        break
    case 3:
        console.log('quarta-feira') 
        break
    case 4:
        console.log('quinta-feira')
        break
    case 5:
        console.log('sexta-feira')
        break
    case 6:
        console.log('sabado')
        break
    default:
        console.log('dia invalido')
        break                        
}   
