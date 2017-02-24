from __future__ import unicode_literals
from django.db import models
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class EmailManager(models.Manager):
    def add_email(self, email):
        error_msgs = []
        if EMAIL_REGEX.match(email):
            user = Email_Addresses.emailManager.create(email=email)
            return {"theuser": user}
        else:
            error_msgs.append("Invalid Email Address")
            return {"errors":error_msgs}

class Email_Addresses(models.Model):
    email = models.CharField(max_length = 60)
    created_at = models.DateTimeField(auto_now_add=True)
    emailManager = EmailManager()
