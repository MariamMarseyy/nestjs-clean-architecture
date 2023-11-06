import { HttpStatus } from '@nestjs/common';
import { I_ResSuccess } from './resSuccess.interface';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export class ResSuccessDto<T = object> implements I_ResSuccess<T> {
  @ApiProperty({ default: HttpStatus.OK })
  statusCode: HttpStatus;

  @ApiProperty()
  message: string;

  @ApiHideProperty()
  @ApiProperty()
  data: T | null;

  constructor({
    statusCode = HttpStatus.OK,
    message = 'Action completed successfully',
    data = null,
  }: I_ResSuccess<T>) {
    this.statusCode = statusCode;
    this.message = message;

    if (data !== null) {
      this.data = data;
    }
  }
}
