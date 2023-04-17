from rest_framework import serializers
from main.models import User, Question, Answer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']

class QuestionSerializer(serializers.ModelSerializer):
    children = serializers.PrimaryKeyRelatedField(many=True, queryset=Question.objects.all())

    class Meta:
        model = Question
        fields = ['id', 'prompt_fr', 'hint_fr', 'question_type', 'children']

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['question', 'answer_json']