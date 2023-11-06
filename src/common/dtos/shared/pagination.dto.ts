import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { SortOrder } from '@enums/sort-order.enum';

export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @ApiPropertyOptional({
    name: 'page',
    required: false,
    description: 'Որոշում է թե paginate արվածի որ էջն է հարկավոր',
  })
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @ApiPropertyOptional({
    name: 'perPage',
    required: false,
    description: 'Որոշում է թե քանի հատ օբյեկտ պետք է լինի ստացված զանգվածում',
  })
  perPage: number = 10;

  @IsOptional()
  @ApiPropertyOptional({
    name: 'sortField',
    required: false,
    description: 'Որոշում է թե սորտավորումը որ ֆիելդով է անելու',
  })
  sortField: string = 'createdAt';

  @IsOptional()
  @IsEnum(SortOrder)
  @ApiPropertyOptional({
    name: 'sortOrder',
    enum: SortOrder,
    required: false,
    description: 'Սորտավորումն աճման կարոքվ թե նվազման կարոքով',
  })
  sortOrder: SortOrder = SortOrder.ASC;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    name: 'search',
    required: false,
    nullable: true,
  })
  search?: string;
}
