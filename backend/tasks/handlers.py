from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status

def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)
            
    if response.status_code == 400:
        custom_response_data = {
            'error': True,
            'message': str(exc),
            'data': None
        }
        
    elif response.status_code == 404:
        custom_response_data = {
            'error': True,
            'message': 'Task not found!',
            'data': None
        }
        
    elif response.status_code == 500:
            custom_response_data = {
                'error': True,
                'message': 'Internal error!',
                'data': None
            }

    response.data = custom_response_data
    
    return response
