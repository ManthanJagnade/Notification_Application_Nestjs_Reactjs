import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class NotificationDto {

  @IsNotEmpty()
  @IsEnum(['teacher', 'parents'])
  feedbackBy: string;

  @IsNotEmpty()
  @IsEnum(['teacher', 'student'])
  feedbackFor: string;

  @IsNotEmpty()
  @IsString()
  feedbackMessage: string;


  date:Date;

  @IsNotEmpty()
  @IsEnum(['gold', 'silver', 'bronze'])
  rating: string;

}