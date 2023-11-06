import { HttpStatus } from '@nestjs/common';

// Interface Response Success
export interface I_ResSuccess<T = object> {
  data?: T;
  message?: string;
  statusCode?: HttpStatus;
}
