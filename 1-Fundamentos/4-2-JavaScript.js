// Gerar lista com 10 numeros aleatórios
sorteio = []
for (let i = 0; i < 10; i=i+1) {
    sorteio.push(Math.floor(Math.random()*101))
}
console.log("|------ NÚMEROS SORTEADOS -----|")
console.log(sorteio)

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log("")
console.log("1) todos os números")
for(let num of sorteio) {
    console.log(num)
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
soma = 0
for(let num of sorteio){
    soma = soma + num
}
console.log("")
console.log("2) soma")
console.log(soma)

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
avg = soma / sorteio.length
console.log("")
console.log("3) média")
console.log(avg)