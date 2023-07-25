import { Injectable } from '@nestjs/common';
import { Collection, Db } from 'mongodb';
import { NotificationDto } from '../notification.dto/notification.dto';
import { NotificationGateway } from './notification.gateway';

@Injectable()
export class NotificationService {
  private readonly notificationCollection: Collection;

  constructor(private db: Db, private readonly notificationGateway:NotificationGateway) {
    this.notificationCollection = this.db.collection('notifications');
  }

  async create(notificationDto: NotificationDto): Promise<any> {
    const notification = {
      feedbackBy: notificationDto.feedbackBy,
      feedbackFor: notificationDto.feedbackFor,
      feedbackMessage: notificationDto.feedbackMessage,
      rating: notificationDto.rating,
    };
   const result = await this.notificationCollection.insertOne(notification);
    // this.notificationGateway.sendNotification(result)
    const insertedDocument = await this.notificationCollection
            .findOne({ _id: result.insertedId });
            // webSoket 
            this.notificationGateway.sendNotification(insertedDocument)
    return result;
  }
}
 




  // async getAll(): Promise<NotificationDto[]> {
  //   const notifications = await this.notificationCollection.find().toArray();
  //   return notifications.map((notification) => ({
  //     message: notification.message,
  //     createdAt: notification.createdAt,
  //   }));
  // }

