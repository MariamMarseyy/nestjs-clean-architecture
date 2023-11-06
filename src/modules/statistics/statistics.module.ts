import { Logger, MiddlewareConsumer, Module } from '@nestjs/common';
import { StatisticsController } from './statistics.controller';
import { StatsService } from '@modules/statistics/statistics.service';
import { CoingeckoService } from '@modules/statistics/coingecko/coingecko.service';
import { CoingeckoServiceProvider } from '@modules/statistics/providers/coingecko.service.provider';
import { HttpModule } from '@nestjs/axios';
import { LoggerMiddleware } from '@middlewares/logger.middleware';

@Module({
  controllers: [StatisticsController],
  imports: [HttpModule],
  providers: [StatsService, CoingeckoService, CoingeckoServiceProvider, Logger],
  exports: [CoingeckoService, CoingeckoServiceProvider],
})
export class StatisticsModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(StatisticsController);
  }
}
