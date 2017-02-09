#Find and Replace
str = "If monkeys like bananas, then I must be a monkey!"
count = str.count("monkey")
i = 0
next_pos = 0
while i < count:
    print str.find( "monkey", next_pos)
    next_pos = str.find("monkey", next_pos) + 6
    i += 1

print str.replace("monkey","alligator")

#Min Max
x = [2,54,-2,7,12,98]

print min(x)
print max(x)

#First and Last using same list as above
print x[0]
print x[len(x) - 1]
new_list = [x[0], x[len(x) - 1]]
print new_list

#New list- Removes negatives
y = [19,2,54,-2,7,12,98,32,10,-3,6]
y.sort()
print y

new_y = []
i = len(y) - 1
while i >= 0:
    if y[i] < 0:
        new_y.append(y[i])
        y.pop(i)
    i -= 1
new_y.sort()
y.insert(0, new_y)
print y
