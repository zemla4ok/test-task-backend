import * as MOCKED_DATA from '../../data/data.json';
import { ISearchByKeyResponse } from '../interfaces/search.interface';
import { Injectable } from '@nestjs/common';
import { NO_DATA } from '../constants/search.constants';


@Injectable()
export class SearchService {
  searchByKey(key: string): ISearchByKeyResponse {
    const value = this.recoursiveSearch(key, MOCKED_DATA);
    return { value: typeof(value) !== 'undefined' ? value : NO_DATA };
  }

  recoursiveSearch(key: string, data): string | undefined {
    for(const k in data) {
      if (k === key && !(data[k] instanceof Object)) {
        return data[k];
      }

      if (data[k] instanceof Object) {
        return this.recoursiveSearch(key, data[k]);
      }
    }
  }
}
