from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ninjas/')
def ninjas():
    return render_template('ninjapage.html')

@app.route('/ninjas/<color>')
def pic_viewer(color):
    if color == "blue":
        pic_id = "leonardo"
    elif color == "orange":
        pic_id = "michelangelo"
    elif color == "red":
        pic_id = "raphael"
    elif color == "purple":
        pic_id = "donatello"
    else:
        return render_template('ninjapage.html', pic_id = "notapril")
    return render_template('ninjapage.html', pic_id = pic_id )

app.run(debug=True)
