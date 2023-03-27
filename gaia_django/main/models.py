from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass

class Question(models.Model):
    description = models.CharField(max_length=50)
    prompt_fr = models.CharField(max_length=100, blank=True)
    prompt_en = models.CharField(max_length=100, blank=True)
    hint_fr = models.TextField(blank=True)
    hint_en = models.TextField(blank=True)
    prerequisite = models.ForeignKey('self',
        related_name='required_by',
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )
    parent = models.ForeignKey('self',
        related_name='children',
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )
    type = models.CharField(
        max_length=50,
        choices=[
            ('binary', 'binary'),
            ('binary_multiple', 'binary_multiple'),
            ('number', 'number'),
            ('number_multiple', 'number_multiple'),
            ('multiple', 'multiple')
        ]
    )

    def __str__(self):
        return f'({self.id}) {self.description}'

class Answer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer_date = models.DateTimeField(auto_now_add=True)
    answer_json = models.JSONField()