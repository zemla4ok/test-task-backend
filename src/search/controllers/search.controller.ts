import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from '../../app.service';
import { SearchByKeyDto } from '../DTO/search-by-key.dto';
import { SearchService } from '../services/search.service';
import { ISearchByKeyResponse } from '../interfaces/search.interface';

@Controller('api/search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('by-key')
  searchByKey(@Query() query: SearchByKeyDto): ISearchByKeyResponse {
    return this.searchService.searchByKey(query.key);
  }
}
