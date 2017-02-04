print "Scores and Grades"
count = 0
while count < 10:
    print "Score:"
    grade = input()
    count += 1
    if grade <= 100 and grade >= 90:
        print "Your grade is A"
    elif grade >= 80:
        print "Your grade is B"
    elif grade >= 70:
        print "Your grade is C"
    elif grade >= 60:
        print "Your grade is D"
    else:
        print "Your grade is F. For Fail. As in you are a failure."
print "End of the program. Bye!"
