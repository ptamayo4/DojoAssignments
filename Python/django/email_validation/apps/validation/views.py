from django.shortcuts import render, redirect
from .models import Email_Addresses
from django.contrib import messages

def index(request):
    return render(request, 'index.html')

def process(request, methods=['POST']):
    email_confirmed = Email_Addresses.emailManager.add_email(request.POST['email'])
    if 'theuser' in email_confirmed:
        context = {
            "emails":Email_Addresses.emailManager.all(),
            "newest":email_confirmed['theuser'].email
        }
        return render(request, 'success.html', context)
    if 'errors' in email_confirmed:
        messages.error(request, email_confirmed['errors'][0])
        return redirect('/')
