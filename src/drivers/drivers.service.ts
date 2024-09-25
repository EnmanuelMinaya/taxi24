import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Driver } from '@prisma/client';

@Injectable()
export class DriversService {
  constructor(private prisma: PrismaService) {}

  async driver(driverId: number): Promise<Driver | null> {
    return this.prisma.driver.findUnique({
      where: { id: driverId },
    });
  }

  async drivers(): Promise<Driver[]> {
    return this.prisma.driver.findMany({});
  }
  async availableDrivers(): Promise<Driver[]> {
    return this.prisma.driver.findMany({
      where: {
        availability: true,
      },
    });
  }
}
