// logger.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import * as morgan from 'morgan';

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    morgan('dev')(req, res, next);
  }
}
