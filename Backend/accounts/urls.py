from django.urls import path
from .views import RegisterView, ProtectedView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('protected-view/', ProtectedView.as_view()),
]