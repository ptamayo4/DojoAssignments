from flask import Flask, render_template, request, flash, redirect, session
app = Flask(__name__)
app.secret_key="ThatsWeird"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
    if len(request.form['name']) < 1:
        flash("Name cannot be empty!")
        name_error = False
    else:
        name = request.form['name']
        name_error = True

    if len(request.form['comment']) > 120 or len(request.form['comment']) < 1:
        flash("Comment must be at least one character and less than 120")
        comment_error = False
    else:
        comment = request.form['comment']
        comment_error = True

    location = request.form['location']
    language = request.form['language']

    if name_error == False or comment_error == False:
        return redirect('/')
    else:
        return render_template('result.html', name=name, location=location, language=language, comment=comment)
app.run(debug=True)
