// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Crie um algoritmo que retorne o fatorial de 10.
let fat = 1
for(let i = 10; i >= 1; i=i-1 ){
    fat = fat * i
}
console.log("1) Fatorial de 10!")
console.log(fat)

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let palavra = "Marcelo"
let palavraInvertida = ""
for (i = palavra.length-1; i >= 0; i = i-1){
    palavraInvertida = palavraInvertida + palavra[i]
}
console.log("")
console.log("2) Inversor de Palavras")
console.log(palavraInvertida)

/* 3 - Considere o array de strings abaixo:
Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */

let array = ['java', 'javascript', 'python', 'html', 'css']
let menor = [array[0].length]
let maior = [array[0].length]

for(palavra = 1; palavra < array.length; palavra=palavra+1){
    if(maior < array[palavra].length){
        maior = array[palavra]
    }
    if(menor > array[palavra].length){
        menor = array[palavra]
    }
}
console.log("")
console.log("3) Maior e Menor palavra do Array")
console.log("Maior: " + maior)
console.log("Menor: " + menor)

/* 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50. */
let primos = []
for(num=1; num <= 50; num=num+1){
    let contador = 0
    for(i = 1; i <= num; i = i +1){
        if(num % i == 0){
            contador = contador + 1
        }
    }
    if(contador == 2){
        primos.push(num)
    }
}
console.log("")
console.log("4) Maior e Menor número primo de 50")
console.log(primos)
console.log("Maior: " + primos[0])
console.log("Menor: " + primos[primos.length-1])