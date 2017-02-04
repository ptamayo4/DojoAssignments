import random
head_count = 0
tail_count = 0
for count in range(1, 5001):
    random_num = random.random()
    random_round = round(random_num)
    toss_val = ""
    if random_round == 1:
        head_count+=1
        toss_val = "head"
    else:
        tail_count+=1
        toss_val = "tail"
    print "Attempt " + str(count) + ": Throwing a coin... it's a " + toss_val + "! Got " + str(head_count) + " heads so far and " + str(tail_count) + " tails so far"
print "Ending the program, thank you!"
