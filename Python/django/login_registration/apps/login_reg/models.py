from __future__ import unicode_literals
from django.db import models
import re
import bcrypt
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class userManager(models.Manager):
    def add_user(self, post_data):
        error_msgs = []
        if not EMAIL_REGEX.match(post_data['email']):
            error_msgs.append("Invalid Email Address")

        if len(post_data['first_name']) < 2:
            error_msgs.append("First Name too short!")

        if len(post_data['last_name']) < 2:
            error_msgs.append("Last Name too short!")

        if len(post_data['password']) < 8:
            error_msgs.append("Password too short")

        if post_data['pass_confirm'] != post_data['password']:
            error_msgs.append("Passwords don't match")

        if error_msgs:
            return {"errors":error_msgs}
        else:
            encoded = post_data['password'].encode()
            new_user = User.userManager.create(
            first_name = post_data['first_name'],
            last_name  = post_data['last_name'],
            email      = post_data['email'],
            password   = bcrypt.hashpw(encoded, bcrypt.gensalt())
            )
            return {"theuser": new_user}

    def login(self, post_data):
        error_msgs = []
        if EMAIL_REGEX.match(post_data['email']):
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
            error_msgs.append("Invalid Login")
            return {"errors":error_msgs}








class User(models.Model):
    first_name =  models.CharField(max_length=45)
    last_name  =  models.CharField(max_length=45)
    email      =  models.CharField(max_length=60)
    password   =  models.CharField(max_length=60)
    created_at =  models.DateTimeField(auto_now_add=True)
    updated_at =  models.DateTimeField(auto_now=True)
    userManager = userManager()
