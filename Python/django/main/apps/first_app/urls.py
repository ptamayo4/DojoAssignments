from django.conf.urls import url
from . import views
def index(request):
    print ("hello world")

urlpatterns = [
  url(r'^$', views.index), # And now we use include to pull in our first_app.urls...
  url(r'^users$', views.show)
]
