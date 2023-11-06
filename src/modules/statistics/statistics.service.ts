import { Injectable } from '@nestjs/common';
import { CoingeckoService } from '@modules/statistics/coingecko/coingecko.service';
import { ChainStatsOutputDto } from '@dto/statistics/chain-stats.output.dto';
import { PaginationDto } from '@dto/shared/pagination.dto';

@Injectable()
export class StatsService {
  constructor(private readonly coingeckoService: CoingeckoService) {}

  public async getRankingData(
    query: PaginationDto,
  ): Promise<ChainStatsOutputDto> {
    return await this.coingeckoService.collectCoinToBlockchainData(query);
  }
}
