import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  intit() { }

  getUsers(): Observable<any> {
    return this.http.get<any>( this.baseUrl + '?results=5' );
  }
}
