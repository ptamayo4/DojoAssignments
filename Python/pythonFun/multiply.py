a = [2,4,10,16]
def multiplyBy(a,multi):
    i = 0
    for element in a:
        a[i] = element * multi
        i+=1
    return a
b = multiplyBy(a, 5)
print b
