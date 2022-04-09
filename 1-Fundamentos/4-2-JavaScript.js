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

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
console.log("")
console.log("4) Média em relação a vinte")
if(avg > 20){
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
max = sorteio[0]
for (let i = 1; i < sorteio.length; i = i+1){
    if (sorteio[i] >= max){
        max = sorteio[i]
    }
}
console.log("")
console.log("5) maior número")
console.log(max)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
contador = 0
for(let num of sorteio){
    if(num % 2 > 0){
        contador = contador + 1
    }
}
console.log("")
console.log("6) total de números impares")
if(contador == 0){      
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log(contador)
}
// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
min = sorteio[0]
for(let i = 1; i < sorteio.length; i = i+1){
    if(sorteio[i] < min){
        min = sorteio[i]
    }
}
console.log("")
console.log("7) menor número")
console.log(min)

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
numbers = []
for(let i = 1; i <= 25; i = i+1){
    numbers.push(i)
}
console.log("")
console.log("8) array até 25")
console.log(numbers)

