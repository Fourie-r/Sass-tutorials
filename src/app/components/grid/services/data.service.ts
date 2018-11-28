import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HandyModel } from '../models/handyModel';

@Injectable()
export class DataService {
  constructor(private _http: HttpClient) {}

  getHandys(): Observable<HandyModel[]> {
    return this._http.get<HandyModel[]>(
      '/assets/grid.component/grid-assets/handy.json'
    );
  }
}
