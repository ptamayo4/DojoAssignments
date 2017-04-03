//: Playground - noun: a place where people can play

import UIKit

func tossCoin() -> String{
    print("Tossing Coin")
    let result = arc4random_uniform(2)
    if result == 1 {
        print("Heads")
        return "Heads"
    } else {
        print("Tails")
        return "Tails"
    }
}

//for i in 1...100{
//    tossCoin()
//}

func tossMultipleCoins(num: Int) -> Double {
    var h_count: Int = 0
    var t_count: Int = 0
    for i in 1...num{
        print("Tossing Coin")
        let result = arc4random_uniform(2)
        if result == 1 {
            print("Heads")
            h_count += 1
        } else {
            print("Tails")
            t_count += 1
        }
    }
    return Double(h_count) / Double(num)
}

print(tossMultipleCoins(num: 100))