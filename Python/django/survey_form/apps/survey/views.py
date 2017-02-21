from django.shortcuts import render, redirect, HttpResponse

def index(request):
    return render(request, 'survey/index.html')

def process(request, methods=["POST"]):
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comment'] = request.POST['comment']
    if not 'count' in request.session:
        request.session['count'] = 1
    else:
        request.session['count'] += 1
    return redirect('/result')

def result(request):
    return render(request, 'survey/results.html')
