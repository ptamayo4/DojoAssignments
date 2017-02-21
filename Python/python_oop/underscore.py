

class Underscore(object):
    def map(self, vals, callback):
        for idx, val in enumerate(vals):
            vals[idx] = callback(val)
        return vals

    def reduce(self, vals, callback):
        product = vals[1]
        for val in vals:
            product *= val



    # def find(self):
    #     # your code here

    def filter(self, vals, callback):
        for val in vals:
            if not callback(val):
                vals.remove(val)
        return vals

    # def reject(self):
    #     # your code
# you just created a library with 5 methods!
# let's create an instance of our class
_ = Underscore() # yes we are setting our instance to a variable that is an underscore
evens = _.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)
squared = _.map([2,3,4,5,6], lambda x: x ** 2)
products = _.reduce([1, 2, 3, 4], lambda x, y: x * y)
print evens
