import re
def get_matching_words(regex):
    words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
    matches = []
    for word in words:
        if re.search(regex,word):
            matches.append(word)
    return matches

print get_matching_words(r"v") #Prints everthing that contains a 'v'
print get_matching_words(r"ss")#Prints everthing that contains a 'ss'
print get_matching_words(r"e$") #Prints everything with an 'e'
print get_matching_words(r"b.b")#Prints words that contain 'b', any character, and then 'b'
print get_matching_words(r"b.+b")#Prints words that contain b, at least on char, and then 'b'
print get_matching_words(r"b.*b")#Prints words that contain any 2 'b's
print get_matching_words(r"a[^aeiou]*e[^aeiou]*i[^aeiou]*o[^aeiou]*u[^aeiou]*")#Prints words that contain all vowels in alphabetical order
