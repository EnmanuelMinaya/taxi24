import { Controller, Get } from '@nestjs/common';

@Controller('driver')
export class DriverController {
  @Get('id')
  getHello(): string {
    return 'Hello Driver';
  }
}
