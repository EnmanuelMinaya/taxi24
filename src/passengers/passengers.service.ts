import { Injectable } from '@nestjs/common';

@Injectable()
export class PassengersService {
  findAll() {
    return `This action returns all passengers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} passenger`;
  }
}
