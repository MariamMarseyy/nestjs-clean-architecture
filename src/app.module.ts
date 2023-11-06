import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configApp, configMongo, configPostgres } from './common/config';
import { GlobalModule } from '@common/global.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configApp, configMongo, configPostgres],
      envFilePath: ['.env'],
    }),
    GlobalModule,
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
