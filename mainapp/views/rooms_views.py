from rest_framework import permissions
from mainapp.models import Room
from mainapp.serializers import  RoomSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, IsAdminUser


@api_view(['POST'])
#@permission_classes([IsAuthenticated])
def createRoom(request):
    data = request.data
    user = request.user
    print("data: ", data['roomName'])

  
    newRoom = Room.objects.create(
        name = data['roomName']
    )
    serializer = RoomSerializer(newRoom, many=False)

    print("USER: ",user)
    return Response(serializer.data)
