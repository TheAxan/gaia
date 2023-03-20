from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from main import views

urlpatterns = [
    path('register/', views.RegisterView.as_view()),
    path('question/<int:id>/', views.QuestionDetail.as_view()),
    path('questions/', views.QuestionList.as_view()),
    path('answer/', views.AnswerView.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
