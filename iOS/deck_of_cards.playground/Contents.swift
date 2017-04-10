//: Playground - noun: a place where people can play

import UIKit

let suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
let cards_val = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let numeric_value = [1,2,3,4,5,6,7,8,9,10,11,12,13]

struct Card {
    var value: String
    var suit: String
    var numerical_value: Int
    
    
}
extension Card: Equatable {
    static func == (lhs: Card, rhs: Card) -> Bool {
        return
            lhs.value == rhs.value &&
            lhs.suit == rhs.suit &&
            lhs.numerical_value == rhs.numerical_value
    }
}


class Deck {
    var cards: [Card] = [Card]()
    
    init(){
        for suit in suits{
            for card in 0...12{
                self.cards.append(Card(value: cards_val[card], suit: suit, numerical_value: numeric_value[card]))
            }
        }
    }
    
    func deal() -> Card{
        return self.cards.remove(at: 0)
    }
    
    func reset(){
        self.cards = [Card]()
        for suit in suits{
            for card in 0...12{
                self.cards.append(Card(value: cards_val[card], suit: suit, numerical_value: numeric_value[card]))
            }
        }
    }

    func shuffle(){
        for i in 0...51 {
            var first = Int(arc4random_uniform(51))
            var second = Int(arc4random_uniform(51))
            var temp = self.cards[first]
            self.cards[first] = self.cards[second]
            self.cards[second] = temp
        }
    }
}
var deck: Deck = Deck()
//for card in deck.cards{
//    print(card)
//}
//deck.shuffle()


class Player {
    var name: String
    var hand: [Card] = [Card]()
    
    init(name: String){
        self.name = name
    }
    
    func draw(deck: Deck) -> Card {
        var new_card = deck.deal()
        self.hand.append(new_card)
        return new_card
    }
    
    func discard(card: Card) -> Bool {
        print(self.hand.contains(card))
        if let loc = self.hand.index(of: card){
            self.hand.remove(at: loc)
            return true
        } else {
            return false
        }
    }
}


var player: Player = Player(name: "Patrick")
player.draw(deck: deck)

print(player.hand)
//for card in deck.cards{
//    print(card)
//}
player.discard(card: player.hand[0])
print(player.hand)





