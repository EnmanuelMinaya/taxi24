import { Controller, Get, Param } from '@nestjs/common';
import { PassengersService } from './passengers.service';

@Controller('passengers')
export class PassengersController {
  constructor(private readonly passengersService: PassengersService) {}

  @Get()
  findAll() {
    return this.passengersService.passengers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passengersService.passenger(+id);
  }
}
