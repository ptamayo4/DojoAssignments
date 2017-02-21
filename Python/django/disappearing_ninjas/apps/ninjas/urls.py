from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^ninjas$', views.turtles),
    url(r'^ninjas/(?P<color>\S+)$', views.ninjacolor)
]
