from .models import User
from .serializer import UserSerializer
from rest_framework.response import Response
from rest_framework import viewsets, status

class UsersView(viewsets.ModelViewSet):
    
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        return Response(
            {
                'data': serializer.data,
                'message': 'The user registered successfully!',
                'error': None
            }, 
            status=status.HTTP_201_CREATED
        )
