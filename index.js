// creating the function for rolling the dice

function RollDice(){
    const numofDice = document.getElementById("numofDice").value
    const diceresult = document.getElementById("diceresult")
    const diceimage = document.getElementById("diceimage")
    const values = []
    const images = []

    for(let i=0;i<numofDice;i++){
        const value = Math.floor(Math.random()*6)+1 // this will give us the number from 1 to 6 after every roll
        values.push(value)
        images.push(`<img src="dice_images/${value}.png">`)
    }

    diceresult.textContent = `Dice: ${values.join(', ')}`
    diceimage.innerHTML = images.join('')
}  