from django.shortcuts import render, HttpResponse
#CONTROLLER!!!
def index(request):
    print "A BUNCH OF INFORMATION ASDFKJASKFDJHBSADJKHFASDHFJGASHDGF"
    response = "Hello, I am your first request!"
    return render(request, "first_app/index.html")

def show(request):
    return render(request, "first_app/show_users.html")
