class MathDojo(object):
    def __init__(self):
        self.result = 0
    def add(self, num1, *additional_nums):
        if type(num1) == list:
            for num in num1:
                self.result += num
        elif type(num1) == tuple:
            for num in num1:
                self.result += int(num)
        else:
            self.result += num1

        for num in additional_nums:
            if type(num) == list:
                for n in num:
                    self.result += n
            elif type(num) == tuple:
                for n in num:
                    self.result += int(n)
            else:
                self.result += num
        return self
    def subtract(self, num1, *additional_nums):
        self.total_subtract = 0
        if type(num1) == list:
            for num in num1:
                self.total_subtract += num
        elif type(num1) == tuple:
            for num in num1:
                self.total_subtract += int(num)
        else:
            self.total_subtract += num1

        for num in additional_nums:
            if type(num) == list:
                for n in num:
                    self.total_subtract += n
            elif type(num) == tuple:
                for n in num:
                    self.total_subtract += int(n)
            else:
                self.total_subtract += num

        self.result -= self.total_subtract
        return self
md = MathDojo().add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result
print md
