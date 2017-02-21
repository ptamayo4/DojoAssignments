from django.shortcuts import render, HttpResponse

def index(request):
    return render(request, 'index.html')

def turtles(request):
    return render(request, 'ninjas.html')

def ninjacolor(request, color):

    context = {
        'pic': "",
    }
    if color == "blue":
        context['pic'] = "leonardo.jpg"
    elif color == "orange":
        context['pic'] = "michelangelo.jpg"
    elif color == "red":
        context['pic'] = "raphael.jpg"
    elif color == "purple":
        context['pic'] = "donatello.jpg"
    else:
        context['pic'] = "notapril.jpg"
    print context
    return render(request, 'turtles.html', context)
