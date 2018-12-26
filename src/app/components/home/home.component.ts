import { Component, OnInit } from '@angular/core';

import {DataService} from '../../services/data.service';
import UserModel from '../../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usersArray: UserModel[];

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.getUsers()
      .subscribe(
        data => {
          this.usersArray = data;
        },
        err => console.log(err)
      );
  }

  onDetail( user: UserModel ): void {
    this.router.navigate( [ '/detail' ] );
  }

}
