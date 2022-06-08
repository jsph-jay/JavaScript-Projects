// document.getElementById("count-el").innerText=5

// This is connecting the JS to the HTML - saving count-el in the HTML and then adding it to a string for the Previous Entries 
let saveEL = document.getElementById('save-el')
console.log(saveEL)
// This is connecting the JS to the HTML - changing count-el in the HTML to reflect the new count 
let countEL = document.getElementById("count-el")


// This is storing the count as 0
let count = 0

function increase() {
    // This is saying that 'Whenever the button with the id of 'increment' is clicked then run this function'
    // console.log('Clicked')
    count += 1
    // This is saying 'Replace the inner Text of id = count-el with the variable count'
    countEL.textContent = count
    // console.log(count)
}

function decrease() {
    // This is saying that 'Whenever the button with the id of 'increment' is clicked then run this function'
    // console.log('Clicked')
    count -= 1
    // This is saying 'Replace the inner Text of id = count-el with the variable count'
    countEL.textContent = count
    // console.log(count)
}

function save(){
    let countStr = count + ' - '
    saveEL.textContent += countStr
    // console.log('Clicked')
    // console.log(count)
    count = 0
    countEL.textContent = 0
}

