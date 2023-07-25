import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { NotificationGateway } from './notification.gateway';

@Module({
  controllers: [NotificationController],
  providers: [
    NotificationService,
    NotificationGateway,
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => {
        const client = new MongoClient('mongodb://127.0.0.1:27017');
        await client.connect();
        return client.db('notification');
      },
    },
    {
      provide: Db,
      useFactory: (connection: any) => connection,
      inject: ['DATABASE_CONNECTION'],
    },
  ],
})
export class NotificationModule {}
