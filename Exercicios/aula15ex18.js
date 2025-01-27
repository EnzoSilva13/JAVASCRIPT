var num = [5, 7, 0, 1, 3, 9]
num.push(8)
num.sort()
num.push(1)

for(let c = 0; c < num.length; c++ ) {
    console.log(`a posição ${c} tem o valor de ${num[c]}`)
}    