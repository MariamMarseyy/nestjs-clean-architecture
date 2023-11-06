import { BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export class GlobalValidationPipeDataTransform {
  constructor(errors: ValidationError[]) {
    throw new BadRequestException(
      this.errorHandling(errors),
      'Validation Error',
    );
  }

  errorHandling(errors: ValidationError[]) {
    const finalResult = errors.map(el => {
      if (el.children.length) {
        return this.errorHandling(el.children).length > 1
          ? this.errorHandling(el.children)
          : this.errorHandling(el.children)[0];
      }

      return {
        [el.property]: Object.keys(el.constraints).map(
          val => el.constraints[val],
        ),
      };
    });

    return finalResult;
  }
}
