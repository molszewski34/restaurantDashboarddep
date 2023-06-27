from django.urls import path 
from mainapp.views import rooms_views as views
from mainapp.views import dishes_views as dshviews

urlpatterns = [
    path('create-room',views.createRoom, name="create_room" ),
   
]