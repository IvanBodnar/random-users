import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

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
    private dataService: DataService,
    private location: Location
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

  onBack(): void {
    this.location.back();
  }

}
