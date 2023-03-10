from rest_framework import serializers
from main.models import User, Question


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['prompt_fr', 'prompt_en', 'prompt_hint_fr', 'prompt_hint_en', 'prerequisite']