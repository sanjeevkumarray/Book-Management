from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Author, Book
from .serializers import AuthorSerializer, BookSerializer

class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

    @action(detail=True, methods=['get'])
    def books(self, request, pk=None):
        author = self.get_object()
        books = Book.objects.filter(author=author)
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
