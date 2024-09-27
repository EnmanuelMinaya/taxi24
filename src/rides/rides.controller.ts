import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { RidesService } from './rides.service';
import { Ride as RideModel } from '@prisma/client';

@Controller('rides')
export class RidesController {
  constructor(private readonly ridesService: RidesService) {}

  @Post()
  create(@Body() data: Pick<RideModel, 'driverId' | 'passengerId'>) {
    const { driverId, passengerId } = data;
    return this.ridesService.create({
      driver: {
        connect: { id: driverId },
      },
      passenger: {
        connect: { id: passengerId },
      },
    });
  }

  @Get('active')
  Active() {
    return this.ridesService.findActiveRides();
  }

  @Put('complete/:id')
  async publishPost(@Param('id') id: string): Promise<RideModel> {
    return this.ridesService.updateRide({
      where: { id: Number(id) },
      data: {
        status: 'completed',
        endTime: new Date().toISOString(),
      },
    });
  }

  @Get(':id')
  getRideById(@Param('id') id: string) {
    return this.ridesService.findOne(+id);
  }
}
