from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^books$', views.books),
    url(r'^logout$', views.logout),
    url(r'^books/add$', views.booksadd),
    url(r'^books/(?P<book_id>\d+)$', views.bookview),
    url(r'process$', views.process)
]
