from django.shortcuts import render, redirect
from models import User
from django.contrib import messages
import bcrypt

def index(request):
    return render(request, 'index.html')

def register(request):
    user = User.userManager.add_user(request.POST)
    if 'errors' in user:
        for error in user['errors']:
            messages.error(request, error)
        return redirect('/')
    else:
        request.session['id'] = user['theuser'].id
        request.session['first_name'] = user['theuser'].first_name
        context = {
        "method": "logged in"
        }
        return render(request, 'success.html', context)

def login(request):
    user = User.userManager.login(request.POST)
    if 'theuser' in user:
        request.session['id'] = user['theuser'].id
        request.session['first_name'] = user['theuser'].first_name
        context = {
        "method": "logged in"
        }
        return render(request, 'success.html', context)
    if 'errors' in user:
        for error in user['errors']:
            messages.error(request, error)
        return redirect('/')
