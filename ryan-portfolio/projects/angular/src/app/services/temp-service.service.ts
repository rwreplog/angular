import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { model } from '../models/test-model';
import { data } from '../mock-model';

@Injectable({
  providedIn: 'root'
})
export class TempServiceService {

  constructor() { }

  getData(): Observable<model[]> {
    const datas = of(data);
    return datas;
  }
}
