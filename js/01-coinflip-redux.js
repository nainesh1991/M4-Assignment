let coinFlip
let num = parseInt(prompt('Please Enter number that amopunt of times loop executes'))


for (let i = 0; i < num; i++) {
    coinFlip = Math.round(Math.random())
    console.log(coinFlip)
    if(coinFlip === 0){
        console.log(`Coin Flip Value ${coinFlip} Heads `)
    }
    else {
        console.log(`Coin Flip Value ${coinFlip} Tails`)
    }
}


