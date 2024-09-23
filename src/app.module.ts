import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverController } from './driver/driver.controller';

@Module({
  imports: [],
  controllers: [AppController, DriverController],
  providers: [AppService],
})
export class AppModule {}
