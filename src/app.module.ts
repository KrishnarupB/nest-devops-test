import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    CarModule,
    ConfigModule.forRoot({
      load: [configuration],
  })],
})
export class AppModule {}
