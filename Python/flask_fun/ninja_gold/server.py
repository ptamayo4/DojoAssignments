from flask import Flask, render_template, session, request, redirect
import random;
from datetime import datetime

app = Flask(__name__)
app.secret_key="Fart"

@app.route('/')
def index():
    if not 'gold' in session:
        session['gold'] = 0
    if not 'event' in session:
        session['event'] = []
    return render_template('index.html')

@app.route('/process_money', methods=['post'])
def mo_money():
    if request.form['place'] == "farm":
        gold_won = random.randint(10, 20)
        session['gold'] += gold_won
        session['event'].append("Earned " + str(gold_won) + " gold at the Farm! (" + datetime.now().strftime("%x %X") + ")")

    elif request.form['place'] == "cave":
        gold_won = random.randint(5, 10)
        session['gold'] += gold_won
        session['event'].append("Earned " + str(gold_won) + " gold at the Cave! (" + datetime.now().strftime("%x %X") + ")")

    elif request.form['place'] == "house":
        gold_won = random.randint(2, 5)
        session['gold'] += gold_won
        session['event'].append("Earned " + str(gold_won) + " gold at the House! (" + datetime.now().strftime("%x %X") + ")")

    else:
        coin_toss = random.randint(1,2)
        if coin_toss == 1:
            gold_won = random.randint(0, 50)
            session['gold'] += gold_won
            session['event'].append("Earned " + str(gold_won) + " gold at the Casino! (" + datetime.now().strftime("%x %X") + ")")
        else:
            gold_won = random.randint(0, 50)
            session['gold'] -= gold_won
            session['event'].append("Lost " + str(gold_won) + " gold at the Casino! (" + datetime.now().strftime("%x %X") + ")")
    return redirect('/')


app.run(debug=True)
