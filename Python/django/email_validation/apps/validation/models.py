from __future__ import unicode_literals
from django.db import models
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class EmailManager(models.Manager):
    def add_email(self, email):
        if EMAIL_REGEX.match(email):
            print "Success"
            Email_Addresses.emailManager.create(email=email)
        else:
            return ("Invalid Format!")

class Email_Addresses(models.Model):
    email = models.CharField(max_length = 60)
    created_at = models.DateTimeField(auto_now_add=True)
    emailManager = EmailManager()
