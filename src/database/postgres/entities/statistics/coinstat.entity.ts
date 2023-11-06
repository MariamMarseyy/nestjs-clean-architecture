import { Entity } from 'typeorm';
import { RegularEntity } from '@entities/regular.entity';

@Entity({ name: 'entity1' })
export class Entity1 extends RegularEntity {}
