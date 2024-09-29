import { Controller, Get, Param, Query } from '@nestjs/common';
import { DriversService } from './services/drivers.service';
import { GetDriversInsideRadioService } from './services/getDriversInsideRadio.service';
import { GetNearDriversService } from './services/getNearDrivers.service';

@Controller('drivers')
export class DriversController {
  constructor(
    private readonly driversService: DriversService,
    private readonly GetDriversInsideRadioService: GetDriversInsideRadioService,
    private readonly GetNearDriversService: GetNearDriversService,
  ) {}

  @Get()
  findAll() {
    return this.driversService.drivers();
  }

  @Get('available')
  findAvailableDrivers() {
    return this.driversService.availableDrivers();
  }

  @Get('inArea')
  GetDriversInsideRadio(
    @Query('latitude') latitude: number,
    @Query('longitude') longitude: number,
  ) {
    return this.GetDriversInsideRadioService.GetDriversInsideRadio({
      latitude,
      longitude,
    });
  }

  @Get('nearby')
  GetNearDrivers(
    @Query('latitude') latitude: number,
    @Query('longitude') longitude: number,
  ) {
    return this.GetNearDriversService.getNearDrivers({
      latitude,
      longitude,
    });
  }

  @Get(':id')
  getDriverById(@Param('id') id: string) {
    return this.driversService.driver(+id);
  }
}
