from __future__ import unicode_literals
from django.db import models
import re
import bcrypt
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
    def add_user(self, post_data):
        error_msgs = []
        if not EMAIL_REGEX.match(post_data['email']):
            error_msgs.append("Invalid Email Address")
        if User.userManager.filter(email=post_data['email']):
            error_msgs.append("Email Address Taken")
        if len(post_data['name']) < 2:
            error_msgs.append("Name is too short")
        if len(post_data['alias']) < 2:
            error_msgs.append("Alias is too short")
        if len(post_data['password']) < 8:
            error_msgs.append("Password is too short")
        if post_data['password'] != post_data['confirm_password']:
            error_msgs.append("Passwords don't match")

        if error_msgs:
            return {"errors":error_msgs}
        else:
            encoded = post_data['password'].encode()
            new_user = User.userManager.create(
                name    =   post_data['name'],
                alias   =   post_data['alias'],
                email   =   post_data['email'],
                password=   bcrypt.hashpw(encoded, bcrypt.gensalt())
            )
            return {"theuser": new_user}

    def login(self, post_data):
        error_msgs = []
        if User.userManager.filter(email=post_data['email']):
            hashed = User.userManager.get(email=post_data['email']).password
            hashed = hashed.encode()
            user_pass = post_data['password'].encode()
            if bcrypt.hashpw(user_pass,hashed) == hashed:
                print "Successful PASSWORD!!"
                return {"theuser": User.userManager.get(email=post_data['email'])}
            else:
                print "Bad Password!"
                error_msgs.append("Invalid Login")
                return {"errors":error_msgs}
        else:
            print "bad email"
            error_msgs.append("Invalid Login")
            return {"errors":error_msgs}

class ReviewManager(models.Manager):
    def genReview(self, post_data):
        error_msgs = []
        if len(post_data['title']) < 1:
            error_msgs.append('Book title is too short')
        if len(post_data['author']) < 1:
            error_msgs.append('Author Name is too short')
        if len(post_data['review']) < 5:
            error_msgs.append('Review is too short')

        if error_msgs:
            return {"errors": error_msgs}
        else:
            author = Author.objects.create(name=post_data['author'])
            book = Book.objects.create(title=post_data['title'], author=author)
            user = User.userManager.get(id=post_data['curr_user'])
            new_review = Review.reviewManager.create(
            rating=post_data['rating'],
            content=post_data['review'],
            user=user,
            book=book
            )
            return {"thereview":new_review}


class User(models.Model):
    name      =   models.CharField(max_length=100)
    alias     =   models.CharField(max_length=100)
    email     =   models.CharField(max_length=60)
    password  =   models.CharField(max_length=60)
    created_at=   models.DateTimeField(auto_now_add=True)
    updated_at=   models.DateTimeField(auto_now=True)
    userManager = UserManager()

class Author(models.Model):
    name  =   models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Book(models.Model):
    title   =   models.CharField(max_length=100)
    author  =   models.ForeignKey(Author, related_name="books")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Review(models.Model):
    rating  =   models.IntegerField()
    content =   models.TextField(max_length=1000)
    user    =   models.ForeignKey(User, related_name="reviews")
    book    =   models.ForeignKey(Book, related_name="book_review")
    reviewManager = ReviewManager()
