from django.shortcuts import render, redirect
from .models import Email_Addresses

def index(request):
    context = {
    "emails" : Email_Addresses.emailManager.all()
    }
    return render(request, 'index.html', context)

def process(request, methods=['POST']):
    print request.POST['email']
    Email_Addresses.emailManager.add_email(request.POST['email'])
    return redirect('/')
