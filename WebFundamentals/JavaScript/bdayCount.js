function bdayCountDown(days){
    for(var i = days; i >= 0; i--){
        if(i === 0){
            console.log("HAPPY FREAKING BIRTHDAY!!!!!!!!!!!!");
        } else if(i < 5){
            console.log("ONLY " + i + " DAYS LEFT! AWWW YEAAAHHH!");
        } else if(i < 30){
            console.log(i + " days until my birthday. It's getting closer!!!");
        } else if(i >= 30){
            console.log(i + " days until my birthday. Such a long time.");
        }
    }
}
bdayCountDown(60);
    
