from django.urls import path 
from mainapp.views import rooms_views as views


urlpatterns = [
    path('create-room',views.createRoom, name="create_room" ),
    path('remove-room/<str:pk>',views.removeRoom, name="remove_room" ),
   
]