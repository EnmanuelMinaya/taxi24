import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Ride } from '@prisma/client';

@Injectable()
export class RidesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.RideCreateInput): Promise<Ride> {
    return this.prisma.ride.create({
      data,
    });
  }

  async findActiveRides(): Promise<Ride[]> {
    return this.prisma.ride.findMany({
      where: {
        status: 'active',
      },
    });
  }

  async findOne(rideId: number): Promise<Ride | null> {
    return this.prisma.ride.findUnique({
      where: { id: rideId },
    });
  }

  async updateRide(params: {
    where: Prisma.RideWhereUniqueInput;
    data: Prisma.RideUpdateInput;
  }): Promise<Ride> {
    const { data, where } = params;
    return this.prisma.ride.update({
      data,
      where,
    });
  }
}
