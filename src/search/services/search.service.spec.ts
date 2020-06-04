import { Test, TestingModule } from '@nestjs/testing';
import { SearchService } from './search.service';
import { NO_DATA } from '../constants/search.constants';
import * as MOCKED_DATA from '../../data/data.json';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchService],
    }).compile();

    service = module.get<SearchService>(SearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('[recoursiveSearch] empty key', () => {
    const result = undefined;

    expect(service.recoursiveSearch('', MOCKED_DATA)).toBe(result);
  });

  it('[recoursiveSearch] should return value by key', () => {
    const result = false;

    expect(service.recoursiveSearch('useJSP', MOCKED_DATA)).toBe(result);
  });

  it('[recoursiveSearch] should return undefined(value by key is object)', () => {
    const result = undefined;

    expect(service.recoursiveSearch('web-app', MOCKED_DATA)).toBe(result);
  });
});
