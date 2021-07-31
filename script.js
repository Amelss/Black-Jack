let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
//let player = {
    //yourName:'Ameley',
    //yourChips:'183'

//}
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')
//playerEl.textContent = player.yourName + ': £' + player.yourChips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 11)  +1
if (randomNumber > 10){
    return 10
} else if (randomNumber === 1){
    return 11
} else {
    return randomNumber
}

}

function startGame() {
let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard, secondCard]
sum = firstCard + secondCard 
isAlive = true
  renderGame()  
}


function renderGame() {

  cardsEl.textContent = 'Cards:' + ' ' + cards + ' '

if (sum <= 20 ){
    message = 'Do you want to draw a new card?'
} else if (sum === 21){
    message = 'Woohoo! You\'ve won Blackjack!'
    hasBlackJack = true
} else {
    message = 'You\'re out of the game'
    isAlive = false
}

messageEl.textContent = message;
sumEl.textContent = 'Sum:' + ' ' + sum;


}

function newCard() {

    let drawCard = getRandomCard()
if (isAlive === true && hasBlackJack === false){
    sum += drawCard
    cards.push(drawCard)
}
    for (let i =0; i < cards.length; i++){
  cardsEl.textContent += cards[i] + ' '
}

    renderGame()
}

function resetGame() {
    
    startGame()

}