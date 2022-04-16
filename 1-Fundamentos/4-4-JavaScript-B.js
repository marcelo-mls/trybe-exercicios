// Função que gera array de nums aleatórios

function arrayNums(quantosNums, numMax){
    let array = []
    for(i = 0; i < quantosNums; i=i+1){
        array.push( Math.floor(Math.random()*(numMax+1)))
    }
    return array
}
console.log(" Array de Números Aleatórios")
console.log(arrayNums(6, 100))

/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') 
Retorno esperado: true
verificaPalindrome('desenvolvimento') 
Retorno esperado: false */

function palindromo(word){
    let palavra = word
    let palavraInvertida = palavra.split("").reverse().join("")

    if (palavra.toLowerCase() == palavraInvertida.toLowerCase()){
        return "Sim! " + palavra + " é um palíndromo!"
    } else {
        return "Não! " + palavra + " não é um palíndromo!"
    }
}

console.log("")
console.log("1) Palíndromo")
console.log( palindromo("Hannah") )

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceMaior(array){  

    let maior = array[0]
    for(let n of array){
        if(n > maior){
            maior = n
        }
    }
    return "O array é: " + array + ". O maior número é " + maior + ". E o seu indice é: " + array.indexOf(maior)
}

console.log("")
console.log("2) Indice do Maior")
console.log(indiceMaior(arrayNums(6, 100)))

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let array = [6,4,3,5,7,2]

function indiceMaiorMenor(array, maiorMenor){
    
    let maior = array[0]
    let menor = array[0]
    for(let n of array){
        if(n > maior){
            maior = n
        }
        if (n < menor){
            menor = n
        }
    }
    if(maiorMenor == "maior"){
        return "O array é: " + array + ". O MAIOR número é " + maior + ". E o seu indice é: " + array.indexOf(maior)
    } else if (maiorMenor == "menor") {
        return "O array é: " + array + ". O MENOR número é " + menor + ". E o seu indice é: " + array.indexOf(menor)
    } else if (maiorMenor == "dois") {
        return "O array é: " + array + ". O MAIOR e o MENOR número são " + maior + " e " + menor + ". E o seus indices são: " + array.indexOf(maior) + " e " + array.indexOf(menor) + ", respectivamente."
    } else {
        return "Parametro invalido, informe: MAIOR, MENOR ou DOIS"
    }
}

console.log("")
console.log("3) Indice do Menor")
console.log(indiceMaiorMenor(arrayNums(6, 100), "dois") )


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function biggerName(names){
    let num = names[0].length
    let biggerName = ''
    for(let name of names){
        if(name.length > num){
            num = name.length
            biggerName = name
        }
    }
    return biggerName
}
console.log("")
console.log("4) Maior nome")
console.log(biggerName(['José', 'Marcelo', 'Laura', 'Lygia', 'Wania']))