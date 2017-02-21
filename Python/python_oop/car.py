class Car(object):
    def __init__(self, price = 0, speed = 0, fuel = "Full", mileage = 0):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if self.price > 10000:
            self.tax = .15
        else:
            self.tax = .12

        print self.display_all()
    def display_all(self):
        return "Price: $" + str(self.price) + "\nSpeed: " + str(self.speed) + " MPH\nFuel: " + str(self.fuel) + "\nMileage: " + str(self.mileage) + "\nTax: " + str(self.tax) + "\n"

toyota = Car(10001, 130, "meh", 100)
kia = Car(4000, 100, "Half Full", 20)
sedan = Car(2000, 120, "Half Empty", 60)
truck = Car(8000, 110, "Empty", 314)
lambo = Car(100000, 200, "Full", 42)
audi = Car(50000, 160, "Meh", 3000)
