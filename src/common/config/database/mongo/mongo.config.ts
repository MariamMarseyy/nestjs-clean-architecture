import { registerAs } from '@nestjs/config';
import * as process from 'process';

export interface I_MongoDatabaseConfig {
  url: string;
  prefix: string;
  password: string;
  host: string;
  dbName: string;
  query: string;
}

export default registerAs(
  'mongo',
  (): I_MongoDatabaseConfig => ({
    url:
      process.env.MONGO_DB_PREFIX +
      '://' +
      process.env.MONGO_DB_USERNAME +
      ':' +
      process.env.MONGO_DB_PASSWORD +
      '@' +
      process.env.MONGO_DB_HOST +
      '/' +
      process.env.MONGO_DB_NAME +
      '?' +
      process.env.MONGO_DB_URI_QUERY,
    prefix: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.MONGO_DB_HOST,
    dbName: process.env.MONGO_DB_NAME,
    query: process.env.MONGO_DB_URI_QUERY,
  }),
);
