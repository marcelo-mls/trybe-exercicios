// Define os números que o usuário vai jogar
let jogo = [4, 8, 15 ,16, 23, 42]
// Declara as demais variáveis necessárias
let sorteio = []
let acertos = 0

//  Gera os números que serão sorteados na loteria
for(i = 0; i < 6; i=i+1) {
    sorteio.push( Math.ceil( Math.random()*60 ) )  
}

// Compara o jogo com o sorteio
for(numJogo of jogo) {
    for(numSorteio of sorteio) {
        if(numJogo == numSorteio){
            acertos = acertos + 1
        }
    }
}

// Imprime resultado na tela
console.log("Números do Jogador: ");
console.log(jogo);
console.log("Números Sorteados:");
console.log(sorteio);
console.log("Total de Acertos: " + acertos);
if(acertos == 6){
    console.log("Parabéns você conseguiu acertar os 6 números!");
}