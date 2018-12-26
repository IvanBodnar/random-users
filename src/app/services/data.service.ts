import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import UserModel from '../models/user.model';
import UserDetailsModel from '../models/user-details.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.baseUrl;
  private _currentUserSubject = new BehaviorSubject( <UserModel>null );
  currentUser$: Observable<UserModel> = this._currentUserSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  init() { }

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
                  item.email,
                  item.dob.date,
                  item.dob.age,
                  item.picture.large
                )
              )
            );
          }
        )
      );
  }

  setCurrentUser( user: UserModel ): void {
    this._currentUserSubject.next( user );
  }
}
