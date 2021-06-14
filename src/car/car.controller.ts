import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car,dto';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  public getCars() {
    return this.carService.getCars();
  }

  @Post()
  public postCar(@Body() car: CarDto) {
    return this.carService.postCar(car);
  }

  @Get(':id')
  public getCarByID(@Param('id') id: number) {
    return this.carService.getCarByID(id);
  }

  @Delete(':id')
  public deleteCarByID(@Param('id') id: number) {
    return this.carService.deleteCarByID(id);
  }

  @Put(':id')
  public async putCarByID(@Param('id') id: number, @Query() query) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;
    return this.carService.putCarByID(id, propertyName, propertyValue);
  }
}
