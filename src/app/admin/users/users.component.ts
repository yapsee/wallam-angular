import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserShowComponent } from 'src/app/shared/components/modals/user-show/user-show.component';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {


 users : any[] = [];
 bsModalRef!: BsModalRef;

  constructor(
    private userService: UserService,
    private modalService: BsModalService
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

  deleteUser(user: any) {
    console.log('Delete campaign:', user);
  }


  openUserInfoModal(user: any) {
    const initialState = {
      user: user
    };

    this.bsModalRef = this.modalService.show(UserShowComponent, { initialState });
  }
}

