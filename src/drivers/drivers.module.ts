import { Module } from '@nestjs/common';
import { GetDriversInsideRadioService } from './services/GetDriversInsideRadio.service';
import { GetNearDriversService } from './services/GetNearDrivers.service';
import { DriversService } from './services/drivers.service';
import { DriversController } from './drivers.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DriversController],
  providers: [
    DriversService,
    PrismaService,
    GetDriversInsideRadioService,
    GetNearDriversService,
  ],
})
export class DriversModule {}
