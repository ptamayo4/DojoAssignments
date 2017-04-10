//: Playground - noun: a place where people can play

import UIKit

class Animal {
    var name: String
    var health: Int = 100
    
    init(name: String){
        self.name = name
    }
    
    func displayHealth() {
        print(self.health)
    }
}

class Cat: Animal {
    override init(name: String){
        super.init(name: name)
    }
    func growl(){
        print("Rawr!")
        self.health = 150
    }
    func run(){
        if self.health > 0 {
            print("Running")
            self.health -= 10
        } else {
            print("Out of health")
        }
    }
}

class Cheetah: Cat {
    override init(name: String){
        super.init(name: name)
    }
    
    override func run(){
        print("Running Fast")
        self.health -= 50
    }
    
    func sleep(){
        print(self.health)
        if self.health < 200 {
            self.health += 50
            print("healed", self.health)
            if self.health > 200 {
                self.health = 200
            }
        }
    }

}

class Lion: Cat {
    override init(name: String){
        super.init(name: name)
        self.health = 200
    }
    override func growl(){
        print("ROAR!!!! I am the King of the Jungle")
    }
}

var hobbes = Cheetah(name: "Hobbes")
for i in 1...4{
    hobbes.run()
}
hobbes.displayHealth()

var liger = Lion(name: "Coward")
for i in 1...3{
    liger.run()
}
liger.growl()
liger.displayHealth()

