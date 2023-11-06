import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmConfigService } from '@config/database/postgres/typeorm-config.service';
import { DataSource } from 'typeorm';
import { entitiesPostgres } from './postgres/index.entities';
import { schemasMongo } from '@schemas/index.schemas';

const dynamicModules = TypeOrmModule.forFeature([...entitiesPostgres]);
const dynamicModulesMongoose = MongooseModule.forFeature([...schemasMongo]);

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
      inject: [ConfigService],
      dataSourceFactory: async (options) => {
        return await new DataSource(options).initialize();
      },
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('mongo.url'),
      }),
    }),
    dynamicModules,
    dynamicModulesMongoose,
  ],
  exports: [dynamicModules, dynamicModulesMongoose],
})
export class DatabaseModule {}
