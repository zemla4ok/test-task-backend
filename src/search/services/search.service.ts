import { Injectable } from '@nestjs/common';

import * as MOCKED_DATA from '../../data/data.json';
import { ISearchByKeyResponse } from '../interfaces/search.interface';

const NO_DATA = `key isn't available`;

@Injectable()
export class SearchService {
  searchByKey(key: string): ISearchByKeyResponse {
    const value = this.recoursiveSearch(key, MOCKED_DATA);
    return { value: typeof(value) !== 'undefined' ? value : NO_DATA };
  }

  private recoursiveSearch(key: string, data): string | undefined {
    for(const k in data) {
      if (k === key) {
        return data[k];
      }

      if (data[k] instanceof Object) {
        return this.recoursiveSearch(key, data[k]);
      }
    }
  }
}
