from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'SomeSecretString'

@app.route('/')
def index():
    try:
        session['current_count'] += 1
    except:
        session['current_count'] = 1
    return render_template('index.html')

@app.route('/two', methods=['POST'])
def plus_two():
    session['current_count'] += 1
    return redirect('/')

@app.route('/clear', methods=['POST'])
def clear_hax():
    session['current_count'] = 0
    return redirect('/')
app.run(debug=True)
