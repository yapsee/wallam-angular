import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Auth } from '../../classes/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  campaigns: any;
  currentUser!: User ;

  constructor(
   
  ) {

  }

  ngOnInit(): void {
    this.currentUser = Auth.user;
  }
 
}
