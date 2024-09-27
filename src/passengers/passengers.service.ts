import { Injectable } from '@nestjs/common';
import { Passenger } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PassengersService {
  constructor(private prisma: PrismaService) {}

  async passenger(passengerId: number): Promise<Passenger | null> {
    return this.prisma.passenger.findUnique({
      where: { id: passengerId },
    });
  }

  async passengers(): Promise<Passenger[]> {
    return this.prisma.passenger.findMany({});
  }
}
