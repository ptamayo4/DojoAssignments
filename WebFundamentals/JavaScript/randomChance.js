var coinCount = 50;
function slot(coinsPlayed){
    if(coinsPlayed === 0){
        console.log("You forgot to put in a coin!");
        return 0;
    }
    for(var i = coinsPlayed; i > 0; i--){
        var coinPrize = Math.floor(Math.random() * 51) + 50
        var winningNum = Math.floor(Math.random() * 100) + 1;
        var userNum = Math.floor(Math.random() * 100) + 1;
        console.log(i + " coins left");

        coinsPlayed--;
        if(winningNum === userNum){
            console.log("You won " + coinPrize + " coins!!!");
            return coinsPlayed + coinPrize;
        }
    }
    console.log("Better luck next time!");
    return 0;
}

coinCount += slot(10);
