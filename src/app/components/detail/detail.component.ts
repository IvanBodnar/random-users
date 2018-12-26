import { Component, OnInit } from '@angular/core';

import {DataService} from '../../services/data.service';
import UserModel from '../../models/user.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  currentUser: UserModel;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.currentUser$
      .subscribe(
        user => {
          this.currentUser = user;
        },
        error => console.log(error)
      );
  }

}
