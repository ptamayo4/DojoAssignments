class Animal(object):
    def __init__(self, name = "Name"):
        self.name = name
        self.health = 100
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def displayHealth(self):
        print self.name
        print self.health

animal = Animal("Pikachu")
animal.walk().walk().walk().run().run().displayHealth()

class Dog(Animal):
    def __init__(self, name = "name"):
        self.name = name
        self.health = 150
    def pet(self):
        self.health += 5
        return self

rover = Dog("Rover")
rover.walk().walk().walk().run().run().pet().displayHealth()

class Dragon(Animal):
    def __init__(self, name = "name"):
        self.health = 170
        self.name = name
    def fly(self):
        self.health -= 10
        return self

dragon = Dragon("Paarthurnax")
dragon.walk().walk().walk().run().run().fly().fly().displayHealth()
