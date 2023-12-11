import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
