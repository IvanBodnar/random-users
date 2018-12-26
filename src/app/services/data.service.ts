import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import UserModel from '../models/user.model';
import UserDetailsModel from '../models/user-details.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  intit() { }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<any>( this.baseUrl + '?results=5' )
      .pipe(
        map(
          response => {
            return response.results.map(
              item => new UserModel(
                item.name.first,
                item.name.last,
                item.location.street,
                item.phone,
                item.picture.thumbnail,
                new UserDetailsModel(
                  item.gender,
                  item.email
                )
              )
            );
          }
        )
      );
  }
}
