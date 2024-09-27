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

  findAll() {
    return `This action returns all rides`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ride`;
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

  remove(id: number) {
    return `This action removes a #${id} ride`;
  }
}
