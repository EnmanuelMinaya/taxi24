import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const startTime = Date.now();
    console.log(`[${new Date().toISOString()}] Incoming Request:`);
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.originalUrl}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Body: ${JSON.stringify(req.body)}`);

    res.on('finish', () => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;

      console.log(`[${new Date().toISOString()}] Response:`);
      console.log(`Status Code: ${res.statusCode}`);
      console.log(`Response Time: ${responseTime}ms`);
    });

    next();
  }
}
