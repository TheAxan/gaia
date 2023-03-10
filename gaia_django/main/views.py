from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status

from main.serializers import UserSerializer, QuestionSerializer
from main.models import User, Question


class RegisterView(generics.GenericAPIView):
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            User.objects.create_user(
                username=username,
                password=password
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class QuestionDetail(generics.RetrieveAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    lookup_field = 'id'

class QuestionList(generics.ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer