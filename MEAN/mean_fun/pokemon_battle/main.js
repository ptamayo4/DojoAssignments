var game = {
    players: [],
    addPlayer: function(){}
}
function playerConstructor(name){
    player = {};
    player.name = name;
    player.hand = [];
    player.addCard = function(card){
        player.hand.push(card);
    };
    return player;
}
game.players.push(playerConstructor("Patrick"));
console.log(game);
