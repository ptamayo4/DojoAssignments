class Bike(object):
    def __init__(self, price=0, max_speed = 0):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    def displayInfo(self):
        print "Price: $" + str(self.price)
        print "Max Speed: " + str(self.max_speed) + "mph"
        print "Total miles: " + str(self.miles)
    def ride(self):
        print "Riding"
        self.miles += 10
        return self
    def reverse(self):
        print "Reversing"
        self.miles -= 5
        return self

bike1 = Bike(400,20)
bike2 = Bike(300,30)
bike3 = Bike(200,25)

bike1.ride().ride().ride().displayInfo()


bike2.ride().ride().reverse().reverse().displayInfo()

bike3.reverse().reverse().reverse().displayInfo()
