import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {


 users : any[] = [];;

  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(
      (responseData: any) => {
       this.users = responseData
       this.filterUsers('ALL');
      }
    );
  
  }
 
  filteredUsers = this.users; 
  filterUsers(role: string) {
    if (role === 'ALL') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(user => user.role === role);
    }
  }
}

