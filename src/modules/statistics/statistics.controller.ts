import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StatsService } from '@modules/statistics/statistics.service';

@Controller('stats')
@ApiTags('statistics')
export class StatisticsController {
  // private readonly cronJobsConfig: I_CronJobsConfig;

  constructor(private readonly statsService: StatsService) {
    // this.cronJobsConfig = this.configService.get('cron-jobs');
  }
}
