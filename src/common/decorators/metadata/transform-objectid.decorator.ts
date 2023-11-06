import { applyDecorators } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export function TransformObjectId() {
  return applyDecorators(
    IsNotEmpty({ message: 'Not Valid Mongo Id' }),
    Transform(({ value }) =>
      Types.ObjectId.isValid(value) ? new Types.ObjectId(value) : '',
    ),
  );
}
