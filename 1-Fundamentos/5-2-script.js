// Capturando elemento que vou manipular
let theDiv = document.getElementById('principal')

// Criando novo elemento no HTML
let primDiv = document.createElement('div')
// atribuindo uma classe para este novo elemento
primDiv.className = 'circulo rosa pequeno'
primDiv.innerText = 'I'

// adicionando o elemento dentro do pai, que vamos manipular
theDiv.appendChild(primDiv)

// Repetindo os passos
let segDiv = document.createElement('div')
segDiv.className = 'quadrado amarelo medio'
segDiv.innerText = 'I'
theDiv.appendChild(segDiv)

let terDiv = document.createElement('div')
terDiv.className = 'circulo verde grande'
terDiv.innerText = 'I'
theDiv.appendChild(terDiv)

/*REFATORANDO
Criando função para criar as novasDivs
 */

function criarDivs(classes, texto) {
  let novaDiv = document.createElement('div')
  novaDiv.className = classes
  novaDiv.innerText = texto

  return novaDiv
}

theDiv.appendChild(criarDivs('quadrado rosa pequeno', 'II'))
theDiv.appendChild(criarDivs('circulo amarelo medio', 'II'))

/*REFATORANDO
Criando outra função para simplificar
 */

function addElementos(pai, classe, text) {
  pai.appendChild(criarDivs(classe, text))
}

addElementos(theDiv, 'quadrado verde grande', "III")
addElementos(theDiv, 'circulo rosa medio', "III")

/*REFATORANDO
Criando array de classes
 */

let listaDeClasses = ['quadrado amarelo grande', 'circulo verde pequeno']

for (i of listaDeClasses) {
  addElementos(theDiv, i, "IV")
}



