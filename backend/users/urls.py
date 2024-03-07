from django.urls import path, include
from rest_framework import routers
from users import views

router = routers.DefaultRouter()
router.register(r'user', views.UsersView, 'users')

urlpatterns = [
    path('v1/', include(router.urls))
]
