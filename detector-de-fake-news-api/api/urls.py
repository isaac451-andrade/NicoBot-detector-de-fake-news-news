from django.urls import path
from . import views
urlpatterns = [
    path("checkByTitle/", views.handleText, name="checkByTitle"),
]