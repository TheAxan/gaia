from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass

class Question(models.Model):
    description = models.CharField(max_length=50)
    prompt_fr = models.CharField(max_length=100, blank=True)
    prompt_en = models.CharField(max_length=100, blank=True)
    prompt_hint_fr = models.TextField(blank=True)
    prompt_hint_en = models.TextField(blank=True)
    prerequisite = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True)

class Answer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer_date = models.DateTimeField(auto_now_add=True)
    latest_answer = models.BooleanField()
    answer_json = models.JSONField()