import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotificationDto } from '../notification.dto/notification.dto';
import { NotificationService } from './notification.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async create(@Body() notificationDto: NotificationDto): Promise<void> {
    await this.notificationService.create(notificationDto);
  }

}





  // @Get()
  // async getAll(): Promise<NotificationDto[]> {
  //   return this.notificationService.getAll();
  // }

