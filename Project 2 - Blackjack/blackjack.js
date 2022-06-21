// Noted - Ace Card = 11 for simplicity of project

// Skills I used during the project: Arrays, Objects, Booleans, if else statements, comparison operators & logical operators, for loops, Math object, return statements

let player = {
    name:'Joseph',
    chips: 150
}

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false

let message = ''
let messageEl = document.querySelector('#message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
let playerEl = document.querySelector('#player-el')

playerEl.textContent = player.name +': £' + player.chips

console.log(cards)

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else{
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard,secondCard)
    sum = cards[0] + cards[1]
    
    renderGame()
    
}

function renderGame(){
    cardsEl.textContent = 'Cards: '
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' '
    }
    sumEl.textContent = 'Sum: ' + sum
    console.log(sum)  
    
    if (sum <= 20){
        message = '"Are you going to draw another card?"'
    } 
    
    else if (sum === 21){
        message = '"You have got Blackjack! - You Win!"'
        hasBlackjack = true
    }
    
    else{
        message = '"You have drawn over 21 -  You Lose!"'
        isAlive = false
    }
     
    messageEl.textContent = message
    console.log(message)
}


function newCard() {
    if (isAlive === true && hasBlackjack === false){
        console.log('Draw a new Card')
    
    let newCard = getRandomCard()
    sum += newCard

    cards.push(newCard)
    console.log(cards)

    renderGame()
    }
}