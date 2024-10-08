import { Module } from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { PassengersController } from './passengers.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PassengersController],
  providers: [PassengersService, PrismaService],
})
export class PassengersModule {}
