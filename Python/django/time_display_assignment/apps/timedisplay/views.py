from django.shortcuts import render, HttpResponse
import datetime

def index(request):
    context = {
    "date": datetime.datetime.now().strftime('%B %d, %Y'),
    "time": datetime.datetime.now().strftime('%I:%M %p')
    }
    
    return render(request,'timedisplay/index.html', context)
