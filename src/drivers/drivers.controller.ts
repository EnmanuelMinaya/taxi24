import { Controller, Get, Param } from '@nestjs/common';
import { DriversService } from './drivers.service';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Get()
  findAll() {
    return this.driversService.drivers();
  }

  @Get('available')
  findAvailableDrivers() {
    return this.driversService.availableDrivers();
  }

  @Get(':id')
  getDriverById(@Param('id') id: string) {
    return this.driversService.driver(+id);
  }
}
