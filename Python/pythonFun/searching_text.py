import re

pride = open("pandp.txt")
text = pride.read()
text_list = re.sub("[^\w]", " ",  text).split() #Split document into list of words

def get_matching_words(regex):
    matches = []
    for word in text_list:
        if re.findall(regex,word):
            matches.append(word)
    return matches

print get_matching_words(r"wife") #Prints all occurences of 'wife'
print text_list.count("wife") #Counts occurences of 'wife'
print unicorn() #generates new list replaicing 'wife' with 'unicorn'
print get_matching_words(r"t") #prints all words containing 't'

def unicorn():
    for i in range(len(text_list)):
        if re.findall("wife",text_list[i]):
            text_list[i] = "unicorn"
    unicorn_list = " ".join(text_list)
    return unicorn_list


# print unicorn()
