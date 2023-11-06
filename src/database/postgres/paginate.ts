import { FindManyOptions, FindOptionsOrder, Like } from 'typeorm';
import { RegularEntity } from '@entities/regular.entity';
import { SortOrder } from '@enums/sort-order.enum';

export interface PaginateOptions {
  page?: number;
  pageSize?: number;
  sort?: { sortField: string; sortOrder: SortOrder };
  search?: string[];
}

export const paginate = <T extends RegularEntity>(
  paginate: PaginateOptions,
): FindManyOptions<T> => {
  const { page, pageSize, sort, search } = paginate;
  const pagination: FindManyOptions<T> = {};

  const whereOption: FindManyOptions<T>['where'] = [];

  if (search && search.length > 0) {
    search.forEach((searchString) => {
      const [property, searchValue] = searchString.split(' ');
      const condition = {};
      condition[property] = Like(searchValue + '%');
      whereOption.push(condition);
    });
  }

  pagination.where = whereOption;

  if (sort) {
    const sortOrder: FindOptionsOrder<T> = {};
    sortOrder[sort.sortField] = sort.sortOrder;
    pagination.order = sortOrder;
  }

  if (page && pageSize) {
    pagination.skip = (page - 1) * pageSize;
    pagination.take = pageSize || 10;
  }

  return pagination;
};
