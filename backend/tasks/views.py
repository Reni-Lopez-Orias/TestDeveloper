from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Task
from .serializer import TaskSerializer

class TaskView(viewsets.ModelViewSet):
    
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def list(self, request):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)

        return Response(
            {
                'data': serializer.data,
                'message': None,
                'error': None
            }, 
            status=status.HTTP_200_OK
        )

    def retrieve(self, request, pk=None):
        task = self.get_object()
        serializer = self.get_serializer(task)
    
        return Response(
            {
                'data': serializer.data,
                'message': None,
                'error': None
            }, 
            status=status.HTTP_200_OK
        )

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        return Response(
            {
                'data': serializer.data,
                'message': 'Added task!',
                'error': None
            }, 
            status=status.HTTP_201_CREATED
        )

    def update(self, request, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        
        return Response(
            {
                'data': serializer.data,
                'message': '¡Updated task!',
                'error': None
            }, 
            status=status.HTTP_200_OK
        )

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        
        return Response(
            {
                'data': None,
                'message': 'Deleted task!',
                'error': None
            }, 
            status=status.HTTP_200_OK
        )
