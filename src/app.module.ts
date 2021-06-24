import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CarModule, ConfigModule.forRoot()],
})
export class AppModule {}
