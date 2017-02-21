from django.shortcuts import render, HttpResponse, redirect
import random
from datetime import datetime

def index(request):
    if not 'gold' in request.session:
        request.session['gold'] = 0
    if not 'event' in request.session:
        request.session['event'] = []
    return render(request, 'ninjagold/index.html')

def process(request, methods=['POST']):
    if request.POST['building'] == "farm":
        gold_won = random.randint(10, 20)
        request.session['gold'] += gold_won
        request.session['event'].append("Earned " + str(gold_won) + " gold at the Farm! (" + datetime.now().strftime("%x %X") + ")")
    elif request.POST['building'] == "cave":
        gold_won = random.randint(5, 10)
        request.session['gold'] += gold_won
        request.session['event'].append("Earned " + str(gold_won) + " gold at the Cave! (" + datetime.now().strftime("%x %X") + ")")
    elif request.POST['building'] == "house":
        gold_won = random.randint(2, 5)
        request.session['gold'] += gold_won
        request.session['event'].append("Earned " + str(gold_won) + " gold at the House! (" + datetime.now().strftime("%x %X") + ")")
    else:
        coin_toss = random.randint(1,2)
        if coin_toss == 1:
            gold_won = random.randint(0, 50)
            request.session['gold'] += gold_won
            request.session['event'].append("Earned " + str(gold_won) + " gold at the Casino! (" + datetime.now().strftime("%x %X") + ")")
        else:
            gold_won = random.randint(0, 50)
            request.session['gold'] -= gold_won
            request.session['event'].append("Lost " + str(gold_won) + " gold at the Casino! (" + datetime.now().strftime("%x %X") + ")")

    return render(request, 'ninjagold/index.html')
