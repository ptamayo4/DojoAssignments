from django.shortcuts import render, HttpResponse
import random
import string

def index(request, methods=["POST"]):
    request.session['gen_num'] = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(14))
    if not 'count' in request.session:
        request.session['count'] = 1
    else:
        request.session['count'] += 1
    return render(request, 'generator/index.html')
