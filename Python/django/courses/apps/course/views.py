from django.shortcuts import render, redirect
from .models import Course

def index(request):
    context = {
    "courses" : Course.objects.all()
    }
    return render(request, 'index.html', context)

def process(request, methods=['POST']):
    print request.POST['name']
    Course.objects.create(name=request.POST['name'],description=request.POST['description'])
    return redirect('/')

def confirm(request, id):
    context = {
    "course" : Course.objects.get(id=id)
    }
    return render(request, 'confirmation.html', context)

def destroy(request, id):
    Course.objects.get(id=id).delete()
    return redirect('/')
