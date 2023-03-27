from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Question, Answer
from django.db import models
from django.forms import TextInput, Textarea

admin.site.register(User, UserAdmin)

class QuestionAdmin(admin.ModelAdmin):
    list_display = ('description', 'id', 'question_type', 'prompt_fr', 'prerequisite', 'parent')
    save_as = True
    formfield_overrides = { 
        models.CharField : {'widget': TextInput(attrs={'size':'85'})},
    }
admin.site.register(Question, QuestionAdmin)

class AnswerAdmin(admin.ModelAdmin):
    list_display = ('user', 'question', 'answer_date', 'answer_json')
admin.site.register(Answer, AnswerAdmin)