import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { setupAppConfig } from './common/config/app/app.config';
import { setupSwagger } from './common/config/api/swagger.config';

async function bootstrap() {
  const logger = new Logger('App');

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
    cors: {
      origin: true,
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    },
    logger: ['error', 'warn', 'debug', 'log'],
  });

  setupAppConfig(app);
  setupSwagger(app);

  const configService = app.get(ConfigService);
  const APP_PORT = configService.get('app.port');

  await app.listen(APP_PORT, () => {
    logger.log(`App running in http://localhost:${APP_PORT}`);
  });
}

bootstrap();
