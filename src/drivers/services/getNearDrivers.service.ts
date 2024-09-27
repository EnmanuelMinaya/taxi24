import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { randomCirclePoint } from 'random-location';
import { getDistance } from 'geolib';
import { location } from 'src/common/utils/interfaces';
import { Driver } from '@prisma/client';

type DriverWithLocation = Driver & {
  currentLocation: {
    latitude: number;
    longitude: number;
  };
};

@Injectable()
export class GetNearDriversService {
  constructor(private prisma: PrismaService) {}

  simulateCoordinates = (
    availableDrivers: Driver[],
    passengerLocation: location,
  ): DriverWithLocation[] => {
    if (!availableDrivers.length) return [];

    return availableDrivers.map((availableDriver) => ({
      ...availableDriver,
      currentLocation: randomCirclePoint(passengerLocation, 6000),
    }));
  };

  async getNearDrivers(passengerLocation: location) {
    const availableDrivers = await this.prisma.driver.findMany({
      where: {
        availability: true,
      },
    });

    const driversWithLocation = this.simulateCoordinates(
      availableDrivers,
      passengerLocation,
    );

    const driversWithLocationSorted = driversWithLocation.sort((a, b) => {
      const { currentLocation: currentLocationA } = a;
      const { currentLocation: currentLocationB } = b;
      const distanceToA = getDistance(currentLocationA, passengerLocation);
      const distanceToB = getDistance(currentLocationB, passengerLocation);
      return distanceToA - distanceToB;
    });

    return driversWithLocationSorted.slice(0, 3);
  }
}
