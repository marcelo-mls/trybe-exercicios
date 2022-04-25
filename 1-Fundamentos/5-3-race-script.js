window.onload = function () {
  
  let buttonStart = document.getElementById('start')
  let buttonReset = document.getElementById('reset')
  resetRace()
  buttonStart.addEventListener('click', startRace)
  buttonReset.addEventListener('click', resetRace)
}

let carGreen = document.getElementById('carGreen')
let carYellow = document.getElementById('carYellow')
let carRed = document.getElementById('carRed')

function resetRace() {

  carGreen.style.marginLeft = '5px'
  carYellow.style.marginLeft = '5px'
  carRed.style.marginLeft = '5px'
}

function startRace() {

  carGreen.style.marginLeft = ((parseInt(carGreen.style.marginLeft) + randomNum()) + 'px')
  carYellow.style.marginLeft = ((parseInt(carYellow.style.marginLeft) + randomNum()) + 'px')
  carRed.style.marginLeft = ((parseInt(carRed.style.marginLeft) + randomNum()) + 'px')

  if (parseInt(carGreen.style.marginLeft) > window.innerWidth) {
    window.alert('VERDE é o vencedor !!!')
    resetRace()
  }
  if (parseInt(carYellow.style.marginLeft) > window.innerWidth) {
    window.alert('AMARELO é o vencedor !!!')
    resetRace()
  }
  if (parseInt(carRed.style.marginLeft) > window.innerWidth) {
    window.alert('VERMELHO é o vencedor !!!')
    resetRace()
  }
}

function randomNum() {

  let num = Math.floor(Math.random() * 50)
  return num
}



