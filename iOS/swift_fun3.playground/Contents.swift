//: Playground - noun: a place where people can play

import UIKit

var arr: [Int] = [Int]()
for i in 1...255 {
    arr.append(i)
}
//Before shuffle
print(arr)


for j in 1...100 {
    var first = arr[Int(arc4random_uniform(254))]
    var second = arr[Int(arc4random_uniform(254))]
    var temp = arr[first]
    arr[first] = arr[second]
    arr[second] = temp
}

//After shuffle
print(arr)
var loc: Int = arr.index(of: 42)!
arr.remove(at:loc)
print("We found the answer to the Ultimate Question of Life, the Universe, and Everything at index \(loc)")
print(loc)
print(arr)