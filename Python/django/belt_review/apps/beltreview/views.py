from django.shortcuts import render, redirect
from models import User, Book, Author, Review
from django.contrib import messages

def index(request):
    # auth_books =  Author.objects.get(name="Cormac McCarthy").books.all()
    context = {
    "books": Book.objects.all(),
    "users": User.userManager.all(),
    "authors": Author.objects.all()
    }
    User.userManager.create(email='usertwo@usertwo.com',password='12345678',first_name='usertwo',last_name='lastname')
    user = User.userManager.get(email='usertwo@usertwo.com')
    Order.orderManager.create(user=user,s_fname='twouser',s_lname='thelastname',total=30000,status=1)

    User.userManager.create(email='userthree@userthree.com',password='12345678',first_name='userthree',last_name='tlastname')
    user = User.userManager.get(email='userthree@userthree.com')
    Order.orderManager.create(user=user,s_fname='threeuser',s_lname='thelastname',total=30000,status=1)
    return render(request, 'index.html', context)

def register(request):
    if request.method == "POST":
        user = User.userManager.add_user(request.POST)
        if 'errors' in user:
            for error in user['errors']:
                messages.error(request,  error)
            return redirect('/')
        else:
            request.session['id'] = user['theuser'].id
            request.session['alias'] = user['theuser'].alias
            return redirect('/books')
    return redirect('/')

def login(request):
    if request.method == "POST":
        user = User.userManager.login(request.POST)
        if 'errors' in user:
            for error in user['errors']:
                messages.error(request, error)
            return redirect('/')
        else:
            request.session['id'] = user['theuser'].id
            request.session['alias'] = user['theuser'].alias
            return redirect('/books')


def books(request):
    return render(request, 'main.html')

def booksadd(request):
    context = {
    "books":Book.objects.all()
    }
    return render(request, 'addbooks.html', context)

def bookview(request, book_id, methods=['POST']):
    return render(request, 'bookview.html')

def process(request):
    if request.method == 'POST':
        review = Review.reviewManager.genReview(request.POST)
        if 'errors' in review:
            for error in review['errors']:
                messages.error(request, error)
            return redirect('/books/add')
        else:
            messages.success(request, "Successfully added review!")
            context = {
            "books": Book.objects.all()
            }
            book_id =  review['thereview'].id
            print book_id
            return redirect('/books/'+str(book_id))

def logout(request):
    if request.method == 'POST':
        if 'auth' in request.session:
            del request.session['id']
            del request.session['alias']
            return redirect('/')
        return redirect('/')
