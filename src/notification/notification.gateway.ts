import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
// import { NotificationDto } from 'src/notification.dto/notification.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class NotificationGateway {
  @WebSocketServer()
  server: Server;
@SubscribeMessage("notification")

  sendNotification(notification) {
    this.server.emit('newNotification', notification);
  }
}
