from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^process$', views.process),
    url(r'^courses/destroy/(?P<id>\d+)$', views.confirm),
    url(r'confirmed/(?P<id>\d+)$', views.destroy)
]
