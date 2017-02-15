from flask import Flask, render_template, redirect, request
from mysqlconnection import MySQLConnector
app = Flask(__name__)

mysql = MySQLConnector(app, 'friendsdb')

@app.route('/')
def index():
    friends = mysql.query_db("SELECT * FROM friends")
    return render_template('index.html', friends = friends)

@app.route('/friends', methods=['POST'])
def create():
    query = "INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES(:first_name, :last_name, :occupation, NOW(), NOW())"
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'occupation': request.form['occupation']
        }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/friends/<id>/edit', methods=['POST'])
def edit(id):
    friend_to_edit = mysql.query_db("SELECT * FROM friends WHERE id = {}".format(id))
    print friend_to_edit
    return render_template('edit.html', friend = friend_to_edit, id = id)

@app.route('/friends/<edit_id>', methods=['POST'])
def update(edit_id):
    query = "UPDATE friends SET first_name = :first_name, last_name = :last_name, occupation = :occupation WHERE id = :id"
    data = {
        'id' : edit_id,
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'occupation': request.form['occupation']
        }
    mysql.query_db(query, data)

    return redirect('/')

@app.route('/friends/<delete_id>/delete', methods=['POST'])
def destroy(delete_id):
    mysql.query_db("DELETE FROM friends WHERE id = {}".format(delete_id))
    return redirect('/')

app.run(debug=True)
