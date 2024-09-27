import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
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

  @Get()
  findAll() {
    return this.ridesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ridesService.findOne(+id);
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ridesService.remove(+id);
  }
}
