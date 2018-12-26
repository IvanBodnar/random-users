import { Component, OnInit } from '@angular/core';

import {DataService} from '../../services/data.service';
import UserModel from '../../models/user.model';
import {Router} from '@angular/router';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _usersArray: UserModel[];
  filteredArray: UserModel[];

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.getUsers()
      .subscribe(
        data => {
          this._usersArray = data;
          this.filteredArray = data;
        },
        err => console.log(err)
      );
  }

  onDetail( user: UserModel ): void {
    this.dataService.setCurrentUser( user );
    this.router.navigate( [ '/detail' ] );
  }

  private _filterUsers( filterTerm: string ): void {
    if (filterTerm !== '') {
      this.filteredArray = this._usersArray.filter(
        ( user: UserModel ) => {
          return user.firstName.match( filterTerm.toLowerCase() )
                 || user.lastName.match( filterTerm.toLowerCase() );
        }
      );
    } else {
      this.filteredArray = this._usersArray;
    }

  }

  onFilterChange( event: string ): void {
    this._filterUsers( event );
  }

}
