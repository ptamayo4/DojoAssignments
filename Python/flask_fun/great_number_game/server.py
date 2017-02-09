from flask import Flask, render_template, session, request, redirect
import random
app = Flask(__name__)
app.secret_key = "SECRETSHHHH"

@app.route('/')
def index():
    if not session.has_key('current_state'):
        session['current_state'] = ""
    if not session.has_key('random'):
        session['random'] = random.randint(1, 100)
    return render_template('index.html')

@app.route('/guess', methods=['post'])
def guess():
    if int(request.form['user_guess']) > 100 or int(request.form['user_guess']) < 1:
        print "Out of Range"
        return redirect('/')
    if int(request.form['user_guess']) > int(session['random']):
        session['current_state'] = 1
    elif int(request.form['user_guess']) < int(session['random']):
        session['current_state'] = -1
        print "Too Low"
    else:
        session['current_state'] = 0
        print "Correct"
    return redirect('/')

@app.route('/reset', methods=['post'])
def reset():
    session['current_state'] = ""
    session['random'] = random.randint(1, 100)
    return redirect('/')
app.run(debug=True)
